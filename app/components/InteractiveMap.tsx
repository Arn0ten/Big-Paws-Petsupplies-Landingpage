// "use client";

// import { useState, useEffect } from "react";
// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import { Button } from "@/components/ui/button";

// // Fix for default marker icon
// delete (L.Icon.Default.prototype as any)._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: "/images/marker-icon-2x.png",
//   iconUrl: "/images/marker-icon.png",
//   shadowUrl: "/images/marker-shadow.png",
// });

// const petHotelLocation: [number, number] = [7.4460297, 125.8037527]; // Big Paws Pet Hotel coordinates

// function ChangeView({
//   center,
//   zoom,
// }: {
//   center: [number, number];
//   zoom: number;
// }) {
//   const map = useMap();
//   map.setView(center, zoom);
//   return null;
// }

// function InteractiveMap() {
//   const [userLocation, setUserLocation] = useState<[number, number] | null>(
//     null,
//   );
//   const [directions, setDirections] = useState<any>(null);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setUserLocation([
//             position.coords.latitude,
//             position.coords.longitude,
//           ]);
//         },
//         (error) => {
//           console.error("Error getting user location:", error);
//         },
//       );
//     }
//   }, []);

//   const getDirections = () => {
//     if (!userLocation) return;

//     const directionsService = new (
//       window as any
//     ).google.maps.DirectionsService();
//     const directionsRenderer = new (
//       window as any
//     ).google.maps.DirectionsRenderer();

//     directionsService.route(
//       {
//         origin: { lat: userLocation[0], lng: userLocation[1] },
//         destination: { lat: petHotelLocation[0], lng: petHotelLocation[1] },
//         travelMode: (window as any).google.maps.TravelMode.DRIVING,
//       },
//       (result: any, status: string) => {
//         if (status === (window as any).google.maps.DirectionsStatus.OK) {
//           setDirections(result);
//         } else {
//           console.error(`error fetching directions ${result}`);
//         }
//       },
//     );
//   };

//   return (
//     <div className="h-[400px] relative">
//       <MapContainer
//         center={petHotelLocation}
//         zoom={13}
//         style={{ height: "100%", width: "100%" }}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         {userLocation && (
//           <>
//             <Marker position={userLocation}>
//               <Popup>Your Location</Popup>
//             </Marker>
//             <ChangeView center={userLocation} zoom={13} />
//           </>
//         )}
//         <Marker position={petHotelLocation}>
//           <Popup>Big Paws Pet Hotel</Popup>
//         </Marker>
//         {directions && <DirectionsRenderer directions={directions} />}
//       </MapContainer>
//       <div className="absolute bottom-4 left-4 z-[1000]">
//         <Button onClick={getDirections} disabled={!userLocation}>
//           Get Directions
//         </Button>
//       </div>
//     </div>
//   );
// }

// function DirectionsRenderer({ directions }: { directions: any }) {
//   const map = useMap();
//   useEffect(() => {
//     if (directions) {
//       const directionsRenderer = new L.Polyline(
//         directions.routes[0].overview_path.map((p: any) => [p.lat(), p.lng()]),
//         { color: "blue" },
//       );
//       directionsRenderer.addTo(map);
//       map.fitBounds(directionsRenderer.getBounds());
//     }
//   }, [directions, map]);

//   return null;
// }

// export default InteractiveMap;
