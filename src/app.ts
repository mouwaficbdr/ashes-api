import express, {type Application, type Request, type Response} from "express"
import healthRoutes from "./modules/health/health.routes.js"
import bastionRoutes from "./modules/bastions/bastions.routes.js"

const app: Application = express()

app.use(express.json())

app.use("/api/v1/health", healthRoutes)
app.use("/api/v1/bastions", bastionRoutes)


export {app}
export default app