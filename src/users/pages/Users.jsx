import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "uid1",
      name: "Herman Rawles",
      image: "http://dummyimage.com/193x100.png/cc0000/ffffff",
      places: 1,
    },
    {
      id: "uid2",
      name: "Cristi Chaters",
      image: "http://dummyimage.com/236x100.png/5fa2dd/ffffff",
      places: 9,
    },
    {
      id: "uid3",
      name: "Melisande Sigmund",
      image: "http://dummyimage.com/233x100.png/ff4444/ffffff",
      places: 5,
    },
    {
      id: "uid4",
      name: "Samuel Climson",
      image: "http://dummyimage.com/238x100.png/ff4444/ffffff",
      places: 6,
    },
    {
      id: "uid5",
      name: "Maureene Campo",
      image: "http://dummyimage.com/250x100.png/5fa2dd/ffffff",
      places: 4,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
