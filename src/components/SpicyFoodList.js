import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray);
  }

  const [filterBy, setFilterBy] = useState("All");

  const foodsToDisplay = foods.filter((food) => {
    if (filterBy === "All") {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  })

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  function handleLiClick(id) {
    // const removeFoodArray = foods.filter(food => (food.id !== id))
    // setFoods(removeFoodArray);
    foods.map(food => {
      if (food.id === id) {
       return food.heatLevel++;
      } else {
        return food;
      }
    });
    const updateFoodArray = [...foods];
    setFoods(updateFoodArray);
  }
  

  function handleFilterChange(event) {
    setFilterBy(event.target.value);
  }




  // function handleSelectFood(event) {
  //   console.log(event.target.value);
  //   const selectFoodArray = foods.filter(food => food.cuisine === event.target.value)
  //   setFoods(selectFoodArray);
  // }

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
    </div>
  );
}

export default SpicyFoodList;
