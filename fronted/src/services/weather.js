import { MOCK_WEATHER_DATA } from '../utils/constants';

export const fetchAgriWeather = async (location = "Green Valley Agri-Zone") => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ...MOCK_WEATHER_DATA,
        location,
        lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
    }, 600);
  });
};
