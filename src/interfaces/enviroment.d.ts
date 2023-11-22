export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SECRET: string;
      API_TOKEN: string;
      MONGO_URI: string;
    }
  }
}
