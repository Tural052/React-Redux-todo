import React from 'react'
import { useSelector } from 'react-redux'
import { Form, FormGroup, Button, Input, CardText, CardTitle, Card, CardBody, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import TimeAgo from './TimeAgo'
import PostAuthor from './PostAuthor'
import Reactionbuttons from './Reactionbuttons'

const PostsList = () => {
    const posts = useSelector(state => state.posts.posts);
    const orderedPost = [...posts].sort((a, b) => b.date.localeCompare(a.date))

    const renderedPost = orderedPost.map(item => {
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

    return (
        <div>
            {renderedPost}
        </div>
    )
}

export default PostsList
