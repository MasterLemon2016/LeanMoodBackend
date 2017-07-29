import { Request, Response } from 'express';
import { TrainingModel } from '../../../models/studentModule';

export const TrainingsController = (Training: TrainingModel) => {
  const getById = (req: Request, res: Response) => {
    const training: TrainingModel = {
      id: '1',
      name: 'Máster Front-End Lemoncode',
      /* tslint:disable:max-line-length */
      markdownContent: `
## Module 1 - UX + Design

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`,
    };

    res.send(training).status(200);
  };

  return {
    getById,
  };
};
