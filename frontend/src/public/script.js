document.getElementById('load-products').addEventListener('click', async () => {
  try {
      const response = await fetch('http://127.0.0.1:30001/products');
      const products = await response.json();

      const productsContainer = document.getElementById('products-container');
      productsContainer.innerHTML = '';

      products.forEach(product => {
          const productDiv = document.createElement('div');
          productDiv.className = 'product-item';
          productDiv.innerHTML = `<strong>Product ID:</strong> ${product.productId} <br> <strong>Title:</strong> ${product.title}`;
          productsContainer.appendChild(productDiv);
      });
  } catch (error) {
      console.error('Error loading products:', error);
  }
});
