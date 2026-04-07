import {Router, type Request, type Response} from "express"
import type { ApiResponse } from "../../shared/types/api.js"
import type { Item } from "../../shared/types/world.js"
import { items } from "../../data/mock.js"

const router = Router()


router.get('/', (req:Request, res:Response)=>{
  const response : ApiResponse<Item[]> = {
    success: true,
    data: items,
  }
  res.status(200).json(response)
})


export default router