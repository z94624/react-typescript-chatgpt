/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OPENAI_APIKEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
