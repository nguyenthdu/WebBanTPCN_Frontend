const initialState = {
  header: [
    { id: 0, title: "Chọn toàn bộ" },
    { id: 1, title: "Tên loại sản phẩm" },
  ],
  selectAll: false,
  itemsCategory: [],
  error: null,
};

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_CHECKBOX":
      const handleCheckbox = (id) => {
        const updatedItems = state.itemsCategory.map((element) => {
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
        return { ...state, itemsCategory: updatedItems };
      };
      return handleCheckbox(action.payload);

    case "HANDLE_SELECT_ALL":
      const handleSelectAll = () => {
        const updatedItems = state.itemsCategory.map((element) => ({
          ...element,
          selected: !state.selectAll,
        }));
        return {
          ...state,
          itemsCategory: updatedItems,
          selectAll: !state.selectAll,
        };
      };
      return handleSelectAll();

    case "GET_ALL_CATEGORY_SUCCESS":
      return { ...state, itemsCategory: action.payload, error: null };

    case "GET_ALL_CATEGORY_ERROR":
      return { ...state, error: action.payload };

    case "ADD_CATEGORY_SUCCESS":
      return {
        ...state,
        itemsCategory: [...state.itemsCategory, action.payload],
        error: null,
      };

    case "ADD_CATEGORY_ERROR":
      return { ...state, error: action.payload };

    case "UPDATE_CATEGORY_SUCCESS":
      const updatedItems = state.itemsCategory.map((element) => {
        if (element.id === action.payload.id) {
          return action.payload;
        }
        return element;
      });
      return { ...state, itemsCategory: updatedItems, error: null };

    case "UPDATE_CATEGORY_ERROR":
      return { ...state, error: action.payload };

    case "DELETE_CATEGORY_SUCCESS":
      const deletedItems = state.itemsCategory.filter(
        (element) => element.id !== action.payload
      );
      return { ...state, itemsCategory: deletedItems, error: null };

    case "DELETE_CATEGORY_ERROR":
      return { ...state, error: action.payload };

    case "GET_CATEGORY_SUCCESS":
      return { ...state, itemsCategory: action.payload, error: null };

    case "GET_CATEGORY_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default CategoryReducer;
