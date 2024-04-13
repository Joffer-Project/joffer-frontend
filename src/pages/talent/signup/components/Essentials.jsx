import React from "react";
import "../styles/Essentials.css";

const Essentials = ({ form }) => {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <>
      <h2 className="ess-title">Essentials</h2>

      <div className="ess-form-container">
        <div className="ess-form-group">
          <input
            id="name"
            type="text"
            {...register("name")}
            placeholder="Name" // Placeholder added here
            className="ess-input-field"
          />
          {errors.name && (
            <p className="ess-error-message">{errors.name.message}</p>
          )}
        </div>

        <div className="ess-form-group">
          <input
            id="email"
            type="email"
            {...register("email")}
            placeholder="Mail" // Placeholder added here
            className="ess-input-field"
          />
          {errors.email && (
            <p className="ess-error-message">{errors.email.message}</p>
          )}
        </div>

        <div className="ess-form-group">
          <input
            id="password"
            type="password"
            {...register("password")}
            placeholder="Password" // Placeholder added here
            className="ess-input-field"
          />
          {errors.password && (
            <p className="ess-error-message">{errors.password.message}</p>
          )}
        </div>

        <div className="ess-form-group">
          <input
            id="repeatPassword"
            type="password"
            {...register("repeatPassword")}
            placeholder="Repeat password" // Placeholder added here
            className="ess-input-field"
          />
          {errors.repeatPassword && (
            <p className="ess-error-message">{errors.repeatPassword.message}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Essentials;
