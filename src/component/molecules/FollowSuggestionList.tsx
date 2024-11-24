import React, { memo } from 'react'
import FollowListCard from '../atoms/FollowListCard'

function FollowSuggestionList() {
  return (
    <div className='col'>

        <div className="row p-2 ">
            <h6 style={{color: 'white',marginTop: '10px',marginBottom: '10px'}}>Bunları Beğenebilirsin</h6>
        </div>


        <div className="row">

           <FollowListCard userId='001' userName='muhammet' name='MuhammetHoca' avatar='https://picsum.photos/100/100' />
           <FollowListCard userId='002' userName='muhammet' name='MuhammetHoca' avatar='https://picsum.photos/100/100' />
           <FollowListCard userId='003' userName='muhammet' name='MuhammetHoca' avatar='https://picsum.photos/100/100' />


        </div>


        <div className="row p-2">
        <span style={{color: '#1da1f2',fontSize: '12px'}}>Daha fazla görüntüle</span>
        </div>

    </div>
  )
}

export default memo(FollowSuggestionList); // FollowSuggestionList