import React, { useEffect } from 'react'
import Post from '../molecules/Post'
import { XDispatch, XUseSelector } from '../../store'
import { useDispatch } from 'react-redux';
import { fetchGetAllPosts } from '../../store/feature/postSlice';
import { IPostResponse } from '../../model/IPostResponse';

function PostList() {
  const postList = XUseSelector(state => state.post.postsList);
  const dispatch = useDispatch<XDispatch>();
  useEffect(()=>{
    dispatch(fetchGetAllPosts());
  },[])

  return (
    <div className="col">
      {
        postList.map((post, index)=>{
          
          
          return <Post key={index} userAvatar={post.avatar}
                userId='1' userName={post.userName} name={post.name}
                isPremium={true} sharedTime={19} comment={post.comment}
                postImageUrl='https://picsum.photos/300/300'
                postId='1'
                commentCount={567}
                likeCount={111}
                retweetCount={123}
                viewsCount={9889}
                />
        })
      }
        
   
        
    </div>
  )
}

export default PostList