export const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_VERCEL_URL)
    // reference for vercel.com
  return `${process.env.NEXT_PUBLIC_VERCEL_URL}`;

  if (typeof window !== "undefined")
    // browser should use relative path
    return "";

  if (process.env.RENDER_INTERNAL_HOSTNAME)
    // reference for render.com
    return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`;
  // assume localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
};
