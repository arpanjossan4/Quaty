import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class HeaderTwo extends React.Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Users</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Customer</Nav.Link>
                            <Nav.Link href="#features">Tramsactions</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
               <br/>
            </>
        )
    }
}