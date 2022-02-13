import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import axios from "axios";

const SignUpPage = () => {
  const schema = yup
    .object({
      email: yup.string().email().required(),
      password: yup.string().required(),
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      birthDate: yup.date().required(),
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
    const res = await axios.post("/user/register", data);
  };

  const [birthDate, setbirthDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  return (
    <div className="content container-fluid p-4 col-4 mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control input"
            id="firstName"
            {...register("firstName", { required: true })}
          />
        </div>
        <div className="row">
          <p>{errors.firstName?.message}</p>
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control input"
            id="lastName"
            {...register("lastName", { required: true })}
          />
        </div>
        <div className="row">
          <p>{errors.lastName?.message}</p>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control input"
            id="email"
            placeholder="Enter your email"
            {...register("email", { required: true })}
          />
        </div>
        <div className="row">
          <p>{errors.email?.message}</p>
        </div>
        <div className="form-group">
          <label htmlFor="birthDate">Birth Date</label>
          <input
            type="date"
            className="form-control input"
            id="birthDate"
            onChange={(event) => setbirthDate(event.target.value)}
            {...register("birthDate", { required: true })}
          />
        </div>
        <div className="row">
          <p>{errors.birthDate?.message}</p>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control input"
            id="password"
            {...register("password", { required: true })}
          />
        </div>
        <div className="row">
          <p>{errors.password?.message}</p>
        </div>
        <input type="submit" value="Register" className="btn btn-primary" />
      </form>
      <button onClick={() => axios.get("/user/isAuthorized")}> test</button>
    </div>
  );
};

export default SignUpPage;
