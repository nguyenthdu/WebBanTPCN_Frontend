import foodFunctionService from "../../services/foodFunction.service";

// create actions of products
export const handleSelectAll = () => ({
  type: "HANDLE_SELECT_ALL",
});

export const handleCheckbox = (id) => ({
  type: "HANDLE_CHECKBOX",
  payload: id,
});

export const fetchItems = () => {
  return async (dispatch) => {
    try {
      const data = await foodFunctionService.getFoodList();
      dispatch({ type: "FETCH_ITEMS_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_ITEMS_ERROR", payload: error.message });
    }
  };
};
