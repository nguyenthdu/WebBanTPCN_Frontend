const typeFoodService = {
  getAllTypeFood: async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/typeFoods");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error fetching type foods:", error.message);
      throw error; // Rethrow the error to let the calling code handle it
    }
  },
  getTypeFoodById: async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/typeFoods/${id}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error fetching type foods:", error.message);
      throw error; // Rethrow the error to let the calling code handle it
    }
  },
};

export default typeFoodService;
