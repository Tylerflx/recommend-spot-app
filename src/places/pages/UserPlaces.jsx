import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: 1,
    title: "Hanover",
    description:
      "sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus",
    imageUrl: "http://dummyimage.com/247x100.png/dddddd/000000",
    address: "84257 Kensington Circle",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
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
      lat: 51.181012,
      long: -15.676,
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
      long: +45.2237713,
    },
    creator: "uid3",
  },
];
const UserPlaces = () => {
  //get the params from route
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
