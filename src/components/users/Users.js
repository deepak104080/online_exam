import React, { useEffect, useState } from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import { ADD_USER, SHOW_USER, UPDATE_USER, DELETE_USER, SHOW_USERS } from './../../actions/actions_users';

const Users = () => {
    const [users, setUsers] = useState([]); //to store list of all users
    const [single_user, setSingle_User] = useState({}); //to store single saved user

    const initialValues = {userid: '', username: '', name: '', email: ''};
    const [formValues, setFormValues] = useState(initialValues); //to store all form data before submission

    const handleSubmit =(e) => {
        e.preventDefault();
        console.log(JSON.stringify(formValues)); //rest api - json stringified
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

    const displayUsers =() => {
        fetch('http://localhost:4000/users/')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setUsers(data);
        })
    }

    useEffect(() => {
        console.log('testing data from api...');
    },[users])

    const dispatch = useDispatch();

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


            <Row>
                <Col>
                    <Button onClick={displayUsers}>Display All Users</Button>

                    <Button variant="secondary" onClick = {() => dispatch({type: 'ADD_USER'})}>
                            Test Redux console...
                        </Button>  
                </Col>
            </Row>

            <Row>
                <Col>
                Data from API

                {
                            users.length
                }
                    
                    {
                            users && users.map((item) => (
                                <>
                                <div>Count</div>
                                <div>{item.userid} - {item.username} - {item.name} - {item.email}</div>
                                </>
                            ))
                        }
                </Col>
            </Row>
        </>
    )
}

export default Users;


// REDUX

// ACTION - user action - type, payload
// STORE - group of state varibales - single
// REDUCER - custom logic whcih works on basis of switch - action, state/store

// npm install - redux, react-redux
// actions
// reducers
// store
// connect store to app
// provider
// selector, dispatcher
