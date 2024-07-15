import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
    return (
        <Container fluid>
            <Row className='footer'>
                <Col md={12} className='d-none d-lg-flex justify-content-center'>
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
                                                <Col md={12} className='d-flex justify-content-center'>
                                                    <img style={{ width: '20px', height: '20px' }} src={`${process.env.PUBLIC_URL}/images/tel1.png`} alt="tel1" />
                                                    <span>
                                                        <p>&nbsp;&nbsp;+1 470-788-8255</p>
                                                    </span>
                                                </Col>
                                                <Col md={12} className='d-flex justify-content-center'>
                                                    <img style={{ width: '20px', height: '20px' }} src={`${process.env.PUBLIC_URL}/images/mail.png`} alt="mail" />
                                                    <span>
                                                        <p>&nbsp;&nbsp;email@42barandgrill.com</p>
                                                    </span>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={12} md={12} lg={3} className='foot1'>
                            <Row>
                                <Col md={12} className='d-flex justify-content-center'>
                                    <img src={`${process.env.PUBLIC_URL}/images/logo.png`} className='footLogo' alt="logo" />
                                </Col>
                                <Col md={12} className='footLogoTxt'>
                                    <p className='footLogoTxt1'>DEEP&nbsp;</p>
                                    <p className='footLogoTxt2'>NET&nbsp;</p>
                                    <p className='footLogoTxt3'>SOFT</p>
                                </Col>
                                <Col md={12} className='d-flex justify-content-center'>
                                    <img src={`${process.env.PUBLIC_URL}/images/twitgrp.png`} alt="twitgrp" />
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={12} md={12} lg={3} className='foot1'>
                            <Row>
                                <Col md={12} className='footFont1'>
                                    <p>Find us</p>
                                </Col>
                                <Col md={12}>
                                    <Row>
                                        <Col md={12} className='footFont2'>
                                            <Row className='d-flex justify-content-center'>
                                                <Col md={12} className='d-flex justify-content-center' style={{ maxWidth: '200px' }}>
                                                    <img style={{ width: '20px', height: '20px' }} src={`${process.env.PUBLIC_URL}/images/drop.png`} alt="drop" />
                                                    <span>
                                                        <p>&nbsp;&nbsp;327 Memorial Dr SE, Atlanta,
                                                            GA 30312, USA</p>
                                                    </span>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col md={12} className='d-flex d-lg-none'>
                    <Row className='footerRow d-flex d-lg-none'>
                        <Col md={12} className='foot1 pb-3'>
                            <Row>
                                <Col md={12} className='d-flex justify-content-center'>
                                    <img src={`${process.env.PUBLIC_URL}/images/logo.png`} className='footLogo' alt="logo" />
                                </Col>
                                <Col md={12} className='footLogoTxt'>
                                    <p className='footLogoTxt1'>DEEP&nbsp;</p>
                                    <p className='footLogoTxt2'>NET&nbsp;</p>
                                    <p className='footLogoTxt3'>SOFT</p>
                                </Col>
                                <Col md={12} className='d-flex justify-content-center'>
                                    <img src={`${process.env.PUBLIC_URL}/images/twitgrp.png`} alt="twitgrp" />
                                </Col>
                            </Row>
                        </Col>
                        <Col md={12} className='foot1'>
                            <Row>
                                <Col md={12} className='footFont1'>
                                    <p>Connect with Us</p>
                                </Col>
                                <Col md={12}>
                                    <Row>
                                        <Col md={12} className='footFont2'>
                                            <Row className='d-flex justify-content-center'>
                                                <Col md={12} className='d-flex justify-content-center'>
                                                    <img style={{ width: '20px', height: '20px' }} src={`${process.env.PUBLIC_URL}/images/tel1.png`} alt="tel1" />
                                                    <span>
                                                        <p>&nbsp;&nbsp;+1 470-788-8255</p>
                                                    </span>
                                                </Col>
                                                <Col md={12} className='d-flex justify-content-center'>
                                                    <img style={{ width: '20px', height: '20px' }} src={`${process.env.PUBLIC_URL}/images/mail.png`} alt="mail" />
                                                    <span>
                                                        <p>&nbsp;&nbsp;email@42barandgrill.com</p>
                                                    </span>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={12} className='foot1'>
                            <Row>
                                <Col md={12} className='footFont1'>
                                    <p>Find us</p>
                                </Col>
                                <Col md={12}>
                                    <Row>
                                        <Col md={12} className='footFont2'>
                                            <Row className='d-flex justify-content-center'>
                                                <Col md={12} className='d-flex justify-content-center' style={{ maxWidth: '200px' }}>
                                                    <img style={{ width: '20px', height: '20px' }} src={`${process.env.PUBLIC_URL}/images/drop.png`} alt="drop" />
                                                    <span>
                                                        <p>&nbsp;&nbsp;327 Memorial Dr SE, Atlanta,
                                                            GA 30312, USA</p>
                                                    </span>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className='footCont'>
                <Col sm={12} md={5} className='footCont1'>
                    <p>© 2024 42 Bar & Grill. Developed by Deepnetsoft Solutions.</p>
                </Col>
                <Col sm={12} md={5} className='footCont1'>
                    <p>Terms & Conditions&nbsp;&nbsp;&nbsp;&nbsp;Privacy Policy</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer