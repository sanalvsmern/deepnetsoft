import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Drinks() {

  const navigate = useNavigate()

  const [menu, setMenu] = useState({});
  const [key, setKey] = useState('drinks');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/${key}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setMenu(data))
      .catch(error => {
        console.error('Error fetching menu:', error);
        setError(error.message);
      });
  }, [key]);


  return (
    <Container fluid>
      <Row>
        <Col md={12} className='selArea'>
          <button className='selBut1'>FOOD</button>
          <button className='selBut2'>DRINKS</button>
          <button className='selBut1' onClick={() => navigate('/brunch')}>BRUNCH</button>
        </Col>
      </Row>
      <Row className='contRow'>
        <Col md={1} className='d-none d-md-flex frame1'>
        </Col>
        <Col md={10} sm={11} xs={11}>
          <Row>
            <Col md={12} className='contCol'>
              <Row className='d-none d-lg-flex'>
                <Col md={2}>
                  <img src={`${process.env.PUBLIC_URL}/images/drn1.png`} className='drn1' alt="drn1" />
                </Col>
                <Col md={3} className='d-flex align-items-center justify-content-end'>
                  <div className='contLine'></div>
                </Col>
                <Col md={2} className='d-flex align-items-center justify-content-center'>
                  {Object.keys(menu).map((key, index) => (
                    <p className='contHead' key={index}>{key.toUpperCase()}</p>
                  ))}
                </Col>
                <Col md={3} className='d-flex align-items-center justify-content-flex-end'>
                  <div className='contLine'></div>
                </Col>
                <Col md={2} className='d-flex justify-content-end'>
                  <img src={`${process.env.PUBLIC_URL}/images/drn2.png`} className='drn2' alt="drn2" />
                </Col>
              </Row>
              <Row className='d-lg-none'>
                <Col xs={2}>
                  <img src={`${process.env.PUBLIC_URL}/images/drn1.png`} className='drn1a' alt="drn1" />
                </Col>
                <Col xs={2} className='d-flex align-items-center justify-content-end'>
                  <div className='contLinea'></div>
                </Col>
                <Col xs={4} className='d-flex align-items-center justify-content-center'>
                  {Object.keys(menu).map((key, index) => (
                    <p className='contHeada' key={index}>{key.toUpperCase()}</p>
                  ))}
                </Col>
                <Col xs={2} className='d-flex align-items-center justify-content-flex-end'>
                  <div className='contLinea'></div>
                </Col>
                <Col xs={2} className='d-flex justify-content-end'>
                  <img src={`${process.env.PUBLIC_URL}/images/drn2.png`} className='drn2a' alt="drn2" />
                </Col>
              </Row>
              <Row className='d-none d-xl-flex mapping'>
                {menu[key] && menu[key].map((item, index) => (
                  <Col lg={6} md={12} className='contName' key={index}>
                    <Row>
                      <Col md={12} className='contNameH'>
                        <p>
                          {item[0]}
                        </p>
                      </Col>
                      <Col md={12} className='contNameD'>
                        <p>
                          {item[1]}
                        </p>
                      </Col>
                    </Row>
                  </Col>
                ))}
              </Row>
              <Row className='d-flex d-xl-none'>
                {menu[key] && menu[key].map((item, index) => (
                  <Col lg={6} md={12} className='contNamea' key={index}>
                    <Row style={{ width: '300px' }}>
                      <Col md={12} className='contNameHa'>
                        <p>
                          {item[0]}
                        </p>
                      </Col>
                      <Col md={12} className='contNameDa'>
                        <p>
                          {item[1]}
                        </p>
                      </Col>
                    </Row>
                  </Col>
                ))}
              </Row>
            </Col >
            < Col md={12} className='contCol mt-5 pb-5' >
              <Row>
                <Col md={12} className='d-flex justify-content-center'>
                  <img src={`${process.env.PUBLIC_URL}/images/hookah.png`} className='hookah' alt="hookah" />
                </Col>
                <Col md={12}>
                  <Row className='d-none justify-content-center text-align-center mt-2 d-lg-flex'>
                    <Col xs={3} md={3} className='d-flex align-items-center justify-content-end'>
                      <div className='contLine'></div>
                    </Col>
                    <Col xs={3} md={4} className='d-flex align-items-center justify-content-center'>
                      <p className='contHead'>HOOKAH FLAVOURS</p>
                    </Col>
                    <Col xs={3} md={3} className='d-flex align-items-center justify-content-flex-end'>
                      <div className='contLine'></div>
                    </Col>
                  </Row>
                  <Row className='d-flex justify-content-center text-align-center mt-2 d-lg-none'>
                    <Col xs={3} md={3} className='d-flex align-items-center justify-content-end'>
                      <div className='contLinea'></div>
                    </Col>
                    <Col xs={3} md={4} className='d-flex align-items-center justify-content-center'>
                      <p className='contHeada'>HOOKAH FLAVOURS</p>
                    </Col>
                    <Col xs={3} md={3} className='d-flex align-items-center justify-content-flex-end'>
                      <div className='contLinea'></div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} className='hooFlav'>ORANGE MINT</Col>
                    <Col md={2} className='hooFlav'>BLUE MIST</Col>
                    <Col md={2} className='hooFlav'>MIGHTY FREEZE</Col>
                    <Col md={2} className='hooFlav'>LUV 66</Col>
                    <Col md={2} className='hooFlav'>PEACH</Col>
                    <Col md={2} className='hooFlav'>WATER MELON</Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col md={12} className='d-flex justify-content-center'>
              <button className='orderBut'>ORDER ONLINE</button>
            </Col>
            <Col md={12} className='terms d-none d-lg-block'>
              <Row>
                <Col md={4} className='term1'>
                  <p>Food may not be refunded. If your food was made incorrectly we will remake it for you.</p>
                </Col>
                <Col md={4} className='term1'>
                  <p>18% service charge will be added to all checks over $100.</p>
                </Col>
                <Col md={4} className='term2'>
                  <p>Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness</p>
                </Col>
              </Row>
            </Col>
            <Col md={12} className='termsa d-block d-lg-none'>
              <Row className='d-flex justify-content-center'>
                <Col md={12} className='term1a'>
                  <p>Food may not be refunded. If your food was made incorrectly we will remake it for you.</p>
                </Col>
                <Col xs={3} md={3} className='termBorder'></Col>
                <Col md={12} className='term1a'>
                  <p>18% service charge will be added to all checks over $100.</p>
                </Col>
                <Col xs={3} md={3} className='termBorder'></Col>
                <Col md={12} className='term2a'>
                  <p>Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col md={1} className='d-none d-md-flex frame2'>
        </Col>
      </Row>
    </Container>
  )
}

export default Drinks