import React from "react";
import {
  Box,
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

interface ButtonProps extends MuiButtonProps {}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Box
      sx={{
        marginTop: `16px`,
      }}
    >
      <MuiButton
        variant="contained"
        sx={{
          height: `36px`,
          textIndent: `0.0892857143em`,
          letterSpacing: `.0892857143em`,
          padding: `0 16px`,
          marginRight: `12px`,
        }}
        {...props}
      >
        {children}
      </MuiButton>
    </Box>
  );
};
