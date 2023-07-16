import {
  Dialog,
  DialogContent,
  DialogContentText,
  Button,
  Box,
} from "@mui/material";
import React from "react";

interface NotificationMobileProps {
  message: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NotificationMobile: React.FC<NotificationMobileProps> = ({
  message,
  open,
  setOpen,
}) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        display: [`block`, `block`, `block`, `none`],
        "& .MuiDialog-container": {
          display: `block`,
          marginTop: `90px`,
        },
        "& .MuiPaper-root": {
          margin: `24px`,
        },
      }}
    >
      <DialogContent
        sx={{
          padding: 0,
        }}
      >
        <Box
          sx={{
            padding: `16px 24px 10px`,
          }}
        />
        <DialogContentText
          sx={{
            padding: `0 24px 20px`,
            color: `rgba(0,0,0,.6)`,
            paddingY: `4px`,
            fontSize: `.875rem`,
            fontWeight: 400,
            lineHeight: `1.375rem`,
            letterSpacing: `.0071428571em`,
            textAlign: `center`,
          }}
        >
          {message}
        </DialogContentText>
        <Box
          sx={{
            paddingTop: `10px`,
            padding: `8px 16px`,
            alignItems: `center`,
            display: `flex`,
          }}
        >
          <Button
            sx={{
              padding: `0 8px`,
              height: `36px`,
              color: `#1976d2`,
              caretColor: `#1976d2`,
              willChange: `box-shadow`,
              fontSize: `.875rem`,
              border: `thin solid currentColor`,
              display: `flex`,
              flex: `1 0 auto`,
              minWidth: `100%`,
              maxWidth: `auto`,
              alignItems: `center`,
              borderRadius: `4px`,
              fontWeight: 500,
              letterSpacing: `.0892857143em`,
              justifyContent: `center`,
              outline: 0,
              position: `relative`,
              textDecoration: `none`,
              textIndent: `.0892857143em`,
              textTransform: `uppercase`,
              transitionDuration: `.28s`,
              transitionTimingFunction: `cubic-bezier(.4,0,.2,1)`,
              userSelect: `none`,
              verticalAlign: `middle`,
              whiteSpace: `nowrap`,
              overflow: `visible`,
              backgroundColor: `transparent`,
              ":before": {
                backgroundColor: `currentColor`,
                borderRadius: `inherit`,
                bottom: 0,
                color: `inherit`,
                content: `""`,
                left: 0,
                opacity: 0,
                pointerEvents: `none`,
                position: `absolute`,
                right: 0,
                top: 0,
                transition: `opacity .2s cubic-bezier(.4,0,.6,1)`,
              },
            }}
            onClick={handleClose}
          >
            <Box
              sx={{
                alignItems: `center`,
                color: `inherit`,
                display: `flex`,
                flex: `1 0 auto`,
                justifyContent: `inherit`,
                lineHeight: `normal`,
                position: `relative`,
                transition: `inherit`,
                transitionProperty: `opacity`,
              }}
            >
              Ok
            </Box>
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
