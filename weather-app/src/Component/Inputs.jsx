import React, { useState } from "react";
import { UilLocationPoint, UilSearch } from "@iconscout/react-unicons";
import { toast } from "react-toastify";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState();

  const handleSearchClick = () => {
    if (city !== "") {
      setQuery({ q: city });
      setCity("");
    }
  };

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info("Fetching users location");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.info("Location Fetched");

        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({ lat, lon });
      });
    }
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search for city"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:lowercase"
        />
        <UilSearch
          size={25}
          onClick={handleSearchClick}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
        <UilLocationPoint
          size={25}
          onClick={handleLocationClick}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          onClick={handleUnitsChange}
          name="metric"
          className="text-xl text-white font-light transition ease-out hover:scale-125">
          °C
        </button>
        <p className="text-xl  mx-2"> | </p>
        <button
          onClick={handleUnitsChange}
          name="imperial"
          className="text-xl text-white font-light transition ease-out hover:scale-125">
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
