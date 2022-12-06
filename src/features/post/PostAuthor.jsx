import React from 'react'
import { useSelector } from 'react-redux'
import { selectUserID } from '../user/userSlice'

const PostAuthor = ({userId}) => {
    const author = useSelector(state => selectUserID(state,userId))
    return (
    <div>
      <span>by {author ? author.name : 'Unknown author'} </span>
    </div>
  )
}

export default PostAuthor
