import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Link,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Html5QrcodeScanner } from 'html5-qrcode';









const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [qrCodeResult, setQrCodeResult] = useState(null);

const onScanSuccess = (decodedText, decodedResult) => {
  setQrCodeResult(decodedText);
};

const startScanner = () => {
  const scanner = new Html5QrcodeScanner('qr-reader', {
    fps: 10,
    qrbox: 250,
    aspectRatio: 1.77,
  });
  scanner.render(onScanSuccess);
};

  const handleSubmit = (event) => {
    event.preventDefault();

   
    if (email === 'admin@gmail.com' && password === '123') {
      console.log('Login successful');
      navigate('/dashboard'); 
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 8,
          padding: 4,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: '#fff',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            fullWidth
            label="Email Address"
            type="email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
            <Link href="#" variant="body2" underline="hover">
              Forgot password?
            </Link>
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
          >
            Login
          </Button>
        </form>

        <Typography variant="body2" sx={{ marginTop: 2 }}>
          Don't have an account?{' '}
          <Link href="#" underline="hover">
            Sign Up
          </Link>
        </Typography>
      </Box>
      <div>
      <h1>QR Code Scanner</h1>
      <div id="qr-reader" style={{ width: '100%' }}></div>
      <button onClick={startScanner}>Start Scanner</button>
      {qrCodeResult && <p>Scanned QR Code: {qrCodeResult}</p>}
    </div>
    </Container>
    
  );
};

export default Login;
