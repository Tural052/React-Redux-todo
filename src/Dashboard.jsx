import React from 'react'
import { Row, Col } from 'reactstrap'
import AddPost from './features/post/AddPost'
import PostsList from './features/post/PostsList'
const Dashboard = () => {
    return (
        <Row>
            <Col xs="6">
                <AddPost />
            </Col>
            <Col>
                <PostsList />
            </Col>
        </Row>
    )
}

export default Dashboard
