// "use client";

// import { useState, useEffect, useCallback } from "react";
// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   Popup,
//   Polyline,
//   useMap,
//   useMapEvents,
// } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Navigation, ArrowLeft, Crosshair, Search } from "lucide-react";
// import Link from "next/link";

// const petHotelLocation: [number, number] = [7.4460297, 125.8037527]; // Big Paws Pet Hotel coordinates

// // Create a custom icon for the pet hotel and user location
// const createCustomIcon = (iconUrl: string, text?: string) => {
//   return L.divIcon({
//     className: "custom-icon",
//     html: `
//       <div style="position: relative; width: 60px; height: 60px;">
//         <img src="${iconUrl}" style="width: 100%; height: 100%; object-fit: contain;" />
//         ${text ? `<span style="position: absolute; bottom: -20px; left: 50%; transform: translateX(-50%); white-space: nowrap; background: white; padding: 2px 4px; border-radius: 4px; font-weight: bold;">${text}</span>` : ""}
//       </div>
//     `,
//     iconSize: [50, 50],
//     iconAnchor: [20, 60],
//     popupAnchor: [0, -40],
//   });
// };

// const petHotelIcon = createCustomIcon("BigPawsLogo.png");
// const userLocationIcon = createCustomIcon("you-are-here.png", "You");

// function ChangeView({
//   center,
//   zoom,
// }: {
//   center: [number, number];
//   zoom: number;
// }) {
//   const map = useMap();
//   useEffect(() => {
//     map.setView(center, zoom);
//   }, [center, zoom, map]);
//   return null;
// }

// function LocationMarker({
//   setUserLocation,
// }: {
//   setUserLocation: (location: [number, number]) => void;
// }) {
//   useMapEvents({
//     click(e) {
//       setUserLocation([e.latlng.lat, e.latlng.lng]);
//     },
//   });

//   return null;
// }

// export default function MapPage() {
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       delete (L.Icon.Default.prototype as any)._getIconUrl;
//       L.Icon.Default.mergeOptions({
//         iconRetinaUrl: "/images/marker-icon-2x.png",
//         iconUrl: "/images/marker-icon.png",
//         shadowUrl: "/images/marker-shadow.png",
//       });
//     }
//   }, []);

//   const [userLocation, setUserLocation] = useState<[number, number] | null>(
//     null,
//   );
//   const [route, setRoute] = useState<[number, number][]>([]);
//   const [address, setAddress] = useState("");
//   const [error, setError] = useState<string | null>(null);

//   const calculateRoute = useCallback(
//     async (start: [number, number], end: [number, number]) => {
//       try {
//         const response = await fetch(
//           `https://router.project-osrm.org/route/v1/driving/${start[1]},${start[0]};${end[1]},${end[0]}?overview=full&geometries=geojson`,
//         );
//         const data = await response.json();
//         if (data.routes && data.routes.length > 0) {
//           setRoute(
//             data.routes[0].geometry.coordinates.map(
//               (coord: [number, number]) => [coord[1], coord[0]],
//             ),
//           );
//         }
//       } catch (error) {
//         console.error("Error calculating route:", error);
//         setError("Unable to calculate route. Please try again.");
//       }
//     },
//     [],
//   );

//   useEffect(() => {
//     if (userLocation) {
//       calculateRoute(userLocation, petHotelLocation);
//     }
//   }, [userLocation, calculateRoute]);

//   const handleLocate = useCallback(() => {
//     if (typeof window !== "undefined" && "geolocation" in navigator) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setUserLocation([
//             position.coords.latitude,
//             position.coords.longitude,
//           ]);
//           setError(null);
//         },
//         (error) => {
//           console.error("Error getting user location:", error);
//           setError(
//             "Unable to get your location. Please enter an address or click on the map.",
//           );
//         },
//       );
//     } else {
//       setError("Geolocation is not supported by your browser.");
//     }
//   }, []);

//   const handleAddressSearch = useCallback(async () => {
//     try {
//       const response = await fetch(
//         `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`,
//       );
//       const data = await response.json();
//       if (data && data.length > 0) {
//         setUserLocation([
//           Number.parseFloat(data[0].lat),
//           Number.parseFloat(data[0].lon),
//         ]);
//         setError(null);
//       } else {
//         setError("Address not found. Please try a different address.");
//       }
//     } catch (error) {
//       console.error("Error searching address:", error);
//       setError("Unable to search address. Please try again.");
//     }
//   }, [address]);

//   return (
//     <div className="container mx-auto p-4">
//       <Card className="w-full overflow-hidden">
//         <div className="relative h-[calc(100vh-2rem)] flex flex-col">
//           <div className="p-4 bg-background">
//             <h1 className="text-2xl font-bold mb-2">
//               Directions to Big Paws Pet Hotel
//             </h1>
//             <p className="text-muted-foreground mb-4">
//               Follow the blue line on the map for the best route.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-2 mb-4">
//               <Input
//                 type="text"
//                 placeholder="Enter your address"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 className="flex-grow"
//               />
//               <Button
//                 onClick={handleAddressSearch}
//                 className="flex items-center gap-2 w-full sm:w-auto"
//               >
//                 <Search className="h-4 w-4" />
//                 Search
//               </Button>
//             </div>
//             {error && <p className="text-red-500 mb-2">{error}</p>}
//           </div>
//           <div className="flex-grow relative">
//             <MapContainer
//               center={petHotelLocation}
//               zoom={13}
//               style={{ height: "100%", width: "100%" }}
//             >
//               <TileLayer
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//               />
//               {userLocation && (
//                 <>
//                   <Marker position={userLocation} icon={userLocationIcon}>
//                     <Popup>Your Location</Popup>
//                   </Marker>
//                   <ChangeView center={userLocation} zoom={13} />
//                 </>
//               )}
//               <Marker position={petHotelLocation} icon={petHotelIcon}>
//                 <Popup>Big Paws Pet Hotel</Popup>
//               </Marker>
//               {route.length > 0 && <Polyline positions={route} color="blue" />}
//               <LocationMarker setUserLocation={setUserLocation} />
//             </MapContainer>
//           </div>
//           <div className="p-4 bg-background flex flex-col sm:flex-row justify-between items-center gap-2">
//             <Link href="/" className="w-full sm:w-auto">
//               <Button
//                 variant="outline"
//                 size="sm"
//                 className="flex items-center gap-2 w-full sm:w-auto"
//               >
//                 <ArrowLeft className="h-4 w-4" />
//                 Back to Home
//               </Button>
//             </Link>
//             <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
//               <Button
//                 onClick={handleLocate}
//                 className="flex items-center gap-2 w-full sm:w-auto"
//               >
//                 <Crosshair className="h-4 w-4" />
//                 Locate Me
//               </Button>
//               <Button
//                 onClick={() =>
//                   userLocation && calculateRoute(userLocation, petHotelLocation)
//                 }
//                 disabled={!userLocation}
//                 className="flex items-center gap-2 w-full sm:w-auto"
//               >
//                 <Navigation className="h-4 w-4" />
//                 Recalculate Route
//               </Button>
//             </div>
//           </div>
//         </div>
//       </Card>
//     </div>
//   );
// }
