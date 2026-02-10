const cities = [
  "Hyderabad","Bengaluru","Chennai",
  "Mumbai","Delhi","Pune","Kolkata"
];

const stored = JSON.parse(localStorage.getItem("restaurants"));

const restaurants = stored || [
  {
    id: 1,
    city: "Hyderabad",
    name: "Royal Biryani House",
    rating: 4.4,
    time: "30-40 mins",
    menu: [
      { name: "Chicken Biryani", price: 220, type: "Non-Veg" },
      { name: "Paneer Biryani", price: 180, type: "Veg" }
    ]
  },
  {
    id: 2,
    city: "Bengaluru",
    name: "Dosa Corner",
    rating: 4.6,
    time: "20-30 mins",
    menu: [
      { name: "Masala Dosa", price: 80, type: "Veg" },
      { name: "Idli Vada", price: 60, type: "Veg" }
    ]
  }
];
