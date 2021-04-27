import style from './styles.module.scss';

interface SubscriptionsButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }:SubscriptionsButtonProps) {
  return (
    <button type="button" className={style.subscribeButton}>
      Subscribe now
    </button>
  );
}