"use client";

import L from "leaflet";
import { LatLngTuple } from "leaflet";
import { useTranslations } from "next-intl";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const redIcon = new L.Icon({
  iconUrl: "/gps.png",
  iconSize: [50, 50],
  iconAnchor: [17, 46],
  popupAnchor: [-20, -66],
});

const position: LatLngTuple = [30.062484149184794, 31.338515898322484];

const LeafletMap = () => {
  const t = useTranslations("MapPopup");
  return (
    <main className="pt-[120px] rounded-sm">
      <div
        className="h-[647px] gradient"
        style={{
          position: "relative",
        }}
      >
        <MapContainer
          className="h-[547px] w-full"
          style={{ position: "absolute", top: 0, left: 0 }}
          center={position}
          zoom={20}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={redIcon}>
            <Popup>
              <p className="font-medium text-white w-[150px] align-center h-[50px]">
                <span className="font-bold text-xl text-[#49BD88]">
                  {t("digi")}
                </span>{" "}
                <span className="font-bold text-xl text-white">{t("fly")}</span>{" "}
                {t("content")}
              </p>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </main>
  );
};

export default LeafletMap;
