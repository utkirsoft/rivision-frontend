// src/services/api.js
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000/' // Replace with your API URL
})

export default instance
