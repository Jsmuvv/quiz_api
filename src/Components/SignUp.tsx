import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import { CategoryType, UserFormDataType } from '../types'
import { register } from '../lib/apiWrapper'

type SignUpProps = {
    flashMessage: (newMessage:string|null, newCategory:CategoryType|null)=> void
}

export default function SignUp({flashMessage}: SignUpProps) {

    const navigate = useNavigate();

    const [UserFormData,setUserFormData] = useState<UserFormDataType>(
        {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: '',
            confirmPassword: ''
        }
    )

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserFormData({...UserFormData,[e.target.name]: e.target.value})
        console.log(e.target.value)
    }

    const handleFormSubmit = async (e:React.FormEvent) => {
        e.preventDefault();

        let response = await register(UserFormData);
        if (response.error){
            flashMessage(response.error,'danger')
        } else {
            let newUser = response.data
            flashMessage(`Congrats ${newUser?.firstName} ${newUser?.lastName}, you have signed up with the UserName: ${newUser?.username}`,"success")
            navigate('/login')
        }
    }

    const disableSubmit = UserFormData.password.length < 5 || UserFormData.password !== UserFormData.confirmPassword

    return (
        <>
        <h1 className='text-center'>Register</h1>
            
            <Card>
                <Card.Body>
                        <Form onSubmit={handleFormSubmit}>
                            <Form.Label>First Name </Form.Label>
                                <Form.Control 
                                name = "firstName" 
                                placeholder='Enter First Name' 
                                value = {UserFormData.firstName} 
                                onChange={handleInputChange}/>

                            <Form.Label>Last Name </Form.Label>
                                <Form.Control 
                                name = 'lastName' 
                                placeholder='Enter Last Name' 
                                value = {UserFormData.lastName} 
                                onChange={handleInputChange}/>

                            <Form.Label>Email </Form.Label>
                                <Form.Control 
                                name = "email" 
                                placeholder='Enter Email' 
                                value = {UserFormData.email} 
                                onChange={handleInputChange}/>

                            <Form.Label>UserName </Form.Label>
                                <Form.Control 
                                name = "username" 
                                placeholder='Enter Username' 
                                value = {UserFormData.username} 
                                onChange={handleInputChange}/>

                            <Form.Label>Password </Form.Label>
                                <Form.Control 
                                name = "password"
                                type = "password"
                                placeholder='Enter Password' 
                                value = {UserFormData.password} 
                                onChange={handleInputChange}/>

                            <Form.Label>Confirm Password </Form.Label>
                                <Form.Control 
                                name = "confirmPassword"
                                type = "password" 
                                placeholder='Re-Enter Password' 
                                value = {UserFormData.confirmPassword}
                                onChange={handleInputChange}/>
                                {disableSubmit && <Form.Text className = "text-danger"> Your password must be at least 6 chracters and match </Form.Text>}

                            <Button type = "submit" variant = "outline-primary" className = 'w-100 mt-3' disabled = {disableSubmit}>Sign Up</Button>
                        </Form>
                </Card.Body>
            </Card>
        </>
    )
}