// Imports
import express from 'express';
import SERVER from './graphql/schema.js';

const APP = express();

SERVER.applyMiddleware({
    app: APP
});

// Express: Port
const PORT = 4000 || process.env;

// Express: Listener
APP.listen(PORT, () => {
    console.log(`서버가 시작되었습니다. (포트: ${PORT})`);
    console.log(`http://localhost:${PORT}/graphql`);
});

// Exports
export default APP;