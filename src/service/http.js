import axios from 'axios'
import store from '../store'
import router from '../router/'

axios.interceptors.response.use(
  (response) => {
    return response
  },
  function(error) {
    if (error.response.status === 401) {
      store.commit('setAuth', null)
      router.push({ name: 'Login' })
    }
    return Promise.reject(error.response)
  }
)

export default {
  get: (url, params = {}) => {
    return axios({
      url: `http://localhost:3000/${url}`,
      method: 'get',
      params: params,
      headers: {
        Authorization: `Bearer ${store.state.authData.access_token}`,
        contentType: 'application/json;charset=UTF-8'
      }
    })
  },

  all: (url) => {
    return axios({
      url: `http://localhost:3000/api/${url}`,
      method: 'all',
      headers: {
        Authorization: `Bearer ${store.state.authData.access_token}`,
        contentType: 'application/json;charset=UTF-8'
      }
    })
  },

  getPFile: (url, params = {}) => {
    return axios({
      url: `http://localhost:3000/${url}`,
      method: 'get',
      params,
      responseType: 'blob',
      headers: {
        Authorization: `Bearer ${store.state.authData.access_token}`,
        contentType: 'application/json;charset=UTF-8'
      }
    })
  },

  postPFile: (url, data, params = {}) => {
    return axios({
      url: `http://localhost:3000/api/${url}`,
      method: 'post',
      data: data,
      params,
      responseType: 'blob',
      headers: {
        Authorization: `Bearer ${store.state.authData.access_token}`,
        contentType: 'application/json;charset=UTF-8'
      }
    })
  },

  post: (url, data) => {
    return axios({
      url: `http://localhost:3000/${url}`,
      method: 'post',
      data: data,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${store.state.authData.access_token}`
      }
    })
  },
  postParam: (url, params, data) => {
    return axios({
      url: `http://localhost:3000/api/${url}`,
      method: 'post',
      data: data,
      params: params,
      headers: {
        Authorization: `Bearer ${store.state.authData.access_token}`
      }
    })
  },
  postExternal: (url, data) => {
    return axios({
      url: url.startsWith('http') ? url : `http://localhost:3000/api/${url}`,
      method: 'post',
      data: data
    })
  },

  put: (url, data) => {
    return axios({
      url: `http://localhost:3000/${url}`,
      method: 'put',
      data: data,
      headers: {
        Authorization: `Bearer ${store.state.authData.access_token}`
      }
    })
  },

  putParam: (url, params, data) => {
    return axios({
      url: `http://localhost:3000/api/${url}`,
      method: 'put',
      data: data,
      params: params,
      headers: {
        Authorization: `Bearer ${store.state.authData.access_token}`
      }
    })
  },

  patch: (url, data) => {
    return axios({
      url: `http://localhost:3000/api/${url}`,
      method: 'patch',
      data: data,
      headers: {
        Authorization: `Bearer ${store.state.authData.access_token}`
      }
    })
  },

  delete: (url) => {
    return axios({
      url: `http://localhost:3000/api/${url}`,
      method: 'delete',
      headers: {
        Authorization: `Bearer ${store.state.authData.access_token}`
      }
    })
  },
  deleteParam: (url, params) => {
    return axios({
      url: `http://localhost:3000/api/${url}`,
      method: 'delete',
      params: params,
      headers: {
        Authorization: `Bearer ${store.state.authData.access_token}`
      }
    })
  }
}
