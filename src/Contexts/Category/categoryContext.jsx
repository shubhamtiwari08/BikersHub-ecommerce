import React, { createContext, useEffect, useState } from "react";

export const useCategory = createContext();

function CategoryProvider({ children }) {
  const [categoryData, setCategoryData] = useState([]);

  const categoriesHandle = async () => {
    try {
      const response = await fetch("/api/categories");
      const data = await response.json();
      setCategoryData(data.categories);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    categoriesHandle();
  }, []);

  return (
    <div>
      <useCategory.Provider
        value={{ categoriesHandle, categoryData, setCategoryData }}
      >
        {children}
      </useCategory.Provider>
    </div>
  );
}

export default CategoryProvider;
