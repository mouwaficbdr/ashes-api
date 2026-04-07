import {Router, type Request, type Response} from "express"
import type { ApiResponse } from "../../shared/types/api.js"
import type { Drifter } from "../../shared/types/world.js"
import { drifters } from "../../data/mock.js"

const router = Router()


router.get("/", (req:Request, res:Response)=>{
  const response: ApiResponse<Drifter[]> ={
    success: true,
    data: drifters
  };
  res.status(200).json(response)
})

router.get("/:id", (req:Request, res:Response)=>{
  const {id} = req.params

  const drifter = drifters.find(d => d.id === id)

  if(!drifter){
    const errorResponse: ApiResponse<null> = {
      success: false,
      data: null,
      message: `Drifter of id ${id} is nowhere to find.`,
    }
    return res.status(404).json(errorResponse)
  }

  const successResponse: ApiResponse<Drifter> = {
    success: true,
    data: drifter,
  } 

  res.status(200).json(successResponse)

})



export default router