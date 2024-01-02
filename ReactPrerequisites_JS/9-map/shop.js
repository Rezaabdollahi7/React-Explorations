
// داده‌های محصولات
const productsData = [
    { id: 1, category: 'Clothing', name: 'T-Shirt', price: 20.0 },
    { id: 2, category: 'Clothing', name: 'Jeans', price: 35.0 },
    { id: 3, category: 'Electronics', name: 'Laptop', price: 800.0 },
    { id: 4, category: 'Electronics', name: 'Smartphone', price: 400.0 },
    { id: 5, category: 'Grocery', name: 'Rice', price: 10.0 },
    { id: 6, category: 'Grocery', name: 'Cereal', price: 5.0 },
];

// تابع نمایش محصول
function displayProduct(product) {
    return `
            <div class="product">
              <h3>${product.name}</h3>
              <p>Category: ${product.category}</p>
              <p>Price: $${product.price.toFixed(2)}</p>
            </div>
          `;
}

// تابع نمایش لیست محصولات
function displayProductList(category) {
    const filteredProducts = productsData.filter(product => product.category === category);
    const productList = filteredProducts.map(product => displayProduct(product)).join('');
    return `
            <div class="product-list">
              <h2>${category} Products</h2>
              ${productList}
            </div>
          `;
}

// تابع نمایش فروشگاه
function displayStore() {
    const categories = ['Clothing', 'Electronics', 'Grocery'];
    const storeContent = categories.map(category => displayProductList(category)).join('');
    document.getElementById('store').innerHTML = `
            <h1>Welcome to Our Store</h1>
            ${storeContent}
          `;
}

// نمایش فروشگاه
displayStore();