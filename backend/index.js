const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'user' && password === 'pass') {
        res.json({ success: true, token: 'fake-jwt-token' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

let userSettings = { bgColor: '#ffffff' }; // Fake DB for now
app.get('/api/settings', (req, res) => {
    res.json(userSettings);
});

app.post('/api/settings', (req, res) => {
    const { bgColor } = req.body;
    userSettings.bgColor = bgColor;
    res.json({ success: true, bgColor });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
