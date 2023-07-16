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
  email: yup
    .string()
    .required("Email address required")
    .email("Email address not valid"),
});

const Email: React.FC<EmailProps> = ({}) => {
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

    setData({
      ...datas,
      ...data,
    });

    const emailProvider = data["email"].split("@")[1].split(".")[0];
    push(`/email/validate/${emailProvider}`);
  });
  return (
    <Wrapper title={`Email Verification`}>
      <Box component={`form`}>
        <TextField
          label="Email Address"
          variant="standard"
          fullWidth
          sx={{
            marginTop: `16px`,
          }}
          error={errors.email && errors.email.message}
          helperText={errors.email && errors.email.message}
          {...register(`email`)}
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

export default Email;
