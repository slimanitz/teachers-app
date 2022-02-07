import { inject, injectable } from "inversify";
import DbUserRepository from "../../database/repositories/db-user-repository";
import { User } from "../../models/user/user";

@injectable()
export default class UserService {
  #dbUserRepository: DbUserRepository;
  constructor(
    @inject("DbUserRepository") public DbUserRepository: DbUserRepository
  ) {
    this.#dbUserRepository = DbUserRepository;
  }

  async create(user: User): Promise<void> {
    await this.#dbUserRepository.create(user);
  }

  async getAll(): Promise<User[]> {
    const Users = await this.#dbUserRepository.getAll();
    return Users.map((o: User) => o);
  }

  async get(id: string): Promise<User | null> {
    const user = await this.#dbUserRepository.get(id);
    return user;
  }
}
