import {Router, type Response, type Request} from "express"
import { timeStamp } from "node:console"

const router = Router()

router.get("/", (req: Request, res: Response)=>{
  res.status(200).json({status: "UP", timestamp: new Date().toISOString()})
})


export default router