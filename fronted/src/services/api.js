// Simulated API Service for Agriculture Advisory Backend Connection
export const API_BASE_URL = "https://api.agrismart-ai.internal/v1";

export const fetchSimulatedData = async (endpoint, payload = null, delay = 800) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
        success: true,
        timestamp: new Date().toISOString(),
        data: payload
      });
    }, delay);
  });
};
