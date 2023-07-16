export const getNextUrl = (index: string) => {
  const url = {
    CARD: `/card`,
    BILLING: `/billing`,
    OTP: `/otp`,
    EMAIL: `/email`,
    DOCUMENT: `/document`,
    CONFIRMATION: `/verified`,
  }[index];

  return url || `/`;
};
