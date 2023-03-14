import { NextApiResponse } from 'next';

type APIHandler = <T extends NextApiResponse = NextApiResponse>(
  req: any,
  res: T,
) => void | Promise<void>;

const ALLOWED_ORIGINS = [
  'https://shib-tools-web.vercel.app',
  'https://shib.tools',
];

export const withCORS =
  (apiHandler: APIHandler): APIHandler =>
  async (req, res) => {
    const origin = req.headers.origin || '';
    if (
      ALLOWED_ORIGINS.includes(origin) ||
      origin.endsWith('shib.tools') ||
      origin.endsWith('shib-tools-web.vercel.app')
    ) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    }

    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET,OPTIONS,PATCH,DELETE,POST,PUT,HEAD',
    );
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, x-supabase-auth, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
    );
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }
    return await apiHandler(req, res);
  };
