/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Optional form endpoint (e.g. Formspree) that receives quotation requests as JSON. */
  readonly VITE_ENQUIRY_ENDPOINT?: string;
}
