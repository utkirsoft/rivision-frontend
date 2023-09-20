import * as dotenv from 'dotenv';

dotenv.config();

const schema = process.env.SCHEMA || '';
const PORT = +process.env.HTTP_PORT || 4007;
const DBPORT = +process.env.DBPORT || 5432;
const PGHOST = process.env.PGHOST || '';
const PGUSER = process.env.PGUSER || 'postgres';
const PGDB = process.env.PGDB || 'xabarnoma';
const PGPASS = process.env.PGPASS || 'postgres';
const APP_NAME = process.env.APP_NAME || '';
const LIMIT_ROW = +process.env.LIMIT_ROW || 100;

export {
  schema,
  PORT,
  DBPORT,
  PGHOST,
  PGUSER,
  PGDB,
  PGPASS,
  APP_NAME,
  LIMIT_ROW,
};
