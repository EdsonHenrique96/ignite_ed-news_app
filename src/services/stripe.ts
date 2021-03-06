import Stripe from 'stripe';
import { version, name } from '../../package.json';

export const stripe = new Stripe(
  process.env.STRIPE_API_SECRET_KEY,
  {
    apiVersion: '2020-08-27',
    appInfo: {
      name: name,
      version: version,
    }
  }
);