import { useFormik } from "formik";
import { useContext } from "react";
import FormControl from "../../components/FormControl/FormControl";
import Input from "../../components/Input/Input";
import AuthContext from "../../contexts/AuthContext";
import { login as loginService } from "../../services/AuthService";
import { setAccessToken } from "../../stores/AccessTokenStore";
import { loginSchema } from "../../schemas/login.schema";
import "./Login.css";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const { login } = useContext(AuthContext);

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isSubmitting,
    handleSubmit,
    setSubmitting,
    setFieldError,
  } = useFormik({
    initialValues: initialValues,
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      loginService({ email: values.email, password: values.password })
        .then((response) => {
          login(response.accessToken);
        })
        .catch((err) => {
          if (err?.response?.data?.message) {
            setFieldError("email", err?.response?.data?.message);
          } else {
            setFieldError("email", err.message);
          }
          setSubmitting(false);
        });
    },
  });

  return (
    <div className="container my-3">
      <div>
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <FormControl
            text="Email"
            error={touched.email && errors.email}
            htmlFor="email"
          >
            <Input
              id="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={touched.email && errors.email}
              placeholder="Enter email..."
            />
          </FormControl>

          <FormControl
            text="Password"
            error={touched.password && errors.password}
            htmlFor="password"
          >
            <Input
              id="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              error={touched.password && errors.password}
              placeholder="Enter password..."
              type="password"
            />
          </FormControl>

          <button
            className="btn-primary"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Loading..." : "Log in"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;