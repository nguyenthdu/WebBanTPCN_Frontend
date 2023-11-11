import { useState } from "react";

function useCount() {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);

    if (!isNaN(value) && value >= 1 && value <= 999) {
      setCount(value);
    } else {
      // Nếu giá trị không hợp lệ, giữ nguyên giá trị hiện tại của count hoặc đặt nó là 0
      setCount(1);
    }
  };

  return {
    count,
    handleIncrement,
    handleDecrement,
    handleChange,
  };
}

export default useCount;
