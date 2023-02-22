export const isDev = process.env.NODE_ENV !== "production";

export const server = isDev
  ? process.env.NEXT_BASE_URL_LOCAL
  : process.env.NEXT_BASE_URL_PROD;
