import React, { memo } from 'react'
import './Post.css'
import UserAvatar from '../atoms/UserAvatar'
import PostTitle from '../atoms/PostTitle'
import PostIcon from '../atoms/PostIcon'

interface IPostProps {
    userAvatar: string
    userName: string
    name: string
    isPremium: boolean
    sharedTime: number
    userId: string
    comment: string
    postImageUrl: string
    postId: string
    commentCount: number
    retweetCount: number
    likeCount: number
    viewsCount: number
}
function Post(props: IPostProps) {
    const {
        userAvatar, 
        userName, 
        name,
        isPremium,
        sharedTime,
        userId,
        comment,
        postImageUrl,
        postId,
        commentCount,
        retweetCount,
        likeCount,
        viewsCount} = props
  return (
    <div className='row x-post-body'>

        <div className="col-2 text-end">
            <UserAvatar userAvatarUrl={userAvatar} />
        </div>


        <div className="col-10">

            <div className="row">
                <PostTitle  name={name} isPremium={isPremium} userName={userName} sharedTime={sharedTime}/>
            </div>


            <div className="row">
                <label className="x-post-comment">{comment}</label>
            </div>


            <div className="row">
                <img className='x-post-image' src={postImageUrl}  />
            </div>


            <div className="row">

                <div className="col-3">
                    <PostIcon type="Comment" count={commentCount} postId={postId} />
                </div>


                <div className="col-3">
                    <PostIcon type="Retweet" count={retweetCount} postId={postId} />
                </div>


                <div className="col-3">
                    <PostIcon type="Like" count={likeCount} postId={postId} />
                </div>


                <div className="col-3">
                    <PostIcon type="Views" count={viewsCount} postId={postId} />
                </div>

            </div>

        </div>

    </div>
  )
}

export default memo(Post) // Post