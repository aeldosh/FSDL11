// JavaScript code to dynamically add menu items

// Function to add a new menu item
function addMenuItem(name, description, price, link) {
    // Create new menu item div
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';

    // Create and add menu item link
    const itemLink = document.createElement('a');
    itemLink.href = link;
    itemLink.target = '_blank';

    // Create and add menu item name
    const itemName = document.createElement('h3');
    itemName.textContent = name;
    itemLink.appendChild(itemName);
    menuItem.appendChild(itemLink);

    // Create and add menu item description
    const itemDescription = document.createElement('p');
    itemDescription.textContent = description;
    menuItem.appendChild(itemDescription);

    // Create and add menu item price
    const itemPrice = document.createElement('span');
    itemPrice.className = 'price';
    itemPrice.textContent = `$${price}`;
    menuItem.appendChild(itemPrice);

    // Add the new menu item to the menu section
    const menu = document.getElementById('menu');
    menu.appendChild(menuItem);
}

// Example: Adding new menu items
document.addEventListener('DOMContentLoaded', () => {
    addMenuItem('Burger', 'Juicy beef burger with fresh lettuce and tomato', 8, 'burger.html');
    addMenuItem('Salad', 'Fresh mixed greens with a variety of toppings', 7, 'salad.html');
    // Add more items as needed
});

console.log('Welcome to Our Restaurant');
