// apiService.js
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000/' // Set your API base URL
  // You can also set other default configuration options here

})

export async function fetchData(formData) {
  try {
    const response = await instance.post(
      'order',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          transformRequest: formData => formData
        }
      }) // Adjust the endpoint
    return response.data
  } catch (error) {
    throw error
  }
}
