// create reducer switch case and initial state
const initialState = {
  header: [
    { id: 0, title: "Chọn toàn bộ" },
    { id: 1, title: "Tên thương hiệu" },
    { id: 2, title: "Mô tả" },
    { id: 3, title: "Xuất xứ" },
  ],
  selectAll: false,
  itemsBrand: [],
  error: null,
};

const BrandReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_CHECKBOX":
      const handleCheckbox = (id) => {
        const updatedItems = state.itemsBrand.map((element) => {
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
        return { ...state, itemsBrand: updatedItems };
      };
      return handleCheckbox(action.payload);

    case "HANDLE_SELECT_ALL":
      const handleSelectAll = () => {
        const updatedItems = state.itemsBrand.map((element) => ({
          ...element,
          selected: !state.selectAll,
        }));
        return {
          ...state,
          itemsBrand: updatedItems,
          selectAll: !state.selectAll,
        };
      };
      return handleSelectAll();

    case "GET_ALL_BRAND_SUCCESS":
      return { ...state, itemsBrand: action.payload, error: null };

    case "GET_ALL_BRAND_ERROR":
      return { ...state, error: action.payload };

    case "ADD_BRAND_SUCCESS":
      return {
        ...state,
        itemsBrand: [...state.itemsBrand, action.payload],
        error: null,
      };

    case "ADD_BRAND_ERROR":
      return { ...state, error: action.payload };

    case "UPDATE_BRAND_SUCCESS":
      const updatedItems = state.itemsBrand.map((element) => {
        if (element.id === action.payload.id) {
          return action.payload;
        }
        return element;
      });
      return { ...state, itemsBrand: updatedItems, error: null };

    case "UPDATE_BRAND_ERROR":
      return { ...state, error: action.payload };

    case "DELETE_BRAND_SUCCESS":
      const deletedItems = state.itemsBrand.filter(
        (element) => element.id !== action.payload
      );
      return { ...state, itemsBrand: deletedItems, error: null };

    case "DELETE_BRAND_ERROR":
      return { ...state, error: action.payload };

    case "GET_BRAND_SUCCESS":
      return { ...state, itemsBrand: action.payload, error: null };

    case "GET_BRAND_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default BrandReducer;
