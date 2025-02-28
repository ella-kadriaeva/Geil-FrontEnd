const BASE_URL = "http://localhost:3333";

export const getAllCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}/categories/all`);
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export const getCategoryById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/categories/${id}`);
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export const getAllProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products/all`);
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export const getProductById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export const sendForSale = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/sale/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export const sendForOrder = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/order/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}