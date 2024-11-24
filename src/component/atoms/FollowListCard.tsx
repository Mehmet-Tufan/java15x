import React from 'react'
import './FollowListCard.css'

interface IFollowListCardProps {
  userName: string
  name: string
  avatar: string
  userId: string
}
function FollowListCard(props: IFollowListCardProps) {
  const { userName, name, avatar, userId } = props
  return (
    <div>
      <div className="row align-items-center x-list">
 
         <div className="col-3">
            <img className='x-img-avatar' src={avatar}  />
         </div>


         <div className="col-5">

               <div className="row align-items-bottom">
                  <label className='x-follow-text-name' >{name}</label>
               </div>

               <div className="row align-items-top">
               <label className='x-follow-text-username' >@{userName}</label>

               </div>
            
         </div>


         <div className="col-4">
          <input className='x-btn-follow' type="button" value="Takip Et" />
         </div>

      </div>
    </div>
  )
}

export default FollowListCard