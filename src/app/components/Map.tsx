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

            //init marker
            const {Marker} = await loader.importLibrary("marker") as google.maps.MarkerLibrary;


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

            //put up marker
            const marker = new Marker({
                map: map,
                position: position,
            })
        }

        initMap();
    },[]);

    return(
        <div className="h-full w-full lg:w-1/2" ref={mapRef}></div>
    );
}
