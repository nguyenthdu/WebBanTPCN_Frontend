// create reducer switch case and initial state
const initialState = {
  header: [
    { id: 0, title: "Chọn toàn bộ" },
    { id: 1, title: "ID" },
    { id: 2, title: "Code" },
    { id: 3, title: "Tên sản phẩm" },
    { id: 4, title: "Tồn kho" },
    { id: 5, title: "Giá" },
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
      return { ...state, items: action.payload, error: null };

    case "FETCH_ITEMS_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default productReducer;
