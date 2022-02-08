/*import { DbContext } from "../../db-context";
import UserRepository from "../../../repositories/account/user-repository";
import { BoxSell } from "../../../models/new/user/user";
import { TYPES } from "../../../infrastructure/ioc/types";
import DbUserMapper from "./mappings/db-user-mapper";
import DbUser from "src/persistence/models/account/db-user";*/

import { DbContext } from "../db-context";
import { injectable } from "inversify";
import { User } from "../../types/user/user";
@injectable()
export default class DbUserRepository implements DbUserRepository {
  #db: DbContext = new DbContext();

  async create(user: User): Promise<User> {
    const created = await this.#db.User.create(user, { raw: true });
    return created;
  }

  async getAll(): Promise<User[]> {
    const users = await this.#db.User.findAll({ raw: true });
    return users.map((o) => o);
  }

  async get(id: string): Promise<User | null> {
    const box = await this.#db.User.findByPk(id);
    return box;
  }

  async update(user: User, id: string): Promise<void> {
    await this.#db.User.update(user, {
      limit: 1,
      where: {
        id: id,
      },
      returning: true,
    });
  }

  async getUserByEmail(email: string) {
    return await this.#db.User.findOne({ where: { email: email } });
  }

  async remove(userId: string): Promise<boolean> {
    return this.#db.User.destroy({
      limit: 1,
      where: {
        id: userId,
      },
    }).then((n) => n === 1);
  }
}
