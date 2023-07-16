import { Box, Link } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "../styles/Header.module.css";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <Box
      component={`header`}
      sx={{
        height: `78px`,
        marginTop: `0px`,
        transform: `translateY(0px)`,
        left: `0px`,
        right: `0px`,
        backgroundColor: `#00548e`,
        borderColor: `#00548e`,
        position: `fixed`,
        top: 0,
        zIndex: 5,
        color: `#fff`,
        boxShadow: `0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)`,
        flex: `1 1 auto`,
        maxWidth: `100%`,
        contain: `layout`,
        display: `block`,
        transition: `transform .2s cubic-bezier(.4,0,.2,1),background-color .2s cubic-bezier(.4,0,.2,1),left .2s cubic-bezier(.4,0,.2,1),right .2s cubic-bezier(.4,0,.2,1),box-shadow .28s cubic-bezier(.4,0,.2,1),max-width .25s cubic-bezier(.4,0,.2,1),width .25s cubic-bezier(.4,0,.2,1),-webkit-box-shadow .28s cubic-bezier(.4,0,.2,1)`,
      }}
    >
      <Box
        sx={{
          display: `flex`,
          alignItems: `center`,
          position: `relative`,
          zIndex: 0,
          height: `78px`,
          padding: `4px 16px`,
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
                display: `flex`,
              }}
            >
              <Link
                sx={{
                  color: `#337ab7`,
                  cursor: `pointer`,
                  textDecoration: `none`,
                  backgroundColor: `transparent`,
                }}
              >
                <Box
                  className={styles.logoContainer}
                  sx={{
                    display: [`block`, `block`, `none`, `none`],
                  }}
                >
                  <Image
                    alt={`America First Credit Union`}
                    src={`data:image/png;base64,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`}
                    layout={`fill`}
                    objectFit={`contain`}
                  />
                </Box>
                <Box
                  className={styles.logoDesktopContainer}
                  sx={{
                    display: [`none`, `none`, `block`, `block`],
                  }}
                >
                  <Image
                    alt={`America First Credit Union`}
                    src={`/images/logo.png`}
                    layout={`fill`}
                    objectFit={`contain`}
                  />
                </Box>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
