import Stripe from "stripe";
import { STRIPE_PRIVATE_KEY } from "../config.js";

const stripe = new Stripe(STRIPE_PRIVATE_KEY);

export const createSession = async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          product_data: {
            name: "Laptop",
            description: "HP  I7 16GB ram",
          },
          currency: "usd",
          unit_amount: 100 * 100, //son en centavos x eso multiplico por 100
        },
        quantity: 1,
      },
      {
        price_data: {
          product_data: {
            name: "Tv Philip",
            description: "Tv 42Pulgadas Smart",
          },
          currency: "usd",
          unit_amount: 200 * 100, //son en centavos x eso multiplico por 100
        },
        quantity: 2,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:3001/success',
    cancel_url: 'http://localhost:3001/cancel',
  });
  return res.json(session);
};
