import { Role } from "./role";

export interface User {
  id?: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  email: string;
  password: string;
  role?: Role;
}
