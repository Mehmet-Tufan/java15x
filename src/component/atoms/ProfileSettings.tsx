import React from 'react'
import './ProfileSettings.css'
import { useDispatch } from 'react-redux';
import { XDispatch, XUseSelector } from '../../store';
import { userLogout } from '../../store/feature/authSlice';
function ProfileSettings() {
    // DİKKAT!!!! react-redux ın reducer, fetch işlemlerinmi tetiklemek için yani redux e bilfirmek için useDispatch();
    const dispatch = useDispatch<XDispatch>();

    const profile = XUseSelector(state=> state.user.profile);
    const logout = async ()=>{
        await localStorage.removeItem('token');
        dispatch(userLogout());
    }
  return (
    <div className="row align-items-center">
                <div className="col-2">
                    <img className='x-profile-setting-img' src={profile?.avatar} />
                </div>
                <div className="col-7 ">
                    <div className="row">
                         <label className='x-profile-setting-name'>{profile?.name}</label>
                         <label className='x-profile-setting-user-name'>@{profile?.userName}</label>
                    </div>                   
                </div>
                <div className="col-3">
                <i onClick={logout} className="fa-solid fa-arrow-right-from-bracket fa-xl" style={{color: '#e41111'}}></i>
                </div>
    </div>
  )
}

export default ProfileSettings