import { Pool } from 'pg';

const db = new Pool({
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB
});

export default db;