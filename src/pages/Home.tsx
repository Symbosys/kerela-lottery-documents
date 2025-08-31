import { useState } from "react";
import Gst from "@/components/docs/Gst";
import Noc from "@/components/docs/Noc";
import Tds from "@/components/docs/Tds";
import GovermentStamp from "@/components/docs/Stamp";
import PlayBoy  from "@/components/docs/PlayBoy";

const Home = () => {
  const tabs = [
    {id : "Playboy", label: "Playboy" },
    { id: "stamp", label: "Stamp" },
    { id: "gst", label: "GST" },
    { id: "tds", label: "TDS" },
    { id: "noc", label: "NOC" },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="w-full px-4">
      {/* Tabs Header (Sticky) */}
      <div className="sticky top-0 bg-white z-50 w-full flex justify-between border-b shadow-sm">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 text-center text-sm md:text-lg py-3 transition-colors duration-200
              ${
                activeTab === tab.id
                  ? "border-b-2 border-blue-500 text-blue-600 font-semibold"
                  : "text-gray-500 hover:text-gray-700"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="mt-4 w-full">
        {activeTab === "stamp" && (
          <div className="text-center">
            <GovermentStamp />
          </div>
        )}
        {activeTab === "Playboy" && (
          <div className="text-center">
            <PlayBoy />
          </div>
        )}
        {activeTab === "gst" && <Gst />}
        {activeTab === "tds" && <Tds />}
        {activeTab === "noc" && (
          <div className="text-center">
            <Noc />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
