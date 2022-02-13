import React from "react";
import "./login-page.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import axios from "axios";

const LoginPage = () => {
  const schema = yup
    .object({
      email: yup.string().email().required(),
      password: yup.string().required(),
    })
    .required();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const res = await axios.post("/user/login", data);
  };

  return (
    <div className="content container-fluid p-4 col-4 mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control input"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            {...register("email", { required: true })}
          />
        </div>
        <div className="row">
          <p>{errors.email?.message}</p>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control input"
            id="exampleInputPassword1"
            placeholder="Password"
            {...register("password", { required: true })}
          />
        </div>
        <div className="row">
          <p>{errors.password?.message}</p>
        </div>
        <input type="submit" value="Login" className="btn btn-primary" />

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
      </form>
    </div>
  );
};

export default LoginPage;
