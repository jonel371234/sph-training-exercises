import { useState } from "react";

export default function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(Object.keys(tabs)[0]);

  return (
    <div className="flex flex-col min-h-[93vh] mx-auto rounded-lg bg-white">
      <div className="flex border-b bg-white rounded-t-lg shadow-sm">
        {Object.keys(tabs).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 text-center font-medium transition 
              ${
                activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-blue-500"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex-1 p-6 overflow-y-auto bg-white">{tabs[activeTab]}</div>
    </div>
  );
}
