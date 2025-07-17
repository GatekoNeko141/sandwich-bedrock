import axios from 'axios';

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const vercelblob = axios.create({
  baseURL: `https://${process.env.VERCELBLOB_BASE_KEY}.public.blob.vercel-storage.com`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { http, vercelblob };