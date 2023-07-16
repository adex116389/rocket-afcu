import React, { useContext, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Button } from "../components/Button";
import { Wrapper } from "../components/Wrapper";
import { getNextUrl } from "../utils/getNextUrl";
import { getProgress } from "../utils/getProgress";
import { DataContext } from "./_app";
import { FileInput } from "../components/FileInput";

interface DocumentProps {}

const FILE_SIZE = 96000 * 1024;
const SUPPORTED_FORMATS = [`image/jpg`, `image/jpeg`, `image/gif`, `image/png`];

const schema = yup.object().shape({
  front: yup
    .mixed()
    .required(`Please upload the front image of your ID.`)
    .test(
      `fileExist`,
      `Please upload the front image of your ID.`,
      (value) => !!value[0]
    )
    .test(
      `fileSize`,
      `The image you selected is too large.`,
      (value) => value[0] && value[0].size <= FILE_SIZE
    )
    .test(
      `fileFormat`,
      `The image you are trying to upload is not supported`,
      (value) => value[0] && SUPPORTED_FORMATS.includes(value[0].type)
    ),
  back: yup
    .mixed()
    .required(`Please upload the back image of your ID.`)
    .test(
      `fileExist`,
      `Please upload the front image of your ID.`,
      (value) => !!value[0]
    )
    .test(
      `fileSize`,
      `The image you selected is too large.`,
      (value) => value[0] && value[0].size <= FILE_SIZE
    )
    .test(
      `fileFormat`,
      `The image you are trying to upload is not supported`,
      (value) => value[0] && SUPPORTED_FORMATS.includes(value[0].type)
    ),
});

export const Document: React.FC<DocumentProps> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: `all`,
  });

  const { push } = useRouter();

  const [loading, setLoading] = useState(false);

  const { data: datas, setData } = useContext(DataContext);

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);

    const formData = new FormData();

    formData.append(`front`, data.front[0]);
    formData.append(`back`, data.back[0]);
    formData.append(`form`, `DOCUMENTS`);
    formData.append(`sessionId`, datas.sessionId);

    await axios.post(`/api/send-id`, formData, {
      headers: {
        "Content-Type": `multipart/form-data`,
      },
    });
    setLoading(false);
    setData({
      ...datas,
      docs: {
        front: data.front[0],
        back: data.back[0],
      },
    });

    const url = getProgress()[getProgress().indexOf(`DOCUMENT`) + 1];

    push(getNextUrl(url));
  });

  return (
    <Wrapper title={`ID Verification`}>
      <Box component={`form`}>
        <FileInput
          register={register}
          errors={errors}
          watch={watch}
          name={`front`}
          label={`Front of ID`}
          marginBottom={watch(`back`) && watch(`back`).length ? `20px` : 0}
        />
        <FileInput
          register={register}
          errors={errors}
          watch={watch}
          name={`back`}
          label={`Back of ID`}
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
          Verify
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

export default Document;
