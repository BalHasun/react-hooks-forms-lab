import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setsearch] = useState("");
  const [allData, setAllData] = useState(items);
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function noop(event) {
    console.log(event.target.value);
    setsearch(event.target.value);
  }
  const itemsToDisplay = allData.filter((item) => {
    if (selectedCategory === "All" && search === "") {
      return true;
    } else if (selectedCategory !== "All" && search === "") {
      return item.category === selectedCategory;
    } else if (selectedCategory === "All" && search !== "") {
      return item.name.includes(search);
    } else {
      return (
        item.name.includes(search) && item.category === selectedCategory
      );
    }
  });
  const onItemFormSubmit = (data) => {
    console.log(data);
    console.log(allData);
    setAllData([...allData, data]);
    console.log(allData);
  };
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter
        search={search}
        onSearchChange={noop}
        onCategoryChange={handleCategoryChange}
      />

      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
