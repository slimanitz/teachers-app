// import * as express from "express";
// import DbUserRepository from "../database/repositories/account/db-user-repository";
// import DbVerificationRepository from "../database/repositories/account/db-verification-repository";
// import { Role } from "../models/account/role";
// import UserService from "../services/account/user-service";

// const jwt = require("jsonwebtoken");

// const userRepository = new DbUserRepository();
// const userService = new UserService(userRepository);
// //TODO: fix import of dependencies by injecting not a constructor call

// const getUserFromToken = async (token: string) => {
//   return jwt.verify(
//     token,
//     process.env.ACCESS_TOKEN_SECRET,
//     function (err: any, user: any) {
//       if (err) {
//         console.log(err);
//       }
//       return user;
//     }
//   );
// };

// function authMiddlewareFactory() {
//   return (config: { role: Role }) => {
//     return (
//       req: express.Request,
//       res: express.Response,
//       next: express.NextFunction
//     ) => {
//       (async () => {
//         // get email using auth token
//         const authHeader = req.headers["authorization"];
//         const token = authHeader && authHeader.split(" ")[1];
//         if (token == null) res.sendStatus(401);

//         const user = await getUserFromToken(token!);

//         if (user !== null && userService.checkUserRights(user.id, user.role)) {
//           if (user.role === config.role) {
//             next();
//           } else {
//             res.status(403).end("Forbidden");
//           }
//         } else {
//           res.status(401).end("Unauthorized");
//         }
//       })();
//     };
//   };
// }

// const authMiddleware = authMiddlewareFactory();

// export { authMiddleware };
