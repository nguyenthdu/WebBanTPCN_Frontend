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
  items: [
    {
      id: 1,
      code: "SP01",
      name: "Áo thun nam",
      quantity: 10,
      price: 100000,
      selected: false,
    },
    {
      id: 2,
      code: "SP02",
      name: "Áo thun nữ",
      quantity: 20,
      price: 200000,
      selected: false,
    },
    {
      id: 3,
      code: "SP03",
      name: "Áo thun trẻ em",
      quantity: 30,
      price: 300000,
      selected: false,
    },
    {
      id: 4,
      code: "SP04",
      name: "Áo thun nam",
      quantity: 40,
      price: 400000,
      selected: false,
    },
  ],
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

    default:
      return state;
  }
};

export default productReducer;
