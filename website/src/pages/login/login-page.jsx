import React from "react";
import "./login-page.css";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); //

  return (
    <div class="content">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row"></div>
        <div className="row">
          <input
            className=" mb-3 input"
            defaultValue="Email"
            type="email"
            {...register("email", { required: true })}
          />
        </div>

        <div className="row">
          <input
            className=" mb-3 input"
            type="password"
            {...register("password", { required: true })}
          />
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
