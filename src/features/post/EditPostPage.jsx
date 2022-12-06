import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, FormGroup, Input, Label, Button, Col } from "reactstrap";
import { postUpdate, selectPostId } from './postSlice';
import {Link} from "react-router-dom"

const EditPostPage = () => {
    const { postId } = useParams();
    const selectPost = useSelector(state => selectPostId(state, postId))
    const [title, setTitle] = useState(selectPost.title)
    const [content, setContent] = useState(selectPost.content)
    const isDisabled = [title, content].every(Boolean)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        if (isDisabled) {
            dispatch(postUpdate({ id: postId, title, content }))
            console.log(selectPost)
            navigate('/')
        }

        e.preventDefault()
    }
    return (
        <div>
            <Form className="p-2" onSubmit={handleSubmit}>
                <FormGroup >
                    <Label htmlFor="title">Post Title</Label>
                    <Input name='title' placeholder='Add title' aria-label='title' type='text' value={title} onChange={e => setTitle(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="content">Post Title</Label>
                    <Input name='content' placeholder='Add content' aria-label='content' type='text' value={content} onChange={e => setContent(e.target.value)} />
                </FormGroup>
                <Button block color="primary" disabled={!isDisabled}>
                    Add
                </Button>

               
            </Form>
        </div>
    )
}

export default EditPostPage
