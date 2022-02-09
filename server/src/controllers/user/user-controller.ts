import {
  interfaces,
  controller,
  httpGet,
  httpPost,
  response,
  requestParam,
  requestBody,
  request,
} from "inversify-express-utils";
import { inject } from "inversify";
import * as express from "express";

import UserService from "../../services/user/user-service";

@controller("/user")
export class UserController implements interfaces.Controller {
  #UserService: UserService;
  constructor(@inject("UserService") private userService: UserService) {
    this.#UserService = userService;
  }

  // @httpPost("/")
  // public async create(
  //   @requestBody() body: any,
  //   @response() res: express.Response
  // ) {
  //   await this.#UserService.create(body);
  //   res.status(200);
  // }

  @httpPost("/register")
  public async register(
    @request() req: any,
    @requestBody() body: any,
    @response() res: any
  ) {
    try {
      console.log("here");
      const token = await this.#UserService.register(body);
      console.log("here");

      console.log("here");

      res.cookie("token", token, { httpOnly: true });

      return res.status(200).json({ message: "register success" });
    } catch (error) {
      res.status(500).json({ message: "Error while registering" });
    }
  }

  @httpGet("/")
  public async getAll(@response() res: express.Response) {
    const users = await this.#UserService.getAll();
    res.status(200).json(users);
  }

  @httpGet("/:id")
  public async get(
    @requestParam() id: string,
    @response() res: express.Response
  ) {
    const user = await this.#UserService.get(id);
    if (user == null) {
      return res.status(404).json();
    }
    return res.status(200).json(user);
  }
}
