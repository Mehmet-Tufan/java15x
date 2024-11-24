import React from 'react'
import './SharePost.css'
import UserAvatar from '../atoms/UserAvatar'
import { useDispatch } from 'react-redux';
import { XDispatch } from '../../store';
import { INewPostRequest } from '../../model/INewPostRequest';
import { fetchNewPost } from '../../store/feature/postSlice';
import swal from 'sweetalert';

function SharePost() {

  const [comment, setComment] = React.useState('');
  const dispatch = useDispatch <XDispatch> ();
  const createPost = () => {
    const token = localStorage.getItem('token');
    const post: INewPostRequest = {
      comment: comment,
      imageUrl: 'https://picsum.photos/200/200',
      token: token ? token : ''
    }
    dispatch(fetchNewPost(post)).then(data => {
      setComment('');
      swal ('Başarılı','Yeni Post oluşturuldu', 'success');
    });
    
  }
  return (
    <div>
      <div className="row border mt-5 p-2">

         <div className="col-2 text-center mt-1">
           <UserAvatar userAvatarUrl="https://picsum.photos/100/100" />
         </div>


         <div className="col-10">

            <div className="row">
                <textarea value={comment} onChange={(evt) => setComment(evt.target.value)} className='x-new-post-commet' rows={5} placeholder='Bir gönderi yaz'></textarea>

            </div>

            <div className='row'>
               <hr className='x-new-post-bottom-line' />
            </div>


            <div className="row">

               <div className="col-8 align-items-center">
                <i className="fa-regular fa-image fa-xs x-new-post-icon" style={{color: '#1da1f2'}}></i>
                <i className="fa-solid fa-list-ul fa-xs x-new-post-icon" style={{color: '#1da1f2'}}></i>
                <i className="fa-regular fa-face-smile fa-xs x-new-post-icon"  style={{color: '#1da1f2'}}></i>
                <i className="fa-regular fa-clock fa-xs x-new-post-icon"  style={{color: '#1da1f2'}}></i>
                <i className="fa-solid fa-location-dot fa-xs x-new-post-icon"  style={{color: '#1da1f2'}}></i>
                <i className="fa-solid fa-bold fa-xs x-new-post-icon"  style={{color: '#1da1f2'}}></i>
                <i className="fa-solid fa-italic fa-xs x-new-post-icon"  style={{color: '#1da1f2'}}></i>
               </div>


               <div className="col-4 text-end">
                <input onClick={createPost} type="button" value="Gönder" className='x-new-post-btn-send' />
               </div>

            </div>

         </div>

      </div>
    </div>
  )
}

export default SharePost