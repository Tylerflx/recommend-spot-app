import React from "react";
import PlaceList from "../components/PlaceList";

const UserPlaces = () => {
  const DUMMY_PLACES = [
    {
      id: 1,
      title: "Hanover",
      description:
        "sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus",
      imageUrl: "http://dummyimage.com/247x100.png/dddddd/000000",
      address: "84257 Kensington Circle",
      location: {
        lat: 1.683061,
        long: -77.072933,
      },
      creator: "uid1",
    },
    {
      id: 2,
      title: "Sunnyside",
      description:
        "diam vitae quam suspendisse potenti nullam porttitor lacus at",
      imageUrl: "http://dummyimage.com/193x100.png/cc0000/ffffff",
      address: "0950 Sullivan Drive",
      location: {
        lat: 59.36296,
        long: 18.1468001,
      },
      creator: "uid1",
    },
    {
      id: 3,
      title: "Luster",
      description:
        "hac habitasse platea dictumst aliquam augue quam sollicitudin vitae",
      imageUrl: "http://dummyimage.com/163x100.png/5fa2dd/ffffff",
      address: "37 Oriole Hill",
      location: {
        lat: -12.7787793,
        long: 45.2237713,
      },
      creator: "uid3",
    },
  ];
  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
