import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Salem",
    },
    {
      id: 2,
      title: "Rasipuram",
    },
    {
      id: 3,
      title: "Namakkal",
    },
    {
      id: 4,
      title: "Attur",
    },
    {
      id: 5,
      title: "Chennai",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}>
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
