import express from 'express';

import API from './api/index.js';

const router = express.Router();

// Append Headers
router.get('/*', (request, response, next) => {
    response.set('Content-Type', 'application/json');

    next();
});

router.use('/api', ...API);

export default router;
