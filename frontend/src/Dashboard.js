import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';

function Dashboard({ onLogout }) {
  const [bgColor, setBgColor] = useState('#ffffff');

  // Fetch settings on mount
  useEffect(() => {
    axios.get('http://localhost:5000/api/settings')
      .then(response => setBgColor(response.data.bgColor))
      .catch(error => console.error('Error fetching settings:', error));
  }, []);

  const changeColor = () => {
    const newColor = bgColor === '#ffffff' ? '#e0f7fa' : '#ffffff';
    setBgColor(newColor);
    axios.post('http://localhost:5000/api/settings', { bgColor: newColor })
      .catch(error => console.error('Error saving settings:', error));
  };

  return (
    <Container fluid style={{ backgroundColor: bgColor, minHeight: '100vh', paddingTop: '20px' }}>
      <Row>
        <Col>
          <h1 className="text-center mb-4">Your Dashboard</h1>
          <Button variant="danger" onClick={onLogout} className="mb-4">
            Logout
          </Button>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Widget 1</Card.Title>
              <Card.Text>Placeholder data (e.g., billing summary).</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Widget 2</Card.Title>
              <Card.Text>More placeholder data (e.g., user stats).</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Settings</Card.Title>
              <Button variant="primary" onClick={changeColor}>
                Toggle Background Color
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
