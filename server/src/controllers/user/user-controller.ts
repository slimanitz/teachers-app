import {
  interfaces,
  controller,
  httpGet,
  httpPost,
  response,
  requestParam,
  requestBody,
} from "inversify-express-utils";
import { inject } from "inversify";
import * as express from "express";

import UserService from "../../services/user/user-service";

@controller("/user")
export class BoxSellController implements interfaces.Controller {
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
  public async register(@requestBody() body: any, @response() res: any) {
    try {
      const newUser = await this.#UserService.register(body.user);

      res.status(200).json(newUser);
    } catch (error) {
      res.status(500).json(error);
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
