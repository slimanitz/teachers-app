import { inject, injectable } from "inversify";
import DbUserRepository from "../../database/repositories/db-user-repository";
import { User } from "../../types/user/user";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

@injectable()
export default class UserService {
  #dbUserRepository: DbUserRepository;
  constructor(
    @inject("DbUserRepository") public DbUserRepository: DbUserRepository
  ) {
    this.#dbUserRepository = DbUserRepository;
  }

  async register(user: User): Promise<User> {
    if (await this.checkIfUserExists(user.email)) {
      throw new Error("User already exists");
    }
    user.password = await this.cryptPassword(user.password);
    const newUser = await this.#dbUserRepository.create(user);
    return this.generateAuthToken(newUser);
  }

  async getAll(): Promise<User[]> {
    const Users = await this.#dbUserRepository.getAll();
    return Users.map((o: User) => o);
  }

  async get(id: string): Promise<User | null> {
    const user = await this.#dbUserRepository.get(id);
    return user;
  }

  async checkIfUserExists(email: string) {
    const user = await this.#dbUserRepository.getUserByEmail(email);
    return user ? true : false;
  }

  generateAuthToken(user: User) {
    const accessToken = jwt.sign(
      { id: user.id, role: user.role },
      process.env.ACCESS_TOKEN_SECRET
    );
    return accessToken;
  }

  async cryptPassword(password: string) {
    // The bcrypt is used for encrypting password.
    return await bcrypt.hash(password, process.env.SALT);
  }

  async comparePassword(password: string, hash: string) {
    const isMatching = await bcrypt.compare(password, hash);
    return isMatching;
  }
}

// const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET)
// const cookie = req.cookies.token;
// if (cookie == undefined){
// res.cookie(‘token’, token, {httpOnly: true});
// }
// return res.status(200).json({message:”login success”});
