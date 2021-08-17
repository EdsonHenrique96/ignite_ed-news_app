import { query as q } from 'faunadb';
import Stripe from 'stripe';
import { fauna } from '../../../services/fauna';
import { stripe } from '../../../services/stripe';

interface Subscription {
  id: string;
  userId: object;
  status: Stripe.Subscription.Status;
  price_id: string;
}

async function getCustomerRef(customerId: string) {
  const userRef = await fauna.query(
    q.Select(
      'ref',
      q.Get(
        q.Match(
          q.Index('user_by_stripe_customer_id'),
          customerId
        )
      )
    )
  );

  return userRef;
}

async function getSubscriptionData(subscriptionId: string, userRef: object): Promise<Subscription> {
  const subscription = await stripe.subscriptions.retrieve(subscriptionId);

  const subscriptionData = {
    id: subscription.id,
    userId: userRef,
    status: subscription.status,
    price_id: subscription.items.data[0].price.id,
  }

  return subscriptionData;
}

async function persistSubscription(subscriptionData: Subscription) {
  await fauna.query(
    q.Create(
      q.Collection('subscriptions'),
      { data: subscriptionData }
    )
  );
}

export async function saveSubscription(
  subscriptionId: string,
  customerId: string
) {
  const userRef = await getCustomerRef(customerId);
  const subscriptionData = await getSubscriptionData(subscriptionId, userRef); 

  await persistSubscription(subscriptionData);
}