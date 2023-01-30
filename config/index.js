const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? process.env.NEXT_BASE_URL_LOCAL : process.env.NEXT_BASE_URL_PROD;
