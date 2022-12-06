import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllPost, selectPostId } from './postSlice'
import { Card, CardTitle, CardText, Button } from "reactstrap";
import { Link, useParams } from 'react-router-dom';

const SinglePostPage = () => {
    const { postId } = useParams()
    const posts = useSelector(selectAllPost)
    const selectPost = useSelector(state => selectPostId(state,postId)) 

    console.log(selectPost)
    return (
        <Card key={selectPost.id}>
            <CardTitle>{selectPost.title}</CardTitle>
            <CardText>{selectPost.content}</CardText>
            <Button><Link to={`/editPosts/${selectPost.id}`}>Edit Post</Link></Button>
        </Card>
    )
}

export default SinglePostPage
