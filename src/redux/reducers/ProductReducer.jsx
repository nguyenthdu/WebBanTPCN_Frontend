import { convertImagesToBase64 } from "../actions/ProductActions";

// create reducer switch case and initial state
const initialState = {
  header: [
    { id: 0, title: "Chọn toàn bộ" },
    { id: 1, title: "Hình ảnh minh họa" },
    { id: 2, title: "Tên sản phẩm" },
    { id: 3, title: "Tồn kho" },
    { id: 4, title: "Giá" },
  ],
  selectAll: false,
  items: [],
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_CHECKBOX":
      const handleCheckbox = (id) => {
        const updatedItems = state.items.map((element) => {
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
        return { ...state, items: updatedItems };
      };
      return handleCheckbox(action.payload);

    case "HANDLE_SELECT_ALL":
      const handleSelectAll = () => {
        const updatedItems = state.items.map((element) => ({
          ...element,
          selected: !state.selectAll,
        }));
        return { ...state, items: updatedItems, selectAll: !state.selectAll };
      };
      return handleSelectAll();

    case "FETCH_ITEMS_SUCCESS":
      return {
        ...state,
        items: convertImagesToBase64(action.payload),
        error: null,
      };

    case "FETCH_ITEMS_ERROR":
      return { ...state, error: action.payload };

    case "ADD_ITEMS_SUCCESS":
      return { ...state, items: [...state.items, action.payload], error: null };

    case "ADD_ITEMS_ERROR":
      return { ...state, error: action.payload };

    case "UPDATE_ITEMS_SUCCESS":
      const updatedItems = state.items.map((element) => {
        if (element.id === action.payload.id) {
          return action.payload;
        }
        return element;
      });
      return { ...state, items: updatedItems, error: null };

    case "UPDATE_ITEMS_ERROR":
      return { ...state, error: action.payload };

    case "DELETE_ITEMS_SUCCESS":
      const deletedItems = state.items.filter(
        (element) => element.id !== action.payload
      );
      return { ...state, items: deletedItems, error: null };

    case "DELETE_ITEMS_ERROR":
      return { ...state, error: action.payload };

    case "GET_ITEMS_SUCCESS":
      return { ...state, items: action.payload, error: null };

    case "GET_ITEMS_ERROR":
      return { ...state, error: action.payload };

    case "GET_FOOD_LIST_BY_PAGE_SUCCESS":
      return { ...state, items: action.payload, error: null };

    case "GET_FOOD_LIST_BY_PAGE_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default productReducer;
