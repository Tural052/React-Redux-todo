import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import AddPost from './features/post/AddPost'
import PostsList from './features/post/PostsList'
const Dashboard = () => {
    return (
        <Container className='p-4'>
            <Col>
                <AddPost />
            </Col>
            <Col>
                <PostsList />
            </Col>
        </Container>
    )
}

export default Dashboard
