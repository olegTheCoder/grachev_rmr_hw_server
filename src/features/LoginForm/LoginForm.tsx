import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendLoginData } from "../../infrastructure/requestService";
import { useAuthContext } from "../../infrastructure/context";
import { Formik } from "formik";
import * as yup from "yup";
import Button from "../../ui-library/Button/Button";
import "./style.css";

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

  const { setIsAuth } = useAuthContext();

  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Введите в правильном формате. Например example@example.com")
      .required("Обязательное поле"),
    phone: yup
      .string()
      .required("Обязательное поле")
      .matches(
        /(\+7|\+976)[\d]{10,15}/,
        "Телефон должен начинаться с +7 или +976 без пробелов, скобок и дефиса"
      ),
    password: yup
      .string()
      .required("Обязательное поле")
      .matches(
        /[\w]{4,}/,
        "Может содержать только буквы (допускается любой регистр) и цифры, минимум - 4 символа"
      ),
  });

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
            <input
              className="inputField"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              type="password"
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
