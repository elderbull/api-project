// Instantiate Express and the application - 
const express = require('express');
const app = express();

// Import environment variables in order to connect to database - 
require('dotenv').config();

// Express using json - 
app.use(express.json());

// Root route - 
app.get('/', (req, res) => {
    res.json({
        message: "API server is running"
    });
});

// Set port and listen for incoming requests - 
if (require.main === module) {
    const port = 8000;
    app.listen(port, () => console.log('Server is listening on port', port));
} else {
    module.exports = app;
}
