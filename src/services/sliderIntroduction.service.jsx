import { apiUtils } from "../apiUtils/apiUtils";

const sliderIntroductionService = {
  getListSliderIntroduction: () => apiUtils.request("slideIntroduction", "GET"),
};

export default sliderIntroductionService;
