import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const navigate = useNavigate();

    const handleEnterPassword = () => {
        if (password == "#shetooktherightpat") {
            sessionStorage.setItem('cp', true)
            navigate('/')
        } else {
            setError(true)
        }
    }

    return (
        <Container style={{ height: "100vh" }} className="d-flex align-items-center justify-content-center">
            <Form onSubmit={handleEnterPassword}>
                <Row>
                    <Col md="12">
                        <h1>PATRICK && SHERYL'S WEDDING</h1>
                    </Col>
                    <Col md="12" className="mb-3">
                        <input
                            className="border-0 border-bottom text-center"
                            style={{ outline: "none" }}
                            type="password"
                            placeholder="Enter Password"
                            onChange={(e) => {
                                setError(false)
                                setPassword(e.target.value)
                            }}
                        />
                        {error ? (<p><small className="text-danger">Incorrect password</small></p>) : ""}
                    </Col>
                    <Col md="12">
                        <Button variant="outline-dark">ENTER</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}
