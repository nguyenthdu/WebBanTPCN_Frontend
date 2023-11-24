const initialState = {
  header: [
    { id: 0, title: "Chọn toàn bộ" },
    { id: 1, title: "ID" },
    { id: 2, title: "Họ" },
    { id: 3, title: "Tên" },
    { id: 4, title: "Số điện thoại" },
    { id: 5, title: "Email" },
    { id: 6, title: "Tên tài khoản" },
    { id: 7, title: "Mật khẩu" },
    { id: 8, title: "Quyền" },
  ],
  selectAll: false,
  itemsUser: [],
  error: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_CHECKBOX":
      const handleCheckbox = (id) => {
        const updatedItems = state.itemsUser.map((element) => {
          if (id === 0) {
            if (element.id === 0) return { ...element, selected: true };
            return { ...element, selected: false };
          } else {
            if (element.id === id) {
              return { ...element, selected: !element.selected };
            }
            return element.id === 0 ? { ...element, selected: false } : element;
          }
        });
        return { ...state, itemsUser: updatedItems };
      };
      return handleCheckbox(action.payload);

    case "HANDLE_SELECT_ALL":
      const handleSelectAll = () => {
        const updatedItems = state.itemsUser.map((element) => ({
          ...element,
          selected: !state.selectAll,
        }));
        return {
          ...state,
          itemsUser: updatedItems,
          selectAll: !state.selectAll,
        };
      };
      return handleSelectAll();

    case "GET_ALL_USER_SUCCESS":
      return { ...state, itemsUser: action.payload, error: null };

    case "GET_ALL_USER_ERROR":
      return { ...state, error: action.payload };

    case "DELETE_USER_SUCCESS":
      const deleteUser = (id) => {
        const updatedItems = state.itemsUser.filter(
          (element) => element.id !== id
        );
        return { ...state, itemsUser: updatedItems };
      };
      return deleteUser(action.payload);

    case "DELETE_USER_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default UserReducer;
