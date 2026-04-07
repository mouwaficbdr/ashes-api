import app from "./app.js";
import { env } from "./config/env.js";

const PORT = env.PORT;

export const startServer = () => {
  app.listen(PORT, ()=>{
    console.log(`Le serveur est lancé sur le port ${PORT}`)
  })
}