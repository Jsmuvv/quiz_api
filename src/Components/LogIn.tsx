import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col'
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Form"
import { CategoryType,UserFormDataType } from '../types/index';
import Card from "react-bootstrap/Card"




type LoginProps = {
    flashMessage: (newMessage:string|null, newCategory:CategoryType|null)=> void
}


export default function LogIn({flashMessage}: LoginProps) {

    // const navigate = useNavigate();

    
    const [UserFormData,setUserFormData] = useState<UserFormDataType> (
        {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: '',
            confirmPassword: ''
        }
    )

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUserFormData({...UserFormData,[e.target.name]:e.target.value})



    }

    const handleFormSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        flashMessage("You have logged in","danger")
        // navigate('/')
    }

    return (
        <>
        <h1 className='text-center'>Log In</h1>
        <Card>
            <Card.Body>

                <Form onChange={handleFormSubmit}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Email
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control 
                        type="text" 
                        name = "email"
                        placeholder="email@example.com" 
                        value = {UserFormData.email}
                        onChange={handleInputChange}/>
                        </Col>
                    </Form.Group>
    
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Password
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control 
                        type="password"
                        name = "password"
                        placeholder="Password"
                        value = {UserFormData.password}
                        onChange={handleInputChange}/>
                        </Col>
                    </Form.Group>
                    <Button className = "mt-3" size = "lg"type ="submit" value = "Submit">Submit</Button>
                </Form>
            </Card.Body>
        </Card>
        </>
    );
}

