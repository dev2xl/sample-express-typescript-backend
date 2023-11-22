import 'dotenv/config';

import app from './app';

// Create HTTP server
import http from 'http';
const server = http.createServer(app);

// Start HTTP server
const port = process.env.PORT || 5001;
server.listen(port, () => console.log(`Server running on port ${port}`));
