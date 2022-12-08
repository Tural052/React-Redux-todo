import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, FormGroup, Button, Input, CardText, CardTitle, Card, CardBody, Col, Spinner } from 'reactstrap'
import { Link } from 'react-router-dom'
import TimeAgo from './TimeAgo'
import PostAuthor from './PostAuthor'
import Reactionbuttons from './Reactionbuttons'
import { fetchPosts, selectAllPost } from './postSlice'






const PostsList = () => {
    const posts = useSelector(selectAllPost);
    const orderedPost = [...posts].sort((a, b) => b.date.localeCompare(a.date))
    const dispatch = useDispatch()
    const postStatus = useSelector(state => state.posts.status)
    const error = useSelector(state => state.posts.error)
    let content;

    useEffect(() => {
        if (posts.length === 0) {
            dispatch(fetchPosts())
        }
    }, [dispatch])

    if (postStatus === "loading") {
        content = <Spinner text="Loading..." />
    } else if (postStatus == "succeeded") {
        content = orderedPost.map(item => {
            return (
                <Card className="m-2" key={item.id}>
                    <CardTitle className="m-2">{item.title}</CardTitle>

                    <CardBody>
                        <CardText className='d-flex' >
                            <PostAuthor userId={item.user} />

                            <TimeAgo timestamp={item.date} />
                        </CardText>
                        {item.content}
                        <Reactionbuttons post={item} />
                        <Button color="danger" className="m-2">
                            <Link to={`/posts/${item.id}`}>
                                View Post
                            </Link>
                        </Button>
                    </CardBody>
                </Card>
            )
        })
    } else if (postStatus === "failed") {
        content = <div>{error}</div>
    }



    // const renderedPost = orderedPost.map(item => {
    //     
    // })

    return (
        <div>
            {content}
        </div>
    )
}

export default PostsList
