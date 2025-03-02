"use client";

import { useState, useEffect, useCallback } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import L from "leaflet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Navigation, ArrowLeft, Crosshair, Search } from "lucide-react";
import Link from "next/link";

const petHotelLocation: [number, number] = [7.4460297, 125.8037527];

// Lazy-load the map component to avoid SSR issues
const MapContainerNoSSR = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false },
);

// Ensure icons are only created on the client
const createCustomIcon = (iconUrl: string, text?: string) => {
  if (typeof window === "undefined") return undefined; // Prevent SSR error

  return L.divIcon({
    className: "custom-icon",
    html: `
      <div style="position: relative; width: 60px; height: 60px;">
        <img src="${iconUrl}" style="width: 100%; height: 100%; object-fit: contain;" />
        ${text ? `<span style="position: absolute; bottom: -20px; left: 50%; transform: translateX(-50%); white-space: nowrap; background: white; padding: 2px 4px; border-radius: 4px; font-weight: bold;">${text}</span>` : ""}
      </div>
    `,
    iconSize: [50, 50],
    iconAnchor: [20, 60],
    popupAnchor: [0, -40],
  });
};

export default function MapPage() {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(
    null,
  );
  const [route, setRoute] = useState<[number, number][]>([]);
  const [address, setAddress] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [petHotelIcon, setPetHotelIcon] = useState<L.DivIcon | undefined>(
    undefined,
  );
  const [userLocationIcon, setUserLocationIcon] = useState<
    L.DivIcon | undefined
  >(undefined);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPetHotelIcon(createCustomIcon("BigPawsLogo.png"));
      setUserLocationIcon(createCustomIcon("you-are-here.png", "You"));

      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "/images/marker-icon-2x.png",
        iconUrl: "/images/marker-icon.png",
        shadowUrl: "/images/marker-shadow.png",
      });
    }
  }, []);

  const calculateRoute = useCallback(
    async (start: [number, number], end: [number, number]) => {
      try {
        const response = await fetch(
          `https://router.project-osrm.org/route/v1/driving/${start[1]},${start[0]};${end[1]},${end[0]}?overview=full&geometries=geojson`,
        );
        const data = await response.json();
        if (data.routes && data.routes.length > 0) {
          setRoute(
            data.routes[0].geometry.coordinates.map(
              (coord: [number, number]) => [coord[1], coord[0]],
            ),
          );
        }
      } catch (error) {
        console.error("Error calculating route:", error);
        setError("Unable to calculate route. Please try again.");
      }
    },
    [],
  );

  useEffect(() => {
    if (userLocation) {
      calculateRoute(userLocation, petHotelLocation);
    }
  }, [userLocation, calculateRoute]);

  const handleLocate = useCallback(() => {
    if (typeof window !== "undefined" && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([
            position.coords.latitude,
            position.coords.longitude,
          ]);
          setError(null);
        },
        (error) => {
          console.error("Error getting user location:", error);
          setError(
            "Unable to get your location. Please enter an address or click on the map.",
          );
        },
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }, []);

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full overflow-hidden">
        <div className="relative h-[calc(100vh-2rem)] flex flex-col">
          <div className="p-4 bg-background">
            <h1 className="text-2xl font-bold mb-2">
              Directions to Big Paws Pet Hotel
            </h1>
          </div>
          <div className="flex-grow relative">
            <MapContainerNoSSR
              center={petHotelLocation}
              zoom={13}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {userLocation && userLocationIcon && (
                <Marker position={userLocation} icon={userLocationIcon}>
                  <Popup>Your Location</Popup>
                </Marker>
              )}
              {petHotelIcon && (
                <Marker position={petHotelLocation} icon={petHotelIcon}>
                  <Popup>Big Paws Pet Hotel</Popup>
                </Marker>
              )}
              {route.length > 0 && <Polyline positions={route} color="blue" />}
            </MapContainerNoSSR>
          </div>
          <div className="p-4 bg-background flex justify-between">
            <Link href="/">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <Button onClick={handleLocate} className="flex items-center gap-2">
              <Crosshair className="h-4 w-4" />
              Locate Me
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
