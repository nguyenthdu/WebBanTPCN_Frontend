const API_URL = "https://65457cf3fe036a2fa95459a0.mockapi.io/api/v1/";

const getFoodList = () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(API_URL + "foodFunction", requestOptions).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
};

const getFood = (id) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  return fetch(API_URL + "foodFunction/" + id, requestOptions).then(
    (response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    }
  );
};

const foodFunctionService = { getFoodList, getFood };

export default foodFunctionService;
