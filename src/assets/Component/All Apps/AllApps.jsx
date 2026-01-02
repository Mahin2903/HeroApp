import React, { Suspense, useEffect, useState } from "react";
import AllApp from "./AllApp";

const AllApps = () => {
  const [Appdata, setAllApps] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchVal, setSearchVal] = useState("");


  useEffect(() => {
    fetch("App.json")
      .then((res) => res.json())
      .then((data) => {
        setAllApps(data);
        setProducts(data); 
      });
  }, []);


  const handleSearch = (value) => {
    setSearchVal(value);

    if (!value.trim()) {
      setProducts(Appdata);
      return;
    }

    const filtered = Appdata.filter((item) =>
      item.companyName.toLowerCase().includes(value.toLowerCase())
    );

    setProducts(filtered);
  };

  return (
    <div>
      {/* Header */}
      <h1 className="font-bold text-[48px] text-center mb-4">
        Our All Applications
      </h1>

      <p className="text-[14px] md:text-xl text-gray-500 mb-10 text-center">
        Explore All Apps on the Market developed by us. <br />
        We code for Millions
      </p>

      {/* Search Bar */}
      <div className="flex items-center justify-between flex-wrap px-8 gap-4">
        <p className="text-black ml-4 font-semibold text-2xl">
          ({products.length}) Apps Found
        </p>

        <label className="input flex items-center gap-2 mx-auto md:mx-0">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </g>
          </svg>

          <input
            type="search"
            placeholder="Search apps..."
            value={searchVal}
            onChange={(e) => handleSearch(e.target.value)}
            className="grow"
          />
        </label>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-4 gap-9 px-4 mx-auto mt-8">
        <Suspense fallback={<span>Loading...</span>}>
          {products.map((app) => (
            <AllApp key={app.id} App={app} />
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default AllApps;