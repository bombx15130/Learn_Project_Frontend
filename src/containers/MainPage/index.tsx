import React from 'react'
import Styles from './Style'
import useGetUserInfo from '@hooks/useGetUserInfo'

const MainPage = () => {
  const { username } = useGetUserInfo()

  return (
    <Styles>
      <div>hello, {username}</div>
    </Styles>
  )
}

export default MainPage