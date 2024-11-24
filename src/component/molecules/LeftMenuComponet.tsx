import React from 'react'
import LeftButtons from '../atoms/LeftButtons'
import ProfileSettings from '../atoms/ProfileSettings'

function LeftMenuComponet() {
  return (
    <div className='row justify-content-end mt-1'>
        <div className="col-8 mt-1 mb-2">
            <ProfileSettings />
        </div>

        <div className="col-8 ">

            <div className="row mb-2 ">
                <LeftButtons iconType='Home' name='Anasayfa' path='/home' isActive={true}/>
            </div>

            <div className="row mb-2">
                <LeftButtons iconType='Search' name='Keşfet' path='/search' />
            </div>

            <div className="row mb-2">
                <LeftButtons iconType='Notifications' name='Bildirimler' path='/notification' />
            </div>

            <div className="row mb-2 ">
                <LeftButtons iconType='List' name='Listeler' path='/lists' />
            </div>

            <div className="row mb-2 ">
                <LeftButtons iconType='Locations' name='Yer İşaretleri' path='/locations' />
            </div>

            <div className="row mb-2 ">
                <LeftButtons iconType='Profile' name='Profil' path='/profile' />

            </div>

            <div className="row mb-2">
                <LeftButtons iconType='Messages' name='Mesajlar' path='/messages' />
            </div>

            <div className="row mb-2">
                <LeftButtons iconType='More' name='Daha Fazla' path='/more' />
            </div>




            <div className="row"></div>
            <div className="row"></div>
            <div className="row"></div>
            <div className="row"></div>

        </div>

    </div>
  )
}

export default LeftMenuComponet