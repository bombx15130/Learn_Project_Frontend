
export default function useGetUserInfo() {
  const userInfo = sessionStorage.getItem("userInfo")
  if (userInfo) {
    const data = JSON.parse(userInfo)
    return data
  } else {
    return {
      username: ''
    }
  }
}