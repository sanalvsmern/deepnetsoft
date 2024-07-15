import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
    return (
        <Container fluid>
            <Row className='footer'>
                <Col md={12}>
                    <Row className='footerRow'>
                        <Col sm={12} md={12} lg={3} className='foot1'>
                            <Row>
                                <Col md={12} className='footFont1'>
                                    <p>Connect with Us</p>
                                </Col>
                                <Col md={12}>
                                    <Row>
                                        <Col md={12} className='footFont2'>
                                            <Row className='d-flex justify-content-center'>
                                                <Col md={1}>
                                                    <img src={`${process.env.PUBLIC_URL}/images/tel1.png`} alt="tel1" />
                                                </Col>
                                                <Col md={6} className='text-align-end'>
                                                    <p>+1 470-788-8255</p>
                                                </Col>
                                            </Row>
                                            <Row className='d-flex justify-content-center'>
                                                <Col md={1}>
                                                    <img src={`${process.env.PUBLIC_URL}/images/mail.png`} alt="mail" />
                                                </Col>
                                                <Col md={8}>
                                                    <p>email@42barandgrill.com</p>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col md={12} className='footFont2'>

                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={12} md={12} lg={3} className='foot1'>
                            <Row></Row>
                        </Col>
                        <Col sm={12} md={12} lg={3} className='foot1'>
                            <Row>
                                <Col md={12} className='footFont1'>
                                    <p>FIND US</p>
                                </Col>
                                <Col md={12}>
                                    <Row>
                                        <Col md={12}></Col>
                                        <Col md={12}></Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer