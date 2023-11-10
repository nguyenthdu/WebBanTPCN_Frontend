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

// const getSearchFood = (name) => {
//   const requestOptions = { method: "GET", redirect: "follow" };
//   const searchURL = API_URL + "foodFunction/?name=" + name;
//   return fetch(searchURL, requestOptions).then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     console.log("trong service: " + JSON.stringify(response.json()));
//     return response.json();
//   });
// };

const getFoodByName = (name) => {
  const url =
    "https://shopeeapi2.p.rapidapi.com/id/search?q=Keripik%20Kentang&p=1";
  const requestOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
      "X-RapidAPI-Host": "shopeeapi2.p.rapidapi.com",
    },
  };

  return fetch(url, requestOptions).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    console.log("trong service: " + JSON.stringify(response.json()));
    return response.json();
  });
};

const foodFunctionService = { getFoodList, getFood, getFoodByName };

export default foodFunctionService;
