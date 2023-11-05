import { useState } from "react";

const useModal = () => {
  // set state show modal
  const [isShowing, setIsShowing] = useState(false);

  // set state toggle modal
  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  };
};

export default useModal;
