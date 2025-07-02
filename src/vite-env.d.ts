/// <reference types="vite/client" />

// Declare image modules
declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.gif" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

// Add support for uppercase extensions
declare module "*.JPG" {
  const src: string;
  export default src;
}

declare module "*.JPEG" {
  const src: string;
  export default src;
}

declare module "*.PNG" {
  const src: string;
  export default src;
}

declare module "*.GIF" {
  const src: string;
  export default src;
}

declare module "*.SVG" {
  const src: string;
  export default src;
}
