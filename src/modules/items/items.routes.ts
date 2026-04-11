import {Router, type Request, type Response} from "express"
import type { ApiResponse } from "../../shared/types/api.js"
import type { Item, ItemGuideEntry, StatGuideEntry } from "../../shared/types/world.js"
import { itemGuide, items, statGuide } from "../../data/mock.js"

const router = Router()


router.get('/', (req:Request, res:Response)=>{
  const response : ApiResponse<Item[]> = {
    success: true,
    data: items,
  }
  res.status(200).json(response)
})

router.get('/guide', (req: Request, res: Response) => {
  const response: ApiResponse<ItemGuideEntry[]> = {
    success: true,
    data: itemGuide,
  };
  res.status(200).json(response);
});

router.get('/stats/guide', (req: Request, res: Response) => {
  const response: ApiResponse<StatGuideEntry[]> = {
    success: true,
    data: statGuide,
  };
  res.status(200).json(response);
});




export default router