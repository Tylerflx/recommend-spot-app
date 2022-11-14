import React, { useRef, useEffect } from "react";
import "./map.css";

const Map = (props) => {
  const mapRef = useRef();

  //obj restructering
  //pull constant out of props and store it as new variables
  const { center, zoom } = props;

  useEffect(() => {
    //render map
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
    });

    //render a marker
    new window.google.maps.Marker({ position: center, map: map });
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
