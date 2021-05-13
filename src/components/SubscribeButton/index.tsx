import { signIn, useSession } from 'next-auth/client';
import { api } from '../../services/api';
import { getStripePublic } from '../../services/stripePublic';
import style from './styles.module.scss';

interface SubscriptionsButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }:SubscriptionsButtonProps) {
  const [ session ] = useSession();

  async function handleSubscribe() {
    if(!session) {
      signIn('github'); // redireciona para o login com github
      return;
    }

    try {
      const response = await api.post('/subscribe');

      const { sessionId } = response.data;

      const stripePublic = await getStripePublic();

      await stripePublic.redirectToCheckout({ sessionId })
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <button 
      type="button"
      className={style.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
}