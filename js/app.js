const user = JSON.parse(localStorage.getItem("sessionUser"));
if (!user) window.location.href = "login.html";

cities.forEach(c => {
  locationSelect.innerHTML += `<option>${c}</option>`;
});

const theme = localStorage.getItem("theme");
if (theme === "dark") document.body.classList.add("dark");

function toggleTheme() {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme",
    document.body.classList.contains("dark") ? "dark" : "light");
}

locationSelect.onchange = loadRestaurants;
search.oninput = loadRestaurants;
ratingFilter.onchange = loadRestaurants;
typeFilter.onchange = loadRestaurants;

function loadRestaurants() {
  restaurantList.innerHTML = "";
  const city = locationSelect.value;
  localStorage.setItem("selectedCity", city);

  restaurants
    .filter(r => r.city === city)
    .filter(r => !ratingFilter.value || r.rating >= ratingFilter.value)
    .filter(r => !typeFilter.value || r.menu.some(m => m.type === typeFilter.value))
    .filter(r => r.name.toLowerCase().includes(search.value.toLowerCase()))
    .forEach(r => {
      restaurantList.innerHTML += `
        restaurantList.innerHTML += `
  <div class="card" onclick="openMenu(${r.id})">
    <img src="https://source.unsplash.com/400x300/?indian,food">
    <div class="card-content">
      <h3>${r.name}</h3>
      <p>⭐ ${r.rating} • ${r.time}</p>
      <p>${r.city}</p>
    </div>
  </div>
`;;
    });
}

function openMenu(id) {
  const r = restaurants.find(x => x.id === id);
  menuTitle.innerText = r.name;
  menuItems.innerHTML = "";

  r.menu.forEach(item => {
    menuItems.innerHTML += `
  <div class="card">
    <div class="card-content">
      <h3>${item.name}</h3>
      <p>${item.type}</p>
      <p>₹${item.price}</p>
      <button onclick='addToCart(${JSON.stringify(item)})'>ADD</button>
    </div>
  </div>
`;
  });

  menuModal.classList.remove("hidden");
}

function closeMenu() {
  menuModal.classList.add("hidden");
}

loadRestaurants();
