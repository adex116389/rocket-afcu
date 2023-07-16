import { Box, BoxProps, Typography } from "@mui/material";
import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface WrapperProps extends BoxProps {
  title: string;
}

export const Wrapper: React.FC<WrapperProps> = ({ children, title }) => {
  return (
    <Box
      sx={{
        background: `#fff`,
        color: `rgba(0,0,0,.87)`,
        display: `flex`,
        fontFamily: `Roboto,sans-serif`,
        lineHeight: 1.5,
      }}
    >
      <Box
        sx={{
          flex: `1 1 auto`,
          backfaceVisibility: `hidden`,
          display: `flex`,
          flexDirection: `column`,
          minHeight: `100vh`,
          maxWidth: `100%`,
          position: `relative`,
        }}
      >
        <Header />
        <Box
          component={`main`}
          sx={{
            padding: `78px 0px 0px`,
            display: `flex`,
            flex: `1 0 auto`,
            maxWidth: `100%`,
            transition: `.2s cubic-bezier(.4,0,.2,1)`,
          }}
        >
          <Box
            sx={{
              flex: `1 1 auto`,
              maxWidth: `100%`,
              position: `relative`,
            }}
          >
            <Box
              sx={{
                maxWidth: `1200px`,
                width: `100%`,
                padding: `12px`,
                marginRight: `auto`,
                marginLeft: `auto`,
              }}
            >
              <Box>
                <Box>
                  <Typography
                    component={`h1`}
                    sx={{
                      fontWeight: 500,
                      letterSpacing: `normal`,
                      fontFamily: `Roboto,sans-serif`,
                      fontSize: `1.875rem`,
                      lineHeight: `2.375rem`,
                      margin: `0.5em 0`,
                    }}
                  >
                    {title}
                  </Typography>
                  <Box
                    sx={{
                      display: `flex`,
                      flexWrap: `wrap`,
                      flex: `1 1 auto`,
                      margin: `-12px`,
                    }}
                  >
                    <Box
                      sx={{
                        flexBasis: 0,
                        flexGrow: 1,
                        maxWidth: [
                          `100%`,
                          `100%`,
                          `41.6666666667%`,
                          `33.3333333333%`,
                        ],
                        flex: [
                          `0 0 100%`,
                          `0 0 100%%`,
                          `0 0 41.6666666667%`,
                          `0 0 33.3333333333%`,
                        ],
                        width: `100%`,
                        padding: `12px`,
                      }}
                    >
                      {children}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};
