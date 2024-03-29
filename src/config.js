import { config } from "dotenv";
config()  //se ejecuta metodo para poder utilizar las .ENV (var de entorno)

export const PORT = 3001;
export const STRIPE_PRIVATE_KEY= process.env.STRIPE_PRIVATE_KEY;