"use client"
import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";

export default function Map({address}: {address: string}){
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initMap = async () => {
            const loader = new Loader({
              apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
              version: "weekly",
            });

            const { Map } = await loader.importLibrary("maps");

            const position = {
              lat: -1.09413,
              lng: 35.8558071,
            };

            const mapOptions: google.maps.MapOptions = {
                center: position,
                zoom: 17,
                mapId: "map",
            }

            const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
        }

        initMap();
    },[]);

    return(
        <div className="h-full w-full md:w-1/2" ref={mapRef}></div>
    );
}
