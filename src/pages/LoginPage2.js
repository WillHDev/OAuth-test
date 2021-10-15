import React, { useRef, useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap';
import { useAuth } from '../contexts/Auth-Context';

export default function LoginPage2() {
    
const emailRef =  useRef();
const passwordRef = useRef();
const passwordConfirmRef = useRef();
//WHY is signup destructured
const { signUp } = useAuth();
const [ error, setError ] = useState();


//WHY isnt this an arrow function?
async function handleSubmit (e)  {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value){
        return setError('Passwords do not match')
    }
    try {
        setError('');
        await signUp(emailRef.current.value, passwordRef.current.value);
    } catch {
        setError('Failed to create an account')
    }

}

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    <Form>
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
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation
                                <Form.Control type="password" ref= {passwordConfirmRef} required />
                            </Form.Label>
                        </Form.Group>
                        <Button  type="submit" >Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account?
            </div>
        </>
    )
}
