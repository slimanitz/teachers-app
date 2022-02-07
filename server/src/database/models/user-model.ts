import { Table, Column, Model, DataType } from "sequelize-typescript";
import { Role } from "../../models/user/role";
import { User } from "../../models/user/user";

@Table({
  schema: "account",
  tableName: "user",
  timestamps: false,
})
export default class DbUser extends Model<User> {
  @Column({
    field: "id",
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  public id?: string;

  @Column({
    field: "first_name",
    type: DataType.STRING,
    allowNull: false,
  })
  public firstName: string;

  @Column({
    field: "last_name",
    type: DataType.STRING,
    allowNull: false,
  })
  public lastName: string;

  @Column({
    field: "birth_Date",
    type: DataType.DATEONLY,
    allowNull: false,
  })
  public birthDate: Date;

  @Column({
    field: "email",
    type: DataType.STRING,
    allowNull: true,
    unique: true,
  })
  public email: string;

  @Column({
    field: "role",
    type: DataType.ENUM("Admin", "Client"),
    allowNull: false,
  })
  public role?: Role;
}
