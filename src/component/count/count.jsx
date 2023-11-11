import React, { useEffect } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import useCount from "../../hook/count/useCount";
import "./style.scss";

function Count({ hidden, countValue }) {
  const { count, handleIncrement, handleDecrement, handleChange } = useCount();

  useEffect(() => {
    countValue(count);
  }, [count, countValue]);

  const increment = () => {
    handleIncrement();
  };

  const decrement = () => {
    handleDecrement();
  };

  const change = (e) => {
    const value = parseInt(e.target.value, 10);
    handleChange(value);
  };

  return (
    <div className="counter d-flex align-items-center">
      {hidden !== 1 ? null : (
        <h5 className="txt-count pe-3 ps-3">Chọn số lượng: </h5>
      )}
      <div className="c-count d-flex align-items-center">
        <FaMinus
          className="icon-count m-2"
          onClick={decrement}
          style={count === 1 ? { color: "gray" } : null}
        />
        <input
          className="counter-input"
          type="text"
          value={count}
          onChange={change}
        />
        <FaPlus
          className="icon-count m-2"
          onClick={increment}
          style={count === 999 ? { color: "gray" } : null}
        />
      </div>
    </div>
  );
}

export default Count;
