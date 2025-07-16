import http from '../utils/axiosInstance'

export const getMainInfo = async () => {
  try {
    const response = await http.get('/main-info');
    console.log("portfolioService/getMainInfo:", response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching main info:', error);
    throw error;
  }
}