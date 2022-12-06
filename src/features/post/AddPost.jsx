import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, FormGroup, Input, Label, Button, Col } from "reactstrap";
import { postsAdd } from "./postSlice";

const AddPost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const dispatch = useDispatch();
    const [userId, setUserID] = useState("");
    const users = useSelector((state) => state.users);
    const isDisabled = [title, userId, content].every(Boolean);

    const handleSubmit = (e) => {
        if (isDisabled) {
            dispatch(postsAdd(title, content, userId));
            setTitle("");
            setContent("");
        }
        e.preventDefault();
    };

    const userOptions = users.map((user) => {
        return (
            <option key={user.id} value={user.id}>
                {user.name}
            </option>
        );
    });

    return (
        <Col>
            <Form className="p-2" onSubmit={handleSubmit}>
                <h2 style={{ marginBottom: "50px" }}>Add a New Post</h2>
                <FormGroup>
                    <Label htmlFor="title" size="lg">
                        Post Title
                    </Label>
                    <Input
                        name="title"
                        placeholder="Add title"
                        aria-label="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="postAuthor" size="lg">
                        Author
                    </Label>
                    <Input
                        name="postAutor"
                        id="postAutor"
                        value={userId}
                        onChange={(e) => setUserID(e.target.value)}
                        type="select"
                    >
                        <option value=""></option>
                        {userOptions}
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="content" size="lg">
                        Post Title
                    </Label>
                    <Input
                        name="content"
                        placeholder="Add content"
                        aria-label="content"
                        type="textarea"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </FormGroup>
                <Button block color="primary" disabled={!isDisabled} className="mb-4">
                    Add
                </Button>
            </Form>
        </Col>
    );
};

export default AddPost;
