import * as Validator from "class-validator";
import { Role } from "../../../types/user/role";
import { User } from "../../../types/user/user";

export class UserCreationRequest {
  @Validator.IsNotEmpty()
  @Validator.IsEmail()
  public email: string;

  @Validator.IsNotEmpty()
  @Validator.IsString()
  public password: string;

  @Validator.IsNotEmpty()
  @Validator.IsString()
  public firstName: string;

  @Validator.IsNotEmpty()
  @Validator.IsString()
  public lastName: string;

  @Validator.IsNotEmpty()
  @Validator.IsDate()
  public birthDate: string;
}
