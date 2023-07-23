export const getDiscountFilteredData = (products, discount) => {
  return products.filter((product) => product.discount >= discount);
};

export const getPriceFilteredData = (products, price) => {
  return products.filter((product) => Number(product.price) <= Number(price));
};

export const getRatingFilteredData = (products, rating) => {
  console.log(products);
  return products.filter((product) => Number(product.rating) >= Number(rating));
};

export const searchFilteredData = (products, word) => {
  return products.filter(({ title }) =>
    title.toLowerCase().includes(word.toLowerCase())
  );
};

export const getCategoryFilteredData = (products, categories) => {
  console.log(products.filter((product) => categories[product.category]));
  if (Object.values(categories).every((val) => val === false)) {
    return products;
  } else {
    console.log(products);
    console.log(
      products.map((product) => categories[product.categoryName]),
      "false"
    );
    return products.filter((product) => categories[product.category]);
  }
};

export const getSortedData = (products, sort) => {
  if (sort === "HIGH_TO_LOW")
    return [...products].sort((a, b) => b.price - a.price);
  if (sort === "LOW_TO_HIGH")
    return [...products].sort((a, b) => a.price - b.price);
  return products;
};
