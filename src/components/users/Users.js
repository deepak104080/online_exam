import React, { useState } from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';


const Users = () => {
    const [users, setusers] = useState([]); //to store list of all users
    const [single_user, setSingle_User] = useState({}); //to store single saved user

    const initialValues = {userid: '', username: '', name: '', email: ''};
    const [formValues, setFormValues] = useState(initialValues); //to store all form data before submission

    const handleSubmit =(e) => {
        e.preventDefault();
        console.log(JSON.stringify(formValues));
        fetch('http://localhost:4000/users/',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(formValues),
        }).then(res => res.json()
        .then(data => {
            console.log(data);
            setSingle_User(data);
        })
        )
    }

    const handleChange = (e) => {
        console.log(e.target.value, e.target.name);
        setFormValues({...formValues, [e.target.name]: e.target.value });
    }

    return(
        <>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>User ID</Form.Label>
                            <Form.Control type="text" name="userid" value={formValues.userid} placeholder="Enter Userid" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" name="username" value={formValues.username} placeholder="Enter Username" onChange={handleChange} />
                        </Form.Group>
                        
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" value={formValues.name} placeholder="Name" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" value={formValues.email} placeholder="Enter email" onChange={handleChange} />
                        </Form.Group>

                        

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </>
    )
}

export default Users;