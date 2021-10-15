import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/Auth-Context';
import { Link } from 'react-router-dom';
export default function LoginPage3() {
    
const emailRef =  useRef();
const passwordRef = useRef();

//WHY is signup destructured
//currenUser used for testing from useAuth
const { login } = useAuth();
const [ error, setError ] = useState();
const [ loading, setLoading ] = useState(false);


//WHY isnt this an arrow function?
async function handleSubmit (e)  {
    e.preventDefault();
   
    try {
        setError('');
        setLoading(true);
        await login(emailRef.current.value, passwordRef.current.value);
    } catch {
        setError('Failed to log in')
    }
setLoading(false);
}

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form  onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email
                                <Form.Control type="email" ref= {emailRef} required />
                            </Form.Label>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Email
                                <Form.Control type="password" ref= {passwordRef} required />
                            </Form.Label>
                        </Form.Group>
                      
                        <Button  type="submit" disabled={loading}>Log In</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to="/signup" >Sign Up</Link>
            </div>
        </>
    )
}
