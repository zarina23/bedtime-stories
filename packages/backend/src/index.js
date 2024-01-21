import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

import middleware from './middleware/index.js';

// Initialize App
const app = express();

const {
    env: {
        SERVER_PORT
    }
} = process;

// App Configurations
app.disable('x-powered-by');
app.use(cors({
    origin: '*'
}));
app.use(helmet());
app.use(express.json());
app.use(middleware);

// Handling generic 404 errors
app.use((request, response) => {
    try {
        response.sendStatus(404);
    } catch (error) {
        console.log(error);
    }
});

// Start Server
const server = app.listen(SERVER_PORT || 3100, async () => {
    try {
        console.log(`server started on port: ${server.address().port}...`);
    } catch (error) {
        console.log(error);
    }
});
