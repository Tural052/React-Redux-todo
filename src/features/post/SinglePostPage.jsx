import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllPost, selectPostId } from './postSlice'
import { Card, CardTitle, CardText, Button } from "reactstrap";
import { Link, useParams } from 'react-router-dom';
import TimeAgo from './TimeAgo'
import PostAuthor from './PostAuthor'
import Reactionbuttons from './Reactionbuttons'
const SinglePostPage = () => {
    const { postId } = useParams()
    const posts = useSelector(selectAllPost)
    const selectPost = useSelector(state => selectPostId(state,postId)) 
    if(!selectPost) {
        return(
            <h2>Post not Found!</h2>
        )
    }
    return (
        <Card key={selectPost.id}>
            <CardTitle>{selectPost.title}</CardTitle>
            <CardText>
                <PostAuthor userId={selectPost.user}/>
                <TimeAgo timestamp = {selectPost.data} />
            </CardText>
            <CardText>{selectPost.content}</CardText>
            <Reactionbuttons post={selectPost} />
            <Button><Link to={`/editPosts/${selectPost.id}`}>Edit Post</Link></Button>
        </Card>
    )
}

export default SinglePostPage
