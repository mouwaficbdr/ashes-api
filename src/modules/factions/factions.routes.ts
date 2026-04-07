import {Router, type Request, type Response} from "express"
import type { ApiResponse } from "../../shared/types/api.js"
import type { Faction } from "../../shared/types/world.js"
import { factions } from "../../data/mock.js"

const router = Router()

router.get('/', (req:Request, res:Response)=>{
  const response: ApiResponse<Faction[]> = {
    success: true,
    data: factions
  }
  res.status(200).json(response)
})

export default router