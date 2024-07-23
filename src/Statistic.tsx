let url = "http://localhost:3000/api";

if (import.meta.env.VITE_ENV === "development")
  url = "http://localhost:3000/api";

export { url };
