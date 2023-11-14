import * as dotenv from 'dotenv';

const result = dotenv.config();

if (result.error) {
  throw result.error;
}

export const environment = {
  apiUrl: process.env['GOOGLE_API_KEY'],
  debug: process.env['DEBUG'] === 'true',
};
