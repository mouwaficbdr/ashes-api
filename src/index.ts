import { startServer } from "./server.js";

console.log(`
  █████╗ ███████╗██╗  ██╗███████╗███████╗
 ██╔══██╗██╔════╝██║  ██║██╔════╝██╔════╝
 ███████║███████╗███████║█████╗  ███████╗
 ██╔══██║╚════██║██╔══██║██╔══╝  ╚════██║
 ██║  ██║███████║██║  ██║███████╗███████║
 ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝
`);
console.log("Initialisation du serveur...")

try{
  startServer()
} catch (error) {
  console.error(`Erreur critique de démarrage: ${error}`)
  process.exit(1)
}