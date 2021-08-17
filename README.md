## Stripe

No ambiente local é necessário o uso do Stripe CLI para ouvir os webhooks emitidos
pelo stripe.

**Install**

[Stripe CLI](https://github.com/stripe/stripe-cli)

**Configure**

Login
```sh
stripe login
```

Começar ouvir os hooks/eventos
```sh
stripe listen --forward-to localhost:3000/api/webhooks
```