import { Response, NextFunction } from "express";

const userApiGatewayAuthorizer = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next();
};

export default userApiGatewayAuthorizer;
