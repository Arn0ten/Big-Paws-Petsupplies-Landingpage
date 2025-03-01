import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin } from "lucide-react";

export default function MapSection() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Find Your Way to Big Paws Pet Hotel
            </CardTitle>
            <CardDescription>
              Get personalized directions from your location to our pet hotel.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Link href="/map">
              <Button size="lg" className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Open Interactive Map
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
