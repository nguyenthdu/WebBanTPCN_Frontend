import userService from "../../services/crudUser.service";

export const handleSelectAll = () => ({
  type: "HANDLE_SELECT_ALL",
});

export const handleCheckbox = (id) => ({
  type: "HANDLE_CHECKBOX",
  payload: id,
});

export const getAllUser = () => {
  return async (dispatch) => {
    try {
      const data = await userService.getAllUser();
      dispatch({ type: "GET_ALL_USER_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "GET_ALL_USER_ERROR", payload: error.message });
    }
  };
};

export const deleteUser = (id) => {
  return async (dispatch) => {
    try {
      await userService.deleteUser(id);
      dispatch({ type: "DELETE_USER_SUCCESS", payload: id });
    } catch (error) {
      dispatch({ type: "DELETE_USER_ERROR", payload: error.message });
    }
  };
};
