import { Router, type Request, type Response } from 'express';
import type { ApiResponse } from '../../shared/types/api.js';
import type { Bastion } from '../../shared/types/world.js';
import { bastions } from '../../data/mock.js';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  const response: ApiResponse<Bastion[]> = {
    success: true,
    data: bastions,
  };
  res.status(200).json(response);
});

router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;

  const bastion = bastions.find((b) => b.id === id);

  if (!bastion) {
    const errorResponse: ApiResponse<null> = {
      success: false,
      data: null,
      message: `Bastion of id ${id} is nowhere to find.`,
    };
    return res.status(404).json(errorResponse);
  }

  const successResponse: ApiResponse<Bastion> = {
    success: true,
    data: bastion,
  };

  return res.status(200).send(successResponse);
});

export default router;
