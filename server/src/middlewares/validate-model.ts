import * as express from "express";
import {
  ClassType,
  transformAndValidateSync,
} from "class-transformer-validator";

export default function ValidateModel<T extends object>(
  classType: ClassType<T>
) {
  return async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<any> => {
    const model = req.body;

    try {
      transformAndValidateSync(classType, model);
    } catch (e) {
      console.log(req);
      res.status(400).json(JSON.stringify(e)).end();
      return;
    }

    next();
  };
}
