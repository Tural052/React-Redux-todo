import React from 'react'
import { useSelector } from 'react-redux'
import { Form, FormGroup, Button, Input, CardTitle, Card, CardBody, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

const PostsList = () => {
    const posts = useSelector(state => state.posts.posts);
    const renderedPost = posts.map(item => {
        return (
            <Card className="m-2" key={item.id}>
                <CardTitle className="m-2">{item.title}</CardTitle>
                <CardBody>{item.content}</CardBody>
                <Button color="danger" className="m-2">
                    <Link to={`/posts/${item.id}`}>
                        View Post
                    </Link>
                </Button>
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
