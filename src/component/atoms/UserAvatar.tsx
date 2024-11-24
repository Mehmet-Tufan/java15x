import React, { memo } from 'react'
import './UserAvatar.css'
interface IUserAvatarProps {
    userAvatarUrl: string
}
function UserAvatar(props: IUserAvatarProps) {
    const url = props.userAvatarUrl
  return (
    <>
       <img className='x-user-avatar' src={url} />
    </>
  )
}

export default memo(UserAvatar) // UserAvatar