import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Menu() {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <Container fluid>
            <Row className='topNav d-none d-lg-flex'>
                <Col md={6} className='logoCol'>
                    <Row className='logo'>
                        <Col md={4}>
                            <img src={`${process.env.PUBLIC_URL}/images/logo.png`} className='logoImg' alt="Logo" />
                        </Col>
                        <Col md={8} className='logoTxt'>
                            <Row>
                                <Col md={12}></Col>
                                <p className='logoTxt1'>DEEP <span className='logoTxt2'>NET</span></p>
                                <Col md={12}>
                                    <p className='logoTxt3'>SOFT</p></Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col mc={6}>
                    <Row>
                        <Col md={2}>
                            <p className='navList' style={{ color: 'white' }}>HOME</p>
                        </Col>
                        <Col md={2}>
                            <p className='navList' style={{ color: 'blue' }}>MENU</p>
                        </Col>
                        <Col md={4}>
                            <p className='navList' style={{ color: 'white' }}>MAKE A RESERVATION</p>
                        </Col>
                        <Col md={3}>
                            <p className='navList' style={{ color: 'white' }}>CONTACT US</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className='smallNav d-flex d-lg-none'>
                <Col xs={4}></Col>
                <Col xs={4} className='smallLogo'>
                    <img src={`${process.env.PUBLIC_URL}/images/logo.png`} className='smallLogImg' alt="Logo" />
                </Col>
                <Col xs={4} className='d-flex justify-content-end'>
                    <button onClick={toggleVisibility} className='toggleButton'>
                        <div className='buttonLine'></div>
                        <div className='buttonLine'></div>
                        <div className='buttonLine'></div>
                    </button>
                </Col>
            </Row>
            {isVisible &&
                <Row className='smallNavList d-flex d-lg-none'>
                    <Col md={6}>
                        <p className='navList' style={{ color: 'white' }}>HOME</p>
                    </Col>
                    <Col md={6}>
                        <p className='navList' style={{ color: 'blue' }}>MENU</p>
                    </Col>
                    <Col md={6}>
                        <p className='navList' style={{ color: 'white' }}>MAKE A RESERVATION</p>
                    </Col>
                    <Col md={6}>
                        <p className='navList' style={{ color: 'white' }}>CONTACT US</p>
                    </Col>
                </Row>
            }
            <Row className='headSect'>
                <Col md={12}>
                    <Row style={{marginTop: '100px'}}>
                        <Col md={12} className='d-flex justify-content-center'>
                            <p className='headLine'>MENU</p>
                        </Col>
                        <Col md={12} className='d-flex justify-content-center'>
                            <p  className='headDesc'>
                                Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Menu