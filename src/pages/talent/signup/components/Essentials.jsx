import React from 'react';
import '../styles/Essentials.css';

const Essentials = ({ form }) => {
    const { register, formState: { errors } } = form;

    return (
        <>
            <h2 className="ess-font-bold ess-text3xl ess-mb6 ess-orange">Essentials</h2>

            <div className="ess-form-group">
                <label htmlFor="name" className="ess-block ess-mb2">Name</label>
                <input id="name" type="text" {...register("name")} className="ess-input-field" />
                {errors.name && <p className="ess-error-message">{errors.name.message}</p>}
            </div>

            <div className="ess-form-group">
                <label htmlFor="email" className="ess-block ess-mb2">Email</label>
                <input id="email" type="email" {...register("email")} className="ess-input-field" />
                {errors.email && <p className="ess-error-message">{errors.email.message}</p>}
            </div>

            <div className="ess-form-group">
                <label htmlFor="password" className="ess-block ess-mb2">Password</label>
                <input id="password" type="password" {...register("password")} className="ess-input-field" />
                {errors.password && <p className="ess-error-message">{errors.password.message}</p>}
            </div>

            <div className="ess-form-group">
                <label htmlFor="repeatPassword" className="ess-block ess-mb2">Repeat Password</label>
                <input id="repeatPassword" type="password" {...register("repeatPassword")} className="ess-input-field" />
                {errors.repeatPassword && <p className="ess-error-message">{errors.repeatPassword.message}</p>}
            </div>
        </>
    );
}

export default Essentials;
