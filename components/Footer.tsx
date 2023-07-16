import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "../styles/Footer.module.css";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Box
      component={`footer`}
      sx={{
        boxShadow: `0 0 0 0 rgb(0 0 0 / 20%), 0 0 0 0 rgb(0 0 0 / 14%), 0 0 0 0 rgb(0 0 0 / 12%)`,
        color: `#ccc`,
        fontSize: `11px`,
        backgroundColor: `#1e1e23`,
        borderColor: `#1e1e23`,
        borderRadius: 0,
        display: `flex`,
        flex: `0 1 auto`,
        flexWrap: `wrap`,
        padding: `6px 16px`,
        position: `relative`,
        transitionDuration: `.2s`,
        transitionProperty: `background-color,left,right`,
        msTransitionTimingFunction: `cubic-bezier(.4,0,.2,1)`,
        margin: 0,
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
            margin: `-12px`,
            marginTop: `4px`,
            display: `flex`,
            justifyContent: `center`,
            flexWrap: `wrap`,
            flex: `1 1 auto`,
          }}
        >
          <Box>
            {[` terms `, ` branch locator `, ` 1-855-801-2328 `].map(
              (link, index) => {
                return (
                  <React.Fragment key={link}>
                    <Link
                      sx={{
                        color: `#ccc`,
                        fontSize: `11px`,
                        textDecoration: `none`,
                        cursor: `pointer`,
                        backgroundColor: `transparent`,
                      }}
                    >
                      {link}
                    </Link>
                    {index !== 2 ? (
                      <Box
                        component={`span`}
                        sx={{
                          margin: `0 5px`,
                          padding: 0,
                        }}
                      >
                        |
                      </Box>
                    ) : null}
                  </React.Fragment>
                );
              }
            )}
          </Box>
        </Box>
        <Box
          sx={{
            margin: `-12px`,
            marginBottom: `12px`,
            marginTop: `24px`,
            display: `flex`,
            justifyContent: `center`,
            flexWrap: `wrap`,
            flex: `1 1 auto`,
          }}
        >
          <Box>
            <Box
              sx={{
                display: `flex`,
                justifyContent: `center`,
                flex: `1 1 auto`,
                maxWidth: `100%`,
                overflow: `hidden`,
                position: `relative`,
                color: `#fff`,
                width: `200px`,
                zIndex: 0,
              }}
            >
              <Box
                sx={{
                  paddingBottom: `21.6%`,
                  transition: `padding-bottom .2s cubic-bezier(.25,.8,.5,1)`,
                  flex: `1 0 0px`,
                }}
              />
              <Box
                sx={{
                  backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAA2CAYAAADuxoTyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjhBRTU4M0VFNTAxMDExRTVBQkY4QjBCMEVDRkQ3QTcxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjhBRTU4M0VGNTAxMDExRTVBQkY4QjBCMEVDRkQ3QTcxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OEFFNTgzRUM1MDEwMTFFNUFCRjhCMEIwRUNGRDdBNzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEFFNTgzRUQ1MDEwMTFFNUFCRjhCMEIwRUNGRDdBNzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5qytgUAAAJX0lEQVR42uxd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")`,
                  backgroundPosition: `center center`,
                  backgroundSize: `cover`,
                  backgroundRepeat: `no-repeat`,
                  zIndex: -1,
                  position: `absolute`,
                  top: 0,
                  left: 0,
                  width: `100%`,
                  height: `100%`,
                }}
              />
              <Box
                sx={{
                  width: `250px`,
                  marginLeft: `-100%`,
                  flex: `1 0 0px`,
                  maxWidth: `100%`,
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            margin: `-12px`,
            marginTop: `12px`,
            display: `flex`,
            justifyContent: `center`,
            flexWrap: `wrap`,
            flex: `1 1 auto`,
          }}
        >
          <Box
            sx={{
              textAlign: `center`,
              flex: [`0 0 100%`, `0 0 auto`],
              maxWidth: `100%`,
              width: [`100%`, `auto`],
              padding: `12px`,
            }}
          >
            <Link
              sx={{
                color: `#ccc`,
                fontSize: `11px`,
                cursor: `pointer`,
                textDecoration: `none`,
                backgroundColor: `transparent`,
              }}
              className={styles.ehl}
            >
              <Image
                alt={`Equal Housing Lender`}
                layout={`fill`}
                src={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA+CAYAAACP1IOOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGNTQ5MjJERkJBOEMxMUUzQjMzQ0MwMEY5OEYyRjUyNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGNTQ5MjJFMEJBOEMxMUUzQjMzQ0MwMEY5OEYyRjUyNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkY1NDkyMkREQkE4QzExRTNCMzNDQzAwRjk4RjJGNTI3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY1NDkyMkRFQkE4QzExRTNCMzNDQzAwRjk4RjJGNTI3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hj57mAAABENJREFUeNrsmktIFVEYx2fMnpoZPUwpSIvotehFGC0s0gp6LrLaREKRtWtR5KYwKlIIXLQpNwU9kNq4EqGICntJD6KooDQLKgtfZEll3en/4X9iGs+9ztw717x2PvhxZ+55fOd/zjfnzDn3mpZlGYPVkoxBbP0lbg6oAh9BCRjTL14lLOPIfFBt9bYOcBSMj6f/eFWcC2qtvu0LqABZiSBuGbhm+bcf4BSYPhDFrQZ1Vuz2E5wHs/+1OBNsBPVW8Bbis7qov8Ulga3gkY/GtoASNraKjfdqtQz3uIpLBtvAsyhEpXqcRSNZHcPfDFLcMLATvApAlGqpqPEpUiJmEyMoanEjwR7w1odjWb9KQVqclg6nSQQVMaI8i0sBe8GHKESlxzjD5YHrPkU2gd0cjLDiUhlKLf9AlGq9vO1TpAzGPuejYFdWyoZ6NXmzOBIHUar1865PkS3U80ecH1Fl8X4nVLDe59IjZpjcz/W1qesCJ8EJ0BIh39QY3+Ol7i9h0kywARwBcz3UZXoduWqPPRyrFXl8Hj2NnN6sJqol8/MxP4d4jOeBaLLLb1aJm8fPdNCeoOJOgVKVuKDsRozlm+MRlkHZMj2h9POEEpRdj7F8GagdqOLyYix/VoelFqfF6dnStuwAtjwDVlxTIo7cgqCn6RhsUtDipoDtekLR4rS4wCeUEHiToFo63F+Y+q8aWlxiiKsBN7nxlAWzAtwDV0AG09PAXrAJjAONXOjF6hR12t/JifVKsAPUgztgETjEunJBJVgDboNbYBZ9zgRPjJ5DLPlPy2RwjPVcBZleFvEsOuhgw5fQqfw5ZifTk+hE8mwB78E28JBO3ZYDiliPCJUj8RlgMTgIXoNUMAJMBPmsq56+xOcwMJ4dMYl1rmEdBfT7wU9YpoBWCsmkc5mBhjryiKinYKvRc+6pMosd8YN55Nxffn9oA6PAL0deuT4DXvCtaK0j7R7flrJZrpUiRfBSr69f0iPdYD979CJYRWdyfHfO6PnRYx+dVNHJCvZ8NfgEdrG+bn63kY2/xLOSCeA4+AaOgk5wASwH69gR7p3CAfAcvGT64XA6VEvBaMcIdHLtm2b0HNYOZwhms9e7OIpdjlEd6VgzP/M6jdejKLSbI9DpWJ8mMPTe8T6DI9zMNtk+vvL+K/NNZZvE9/f/Zp3rNZwQ28YZrFGRv40j6E4rcKQ3sry7nP1dA2c328aCB6DYMfm48xi8Lw/TBimz2TTNB24xfxEKhSyQAwwFkdLs9DLQABYqyuXw2l2ukGWMCHkitUHK33driWYnfsXVa7JsXHbdV3LSsK/7Mil/mqPo9KOKDrdJmUJXG6I+ZigIE7JOs0PztKKRKitkqLU7BBZ46GDJu5BrcLkXce2K0bHjXZXmbIj7569iNjxf0Tj3MzctQh6DeUrow9nBOezEfHeH6F2BFqfFaXFanBanxSWo/RZgAD8Opdz8B33IAAAAAElFTkSuQmCC`}
                objectFit={`contain`}
              />
            </Link>
            <Link
              sx={{
                color: `#ccc`,
                fontSize: `11px`,
                cursor: `pointer`,
                textDecoration: `none`,
                backgroundColor: `transparent`,
                marginLeft: `8px`,
              }}
              className={styles.ncua}
            >
              <Image
                alt={`NCUA`}
                layout={`fill`}
                src={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGMAAAAoCAYAAADqpEQ6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxQzQyMDY2MUJBOEQxMUUzQkJGNTgxN0Q0ODU5Mjc4MCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxQzQyMDY2MkJBOEQxMUUzQkJGNTgxN0Q0ODU5Mjc4MCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFDNDIwNjVGQkE4RDExRTNCQkY1ODE3RDQ4NTkyNzgwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjFDNDIwNjYwQkE4RDExRTNCQkY1ODE3RDQ4NTkyNzgwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ZjuaLQAAB9ZJREFUeNrsmwlsVVUQ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`}
                objectFit={`contain`}
                style={{
                  height: `200px`,
                }}
              />
            </Link>
          </Box>
          <Box
            sx={{
              maxWidth: `100%`,
              flexGrow: 1,
              flexBasis: 0,
              width: `100%`,
              padding: `12px`,
            }}
          >
            <Typography
              component={`p`}
              sx={{
                marginBottom: `16px`,
                fontSize: `11px`,
              }}
            >
              ©<Box component={`span`}>2022 </Box>
              America First Credit Union. All Rights Reserved. America First
              Federal Credit Union does business as (DBA) America First Credit
              Union. Unauthorized account access or use is not permitted and may
              constitute a crime punishable by law. America First Credit Union
              respects your privacy. Please view our{" "}
              <Link
                sx={{
                  color: `#fff`,
                  cursor: `pointer`,
                  textDecoration: `none`,
                  backgroundColor: `transparent`,
                  fontSize: `11px`,
                  ":hover": {
                    color: `#ccc`,
                    fontSize: `11px`,
                    textDecoration: `underline`,
                  },
                }}
              >
                Privacy Policy
              </Link>
              ,{" "}
              <Link
                sx={{
                  color: `#fff`,
                  cursor: `pointer`,
                  textDecoration: `none`,
                  backgroundColor: `transparent`,
                  fontSize: `11px`,
                  ":hover": {
                    color: `#ccc`,
                    fontSize: `11px`,
                    textDecoration: `underline`,
                  },
                }}
              >
                Email Opt Out Procedure{" "}
              </Link>
              and{" "}
              <Link
                sx={{
                  color: `#fff`,
                  cursor: `pointer`,
                  textDecoration: `none`,
                  backgroundColor: `transparent`,
                  fontSize: `11px`,
                  ":hover": {
                    color: `#ccc`,
                    fontSize: `11px`,
                    textDecoration: `underline`,
                  },
                }}
              >
                Fraud Alert Text/SMS Notification Terms and Conditions{" "}
              </Link>
              . This credit union is federally insured by the National Credit
              Union Administration.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
