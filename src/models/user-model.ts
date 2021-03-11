import { Model,AllowNull, AutoIncrement, Column, NotEmpty, PrimaryKey, Table } from "sequelize-typescript";

export interface UserI{
    id?:number|null,
    email:string,
    password:string,
    name:string,
    age:number
}

@Table({
    tableName:"user",
    timestamps:true
})

export default class User extends Model implements UserI{
    
    @AutoIncrement
    @PrimaryKey
    @Column
    id?:number

    @AllowNull(false)
    @NotEmpty
    @Column
    email!:string

    @AllowNull(false)
    @NotEmpty
    @Column
    password!:string

    @AllowNull(false)
    @NotEmpty
    @Column
    name!:string

    @AllowNull(false)
    @NotEmpty
    @Column
    age!:number
}