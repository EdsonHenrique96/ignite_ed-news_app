import { loadStripe } from '@stripe/stripe-js';

export async function getStripePublic() {
  return loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY,
  );
}