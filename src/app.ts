import express, {type Application, type Request, type Response} from "express"
import healthRoutes from "./modules/health/health.routes.js"
import bastionRoutes from "./modules/bastions/bastions.routes.js"
import driftersRoutes from "./modules/drifters/driters.routes.js"
import itemRoutes from "./modules/items/items.routes.js"
import factionsRoutes from "./modules/factions/factions.routes.js"

const app: Application = express()

app.use(express.json())

app.use("/api/v1/health", healthRoutes)
app.use("/api/v1/bastions", bastionRoutes)
app.use("/api/v1/drifters", driftersRoutes)
app.use("/api/v1/items", itemRoutes)
app.use("/api/v1/factions", factionsRoutes)

export {app}
export default app