import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendLoginData } from "../../infrastructure/requestService";
import { useAuthContext } from "../../infrastructure/context";
import { Formik } from "formik";
import * as yup from "yup";
import Button from "../../ui-library/Button/Button";
import "./style.css";

import { ReactComponent as EyeSvg } from "../../assets/icons/eye.svg";

interface MyFormValues {
  email: string;
  phone: string;
  password: string;
}

function LoginForm() {
  const [user, setUser] = useState({
    email: "",
    phone: "",
    password: "",
  });

  const [typeInput, setTypeInput] = useState("password");

  const { setIsAuth } = useAuthContext();

  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Enter in the correct format example@example.com")
      .required("Required field"),
    phone: yup
      .string()
      .required("Required field")
      .matches(
        /(\+7|\+976)[\d]{10,15}/,
        "The phone number must start with +7 or +976 without spaces, brackets or hyphens"
      ),
    password: yup
      .string()
      .required("Required field")
      .matches(
        /[\w]{4,}/,
        "Can only contain letters (any case allowed) and numbers, minimum 4 characters"
      ),
  });

  const showPassword = () => {
    typeInput === "password" ? setTypeInput("text") : setTypeInput("password");
  };

  const submitToServer = async (values: MyFormValues) => {
    const auth = await sendLoginData(values);

    setUser({
      email: "",
      phone: "",
      password: "",
    });

    if (auth.status === "OK!") {
      setIsAuth(true);
      navigate("/");
    }
  };

  return (
    <div className="form wrapper flex_col">
      <label className="loginLabel">Login</label>
      <Formik
        initialValues={{
          email: "",
          phone: "",
          password: "",
        }}
        validateOnBlur
        onSubmit={submitToServer}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <>
            <input
              className="inputField"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              type="email"
              name="email"
              placeholder="Email"
              autoFocus
            />
            {touched.email && errors.email && (
              <p className="error">{errors.email}</p>
            )}
            <input
              className="inputField"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
              type="tel"
              name="phone"
              placeholder="Phone"
            />
            {touched.phone && errors.phone && (
              <p className="error">{errors.phone}</p>
            )}
            <div className="eyeBlock">
              <EyeSvg className="eye_icon" onClick={showPassword} />
            </div>
            <input
              className="inputField"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              type={typeInput}
              name="password"
              placeholder="Password"
            />
            {touched.password && errors.password && (
              <p className="error">{errors.password}</p>
            )}
            
            <Button
              handleSubmit={handleSubmit}
              type={"submit"}
              isValid={isValid}
              dirty={dirty}
            >
              SEND
            </Button>
          </>
        )}
      </Formik>
    </div>
  );
}

export default LoginForm;
