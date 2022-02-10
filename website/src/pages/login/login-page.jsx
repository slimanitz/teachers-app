import React from "react";
import "./login-page.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div class="content container-fluid p-4 col-4 mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <input
            className="mb-3 input form-control"
            defaultValue="Email"
            type="email"
            {...register("email", { required: true })}
          />
        </div>
        <div className="row">
          <p>{errors.email?.message}</p>
        </div>

        <div className="row">
          <input
            className=" mb-3 form-control"
            type="password"
            {...register("password", { required: true })}
          />
        </div>
        <div className="row">
          <p>{errors.password?.message}</p>
        </div>
        <div className="row">
          <input type="submit" value="Login" className="btn btn-primary" />
        </div>

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
      </form>
    </div>
  );
};

export default LoginPage;
