/// <reference types="vite/client" />

interface ViteTypeOptions {
  strictImportMetaEnv: true;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
