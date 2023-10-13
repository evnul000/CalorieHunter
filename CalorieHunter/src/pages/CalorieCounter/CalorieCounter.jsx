import React, { useState } from 'react';
import './CalorieCounter.scss';
import { Doughnut } from 'react-chartjs-2';
import {
    ArcElement,
    Chart as ChartJS,
    Legend as ChartjsLegend,
    Tooltip
  } from 'chart.js';
  
  ChartJS.register(ArcElement, Tooltip,ChartjsLegend);

function CalorieCounter() {
  const [selectedFood, setSelectedFood] = useState(''); // To store the currently selected food item.
  const [foodList, setFoodList] = useState([]); // To store the list of selected food items and their calories.
  const [totalCalories, setTotalCalories] = useState(0); // To keep track of the total calories.

  const foodItems = [
    { name: 'Eggs', calories: 70 },
    { name: 'Apple', calories: 95 },
    { name: 'Coke', calories: 140 },
    { name: "McDonald's Cheeseburger", calories: 300 },
    // Add more food items here
  ];

  const handleFoodSelection = (event) => {
    const selectedFoodName = event.target.value;
    const selectedFoodItem = foodItems.find((item) => item.name === selectedFoodName);

    if (selectedFoodItem) {
      setSelectedFood(selectedFoodName);
      setTotalCalories(totalCalories + selectedFoodItem.calories);
      setFoodList([...foodList, selectedFoodItem]);
    }
  };

  const removeFoodItem = (foodItem) => {
    const updatedFoodList = foodList.filter((item) => item !== foodItem);
    setFoodList(updatedFoodList);
    setTotalCalories(totalCalories - foodItem.calories);
  };

  const data = {
    labels: ['Consumed Calories', 'Remaining Calories'],
    datasets: [
      {
        data: [totalCalories, 3000 - totalCalories],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  }

  return (
    <div>
      <h1>Calorie Hunter</h1>

      {/* Dropdown menu */}
      <select value={selectedFood} onChange={handleFoodSelection}>
        <option value="">Select a food</option>
        {foodItems.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>

      {/* Display selected food items and their calories on the right side */}
       <div className="selected-food-list">
        <h2>Selected Food List</h2>
        <ul>
          {foodList.map((item, index) => (
            <li key={index}>
              {item.name} - {item.calories} calories
              <button onClick={() => removeFoodItem(item)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total Calories: {totalCalories} calories</p>
      
        <Doughnut data={data} />
      </div>
      
    </div>
  );
}

export default CalorieCounter;