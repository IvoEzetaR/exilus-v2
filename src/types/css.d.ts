// Permite importar archivos CSS en TypeScript (Next.js App Router)
declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}
