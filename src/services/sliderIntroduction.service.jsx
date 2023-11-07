const API_URL = "https://65457cf3fe036a2fa95459a0.mockapi.io/api/v1/";

// lấy danh sách slider giới thiệu (không cần xác thực?)
const getListSliderIntroduction = () => {
  //   const user = JSON.parse(localStorage.getItem("user"));

  const requestOptions = {
    method: "GET",
    // sử dụng để xác thực quyền, nhưng mockapi không hỗ trợ
    // headers: {
    //   Authorization: "Bearer " + user.token,
    // },
    redirect: "follow",
  };

  return fetch(API_URL + "slideIntroduction", requestOptions).then(
    (response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    }
  );
};

const sliderIntroductionService = { getListSliderIntroduction };

export default sliderIntroductionService;
