import request from '@/utils/request'
import instance from '@/api/api'
export function login(data) {
  return request({
    url: 'http://localhost:3000/auth/login',
    method: 'post',
    data
  })
}

export async function getInfo(token) {
  // Make a GET request to fetch user data using the JWT token
  console.log('Make a GET request to fetch user data using the JWT token')
  const userResponse = await instance.get('auth/profile', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  console.log(userResponse)
  return userResponse
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
