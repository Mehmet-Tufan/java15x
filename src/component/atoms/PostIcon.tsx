import React from 'react'
import './PostIcon.css'
interface IPostIconsProps {
    type: 'Comment'| 'Like'| 'Retweet'| 'Views'
    count: number
    postId: string  
}
function PostIcon(props: IPostIconsProps) {
    const { type, count, postId } = props
    const [onFocus, setOnFocus] = React.useState(false)
    const getIcon = () => {
        switch (type) {
            case 'Comment': return <i className='fa-regular fa-comment fa-xs m-1' style={ onFocus ? {color: '#1da1f2'} : {color: 'white'}}></i>;
            case 'Like': return <i className='fa-regular fa-heart fa-xs m-1' style={  onFocus ? {color: '#1da1f2'} : {color: 'white'}}></i>;
            case 'Retweet': return <i className='fa-solid fa-retweet fa-xs m-1' style={ onFocus ? {color: '#1da1f2'} : {color: 'white'}}></i>;
            case 'Views': return <i className='fa-regular fa-eye fa-xs m-1' style={ onFocus ? {color: '#1da1f2'} : {color: 'white'}}></i>;
            default: return null;
        }
    }
  return (
    <div className='x-post-icon-body' onMouseEnter={() => setOnFocus(true)} onMouseLeave={() => setOnFocus(false)}>
        <div className='row'>
        <div className='col align-items-center'>
            {getIcon()}
            <span style={
                onFocus ? {fontSize: '13px', color: '#1da1f2',marginLeft: '3px'} 
                : {fontSize: '13px', color: 'white',marginLeft: '3px'}
                }>{count}</span>
        </div>
        </div>
    </div>
    
  )
}

export default PostIcon