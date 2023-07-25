import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Login.css'; // Importa el archivo de estilos

const Login = () => {
  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes implementar la lógica de inicio de sesión
    // Por ahora, solo mostraremos un mensaje de inicio de sesión exitoso en la consola
    console.log('Inicio de sesión exitoso');
  };

  return (
    <div className="d-flex justify-content-center align-items-center login-background">
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit" className="login-button">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
