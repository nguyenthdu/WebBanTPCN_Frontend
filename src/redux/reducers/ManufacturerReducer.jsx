const initialState = {
  header: [
    { id: 0, title: "Chọn toàn bộ" },
    { id: 1, title: "Tên nhà sản xuất" },
    { id: 2, title: "Số điện thoại" },
    { id: 3, title: "Email" },
    { id: 4, title: "Địa chỉ" },
    { id: 5, title: "Mô tả" },
  ],
  selectAll: false,
  itemsManufacturer: [],
  error: null,
};

const ManufacturerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_CHECKBOX":
      const handleCheckbox = (id) => {
        const updatedItems = state.itemsManufacturer.map((element) => {
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
        return { ...state, itemsManufacturer: updatedItems };
      };
      return handleCheckbox(action.payload);

    case "HANDLE_SELECT_ALL":
      const handleSelectAll = () => {
        const updatedItems = state.itemsManufacturer.map((element) => ({
          ...element,
          selected: !state.selectAll,
        }));
        return {
          ...state,
          itemsManufacturer: updatedItems,
          selectAll: !state.selectAll,
        };
      };
      return handleSelectAll();

    case "GET_ALL_MANUFACTURER_SUCCESS":
      return { ...state, itemsManufacturer: action.payload, error: null };

    case "GET_ALL_MANUFACTURER_ERROR":
      return { ...state, error: action.payload };

    case "ADD_MANUFACTURER_SUCCESS":
      return {
        ...state,
        itemsManufacturer: [...state.itemsManufacturer, action.payload],
        error: null,
      };

    case "ADD_MANUFACTURER_ERROR":
      return { ...state, error: action.payload };

    case "UPDATE_MANUFACTURER_SUCCESS":
      const updatedItems = state.itemsManufacturer.map((element) => {
        if (element.id === action.payload.id) {
          return action.payload;
        }
        return element;
      });
      return { ...state, itemsManufacturer: updatedItems, error: null };

    case "UPDATE_MANUFACTURER_ERROR":
      return { ...state, error: action.payload };

    case "DELETE_MANUFACTURER_SUCCESS":
      const deletedItems = state.itemsManufacturer.filter(
        (element) => element.id !== action.payload
      );
      return { ...state, itemsManufacturer: deletedItems, error: null };

    case "DELETE_MANUFACTURER_ERROR":
      return { ...state, error: action.payload };

    case "GET_MANUFACTURER_SUCCESS":
      return { ...state, itemsManufacturer: action.payload, error: null };

    case "GET_MANUFACTURER_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default ManufacturerReducer;
