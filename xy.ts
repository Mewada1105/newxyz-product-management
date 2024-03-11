// Define a Product interface
interface Product {
    id: number;
    name: string;
    quantity: number;
  }
  
  // Dummy inventory data
  let inventory: Product[] = [
    { id: 1, name: "Product 1", quantity: 10 },
    { id: 2, name: "Product 2", quantity: 8 },
    { id: 3, name: "Product 3", quantity: 3 },
    // Add more products here
  ];
  
  // Function to display inventory
  function displayInventory() {
    const inventoryContainer = document.getElementById("inventory");
    inventoryContainer.innerHTML = "";
  
    inventory.forEach(product => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
  
      const productName = document.createElement("span");
      productName.textContent = product.name;
  
      const productQuantity = document.createElement("span");
      productQuantity.textContent = `Quantity: ${product.quantity}`;
  
      const buyButton = document.createElement("button");
      buyButton.textContent = "Buy";
      buyButton.addEventListener("click", () => buyProduct(product));
  
      productDiv.appendChild(productName);
      productDiv.appendChild(productQuantity);
      productDiv.appendChild(buyButton);
  
      inventoryContainer.appendChild(productDiv);
    });
  }
  
  // Function to buy a product
  function buyProduct(product: Product) {
    if (product.quantity > 0) {
      product.quantity--;
      displayInventory();
      if (product.quantity < 5) {
        raiseReorderRequest(product);
      }
    } else {
      alert("Product out of stock!");
    }
  }
  
  // Function to raise reorder request
  function raiseReorderRequest(product: Product) {
    console.log(`Reorder request raised for ${product.name}`);
  }
  
  // Display initial inventory
  displayInventory();
  
