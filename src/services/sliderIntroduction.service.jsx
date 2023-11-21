import { apiUtilsSLIDER } from "../apiUtils/apiUtils";

const sliderIntroductionService = {
  getListSliderIntroduction: () =>
    apiUtilsSLIDER.request("slideIntroduction", "GET"),
};

export default sliderIntroductionService;
