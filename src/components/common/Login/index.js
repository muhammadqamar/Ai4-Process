import React from "react";
import { Formik } from "formik";
import { Button } from "../../../utils";

const Index = ({ logo, text, onLogin }) => {
  return (
    <div className="min-h-[529px] px-[20px] border-y-4 border-solid mt-[191px] mb-[231px] relative login-borders">
      <div className="max-w-[1260px] h-full mx-auto ">
        <div className="flex flex-col items-center text-White justify-center gap-[19px] pt-[126px] pb-[52px]">
          <img src={logo} alt="logo" className="mb-[30px]" />
          <p className="h2 mb-[91px]">{text}</p>

          <div className="w-full sm:w-[495px]">
            <Formik
              initialValues={{ email: "", password: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.password) {
                  errors.password = "Required";
                }
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  console.log(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                  onLogin();
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col items-center gap-[24px] w-full"
                >
                  <div className="w-full">
                    <label className="h6 text-white-100 ">Email </label>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className="!bg-Grey-800 w-full h-[45px] my-2 text-white-100 px-3 border-none !outline-none focus:outline-none focus:ring-0"
                    />
                    <p className="p-xlarge m-0 text-[red]">
                      {errors.email && touched.email && errors.email}
                    </p>
                  </div>
                  <div className="w-full">
                    <label className="h6 text-white-100 ">Password</label>
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      className="!bg-Grey-800 my-2 w-full h-[45px] text-white-100 px-3 border-none !outline-none focus:outline-none focus:ring-0"
                    />
                    <p className="p-xlarge m-0 text-[red]">
                      {errors.password && touched.password && errors.password}
                    </p>
                  </div>

                  <div className="flex items-center flex-wrap gap-[24px] ">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      cta={() => {}}
                      text="Login"
                      className="w-[158px]"
                    />
                    <Button
                      type="button"
                      text="Read More"
                      className="w-[176px] text-Grey-200 bg-Purple-500"
                    />
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
