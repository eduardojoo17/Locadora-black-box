declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    DB_TYPE: string;
    DB_HOST: string;
    DB_PORT: string;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_DATABASE: string;
    JWT_SECRET: string;
  }
}
