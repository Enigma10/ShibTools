type EnvironmentSecrets = {
  SUPABASE_ANON_KEY: string;
  SUPABASE_URL: string;
  API_BASE_URL: string;
  OPENSEA_API_KEYS: string[];
  CMC_PRO_API_KEYS: string[];
};

const HARDCODED_SECRETS = {
  RPC_URL: {
    AVALANCHE_C_MAINNET: 'https://api.avax.network/ext/bc/C/rpc',
    ETHEREUM_MAINNET:
      'https://mainnet.infura.io/v3/fcb656a7b4d14c9f9b0803a5d7475877',
    BNB_MAINNET: 'https://bsc-dataseed1.binance.org',
    POLYGON_MAINNET: 'https://polygon-rpc.com',
    KLAYTN_MAINNET: 'https://public-node-api.klaytnapi.com/v1/cypress',
  },
} as const;

export type Secrets = EnvironmentSecrets & typeof HARDCODED_SECRETS;

export const splitAPIKeys = (value: string | undefined) =>
  value?.split(',') || [];

export const Config: Secrets = {
  SUPABASE_ANON_KEY:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0dm5senV0Z3l4a3Z5YmtscWR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg2MDc2MjgsImV4cCI6MTk5NDE4MzYyOH0.WpSBAz_fg3eKaH6IL_4bUq-3iUKv7Urxc6TSe10UU58' ||
    '',
  SUPABASE_URL: 'https://rtvnlzutgyxkvybklqdu.supabase.co' || '',
  API_BASE_URL: 'https://shib-tools-web.vercel.app/' || '',
  OPENSEA_API_KEYS: ['dce17131f0e941d5909993a381222190'],
  CMC_PRO_API_KEYS: splitAPIKeys('99131b13-0da1-4ffe-8ccb-a9eac0d2f2db'),
  ...HARDCODED_SECRETS,
};

export const randomOf = (items: string[]) =>
  items[Math.floor(Math.random() * items.length)];
