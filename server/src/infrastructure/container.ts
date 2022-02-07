import { Container } from "inversify";

import DbUserRepository from "../database/repositories/db-user-repository";
import UserService from "../services/user/user-service";

const container = new Container();

//DB

//Services
//container.bind<BoxRentService>("BoxRentService").to(BoxRentService);
container.bind<UserService>("UserService").to(UserService);

//Repositories
container.bind<DbUserRepository>("DbUserRepository").to(DbUserRepository);

export default container;
