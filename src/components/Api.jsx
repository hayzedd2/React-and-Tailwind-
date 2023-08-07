import axios from 'axios';

const Api = async () => {
  try {
    const response = await axios.get(
      'https://famous-quotes4.p.rapidapi.com/random',
      {
        headers: {
          'X-RapidAPI-Key': 'xyB5C9ct6D1vptvmyECMNw==0cSSMrn0pIJ07HVm',
        },
      }
    );
    console.log(response.data)
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export default Api;