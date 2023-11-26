import typeFoodService from "../../services/typeFood.service";

const getAllTypeFood = () => {
  return async (dispatch) => {
    try {
      const data = await typeFoodService.getAllTypeFood();
      dispatch({ type: "GET_ALL_typeFood_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "GET_ALL_typeFood_ERROR", payload: error.message });
    }
  };
};
