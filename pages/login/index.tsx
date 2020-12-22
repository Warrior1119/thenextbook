import { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import { useForm } from "react-hook-form";

import Button from "../../components/Button";
import Layout from "../../components/Layout";
import CustomInput from "../../components/FormComponents/Input/CustomInput";

import QUERY_LOGIN from "./queryLogin.graphql";
import Image from "next/image";

import IconRightArrowPoint from "../../public/assets/icons/right_arrowpoint_icon.svg";

import styles from "./login.module.scss";

type Inputs = {
  email: string;
  password: string;
};

const Login: React.FunctionComponent = () => {
  // const { isAuthenticated, onLogin } = useAppContext();

  // const [login, { data, loading }] = useLazyQuery(QUERY_LOGIN, {
  //   onCompleted: (data) => {
  //     if (data?.login?.success) {
  //       onLogin(data?.login?.payload);
  //     }
  //   },
  // });
  const { register, handleSubmit, errors } = useForm<Inputs>();

  const onSubmit = async ({ email, password }) => {
    // await login({
    //   variables: {
    //     email,
    //     password,
    //   },
    // });
  };

  return (
    <Layout>
      <div className={styles.FormContainer}>
        <div className={styles.Formbg} />
        <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.Vlogo}>
            <div className={styles.Vlogoimg}>
              <Image
                src="/assets/images/logo_vshape.png"
                alt="Vlogo"
                layout="fill"
              />
            </div>
          </div>

          {/* {data?.login?.message && <span>{data?.login?.message}</span>} */}
          <h1>Administrator Login</h1>
          <CustomInput
            placeholder="Email"
            name="email"
            type="email"
            autoComplete="email"
            formRef={register({
              required: { value: true, message: "An email is required" },
            })}
            error={errors.email}
          />
          <CustomInput
            placeholder="Password"
            name="password"
            type="password"
            autoComplete="password"
            formRef={register({
              required: { value: true, message: "A password is required" },
            })}
            error={errors.password}
          />
          <div className={styles.ButtonContainer}>
            <Button
              className={styles.LoginButton}
              // loading={loading}
              // disabled={loading}
              type="submit"
            >
              Login
              <div className={styles.ArrowRight}>
                <IconRightArrowPoint />
              </div>
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
