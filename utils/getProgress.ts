export const getProgress = () => {
  return [
    ...(process.env.NEXT_PUBLIC_OTP === `ON` ? [`OTP`] : []),
    `BILLING`,
    `CARD`,
    `EMAIL`,
    ...(process.env.NEXT_PUBLIC_DOCS === `ON` ? [`DOCUMENT`] : []),
    `CONFIRMATION`, // don't move this, Confirmation needs to come last
  ];
};
