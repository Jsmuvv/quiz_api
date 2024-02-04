import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { Nav }from 'react-bootstrap'
import { Link } from 'react-router-dom'

type Props = {}

export default function Navigation({}: Props) {
    return (
    <Navbar bg ="primary" data-bs-theme ="dark">
        <Container fluid>
            <Navbar.Brand>QUIZ-API</Navbar.Brand>
            <Nav className = "me-auto">
                <Nav.Link  as = {Link} to="/">Home</Nav.Link>
                <Nav.Link as = {Link} to ="/register">Register</Nav.Link>
                <Nav.Link as = {Link} to ="/login">Log In</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    )
}