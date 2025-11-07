import React, { useState } from "react";
import NestedSidebar from "../NestedSidebar";
const InventorySidebar = () => {
  const [tab, setTab] = useState("all-items");
 
  const sections = [
    {
      items: [
        { key: "all-items", label: "Item Records", },
        { key: "add-editItem", label: "Add / Edit Item"},
      ],
    },
    {
      title: "Categories",
      items: [
        { key: "Medicines", label: "Medicines"},
        { key: "Equipment", label: "Equipment"},
        { key: "Consumables", label: "Consumables"},
      ],
    },
  ];

  return (
    <div>
      <NestedSidebar sections={sections} tab={tab} setTab={setTab} />
    </div>
  );
};

export default InventorySidebar;
