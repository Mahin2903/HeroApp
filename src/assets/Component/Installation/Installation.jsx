import React, { useMemo, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredApp, removeStoredApp } from "../Utility/Utility";
import { PiDownloadSimple } from "react-icons/pi";
import { FaStar } from "react-icons/fa";

const Installation = () => {
  const data = useLoaderData() || [];
  const [sortBy, setSortBy] = useState("");
  const [refresh, setRefresh] = useState(false);

  const AppList = useMemo(() => {
  const storedIds = (getStoredApp() || []).map(Number);

  let list = data.filter(app => storedIds.includes(app.id));

  if (sortBy === "size") {
    list.sort((a, b) => a.size - b.size);
  }

  if (sortBy === "rating") {
    list.sort((a, b) => b.ratingAvg - a.ratingAvg);
  }

  if (sortBy === "downloads") {
    list.sort((a, b) => b.downloads - a.downloads);
  }
  


  return list;
}, [data, refresh, sortBy]);
const handleUninstall = (id) => {
    removeStoredApp(id);
    setRefresh(prev => !prev);
  };
  const convertTedNumber = (downloads) => {
    return Math.abs(Number(downloads)) >= 1.0e+9
      ? (Math.abs(Number(downloads)) / 1.0e+9).toFixed(2) + "B"
      : Math.abs(Number(downloads)) >= 1.0e+6
      ? (Math.abs(Number(downloads)) / 1.0e+6).toFixed(2) + "M"
      : Math.abs(Number(downloads)) >= 1.0e+3
      ? (Math.abs(Number(downloads)) / 1.0e+3).toFixed(2) + "K"
      : Math.abs(Number(downloads));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900">
          Your Installed Apps
        </h1>
        <p className="mt-3 text-slate-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      
      
      <div className="flex items-center justify-between mb-6">
  <h2 className="text-lg font-semibold text-slate-900">
    {AppList.length} Apps Found
  </h2>

  <select
    value={sortBy}
    onChange={(e) => setSortBy(e.target.value)}
    className="border rounded-md px-4 py-2 text-slate-600 focus:outline-none"
  >
    <option value="">Sort By</option>
    <option value="size">Size</option>
    <option value="rating">Rating</option>
    <option value="downloads">Downloads</option>
  </select>
</div>

      
      <div className="space-y-4 sm:space-y-6">
        {AppList.map((app) => (
          <div
            key={app.id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white rounded-lg shadow-sm p-4 sm:p-6"
          >
            <div className="flex">
              <div className="max-w-[80px] max-h-[80px] mr-4">
                <img src={app.image} alt={app.title} />
              </div>

              <div>
                <h3 className="text-lg mb-4">{app.title}</h3>
                <div className="flex gap-4">
                  <p className="flex items-center gap-1 text-[#00d390]">
                    <PiDownloadSimple /> {convertTedNumber(app.downloads)}
                  </p>
                  <p className="flex items-center gap-1 text-[#ff8811]">
                    <FaStar /> {app.ratingAvg}
                  </p>
                  <p className="text-gray-500">{app.size} MB</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleUninstall(app.id)}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;