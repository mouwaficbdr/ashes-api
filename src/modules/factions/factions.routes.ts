import {Router, type Request, type Response} from "express"
import type { ApiResponse } from "../../shared/types/api.js"
import { FactionSchema, type Faction } from "../../shared/types/world.js"
import { factions } from "../../data/mock.js"
import { treeifyError } from 'zod';

const router = Router()

router.get('/', (req:Request, res:Response)=>{
  const response: ApiResponse<Faction[]> = {
    success: true,
    data: factions
  }
  res.status(200).json(response)
})

router.post("/", (req:Request, res:Response)=>{
  const validation = FactionSchema.safeParse(req.body)

  if(!validation.success){
    const errorResponse: ApiResponse<null> = {
      success: false,
      data: null,
      error: {
        code: "VALIDATION_FAILED",
        message: "Le formulaire contient des erreurs",
        details: treeifyError(validation.error)
      }
    };
    return res.status(400).json(errorResponse)
  }

  const newFaction = validation.data;

  const isNewFactionAlreadyInDb = () => {
    if (factions.find(f=> f.id === newFaction.id) || factions.find(f=> f.name === newFaction.name)){
      return true;
    } 

    return false
  }

  if(isNewFactionAlreadyInDb()){
    const errorResponse: ApiResponse<null> = {
      success: false,
      data: null,
      error: {
        code: 'RESSOURCE_ALREADY_EXISTS',
        message: "Entry already exists.",
      },
    };
    return res.status(409).json(errorResponse)
  }

  factions.push(newFaction)

  const successResponse: ApiResponse<Faction> = {
    success: true,
    message: `Faction ${newFaction.name} successfully created.`,
    data: newFaction
  }

  res.status(201).json(successResponse)
})

export default router