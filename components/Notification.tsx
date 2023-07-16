import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";

interface NotificationProps {
  message: string;
}

export const Notification: React.FC<NotificationProps> = ({ message }) => {
  const [close, setClose] = useState(`block`);
  return (
    <Box
      sx={{
        display: [`none`, `none`, `none`, close],
      }}
    >
      <Box
        sx={{
          paddingBottom: `0px`,
          paddingTop: `78px`,
          height: `100vh`,
          position: `fixed`,
          zIndex: 1000,
          alignItems: `flex-start`,
          bottom: `auto`,
          display: `flex`,
          fontSize: `.875rem`,
          justifyContent: `center`,
          left: 0,
          pointerEvents: `none`,
          right: 0,
          top: 0,
          width: `100%`,
        }}
      >
        <Box
          sx={{
            boxShadow: `0 3px 5px -1px rgb(0 0 0 / 20%), 0 6px 10px 0 rgb(0 0 0 / 14%), 0 1px 18px 0 rgb(0 0 0 / 12%)`,
            backgroundColor: `#ff5252`,
            borderColor: `#ff5252`,
            color: `hsla(0,0%,100%,.87)`,
            borderRadius: `4px`,
            alignItems: `center`,
            display: `flex`,
            margin: `8px`,
            maxWidth: `672px`,
            minHeight: `48px`,
            minWidth: `344px`,
            padding: 0,
            pointerEvents: `auto`,
            position: `relative`,
            transitionDuration: `.15s`,
            transitionTimingFunction: `cubic-bezier(0,0,.2,1)`,
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              fontSize: `.875rem`,
              fontWeight: 400,
              letterSpacing: `.0178571429em`,
              lineHeight: `1.25rem`,
              marginRight: `auto`,
              padding: `14px 16px`,
              textAlign: `initial`,
              paddingRight: `8px`,
            }}
          >
            <Box component={`span`}>{message}</Box>
          </Box>
          <Box
            sx={{
              margin: `0 16px 0 8px`,
              alignItems: `center`,
              alignSelf: `center`,
              display: `flex`,
            }}
          >
            <IconButton
              sx={{
                color: `#fff`,
                width: `20px`,
                height: `20px`,
                willChange: `box-shadow`,
                fontSize: `.625rem`,
                borderRadius: `50%`,
                cursor: `pointer`,
                minHeight: 0,
                minWidth: 0,
                padding: 0,
                alignItems: `center`,
                display: `inline-flex`,
                flex: `0 0 auto`,
                fontWeight: 500,
                letterSpacing: `.0892857143em`,
                justifyContent: `center`,
                outline: 0,
                position: `relative`,
                textDecoration: `none`,
                textIndent: `.0892857143em`,
                textTransform: `uppercase`,
                transitionDuration: `.28s`,
                transitionProperty: `box-shadow,transform,opacity`,
                transitionTimingFunction: `cubic-bezier(.4,0,.2,1)`,
                userSelect: `none`,
                verticalAlign: `middle`,
                whiteSpace: `nowrap`,
              }}
              onClick={() => setClose(`none`)}
            >
              <CloseIcon
                sx={{
                  fontSize: `18px`,
                  width: `18px`,
                  height: `18px`,
                  color: `rgba(255, 255, 255, 0.8)`,
                }}
              />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
