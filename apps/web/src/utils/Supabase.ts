import { createClient } from '@supabase/supabase-js';

import { Config } from './Config';

export const Supabase = createClient(
  'https://rtvnlzutgyxkvybklqdu.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0dm5senV0Z3l4a3Z5YmtscWR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg2MDc2MjgsImV4cCI6MTk5NDE4MzYyOH0.WpSBAz_fg3eKaH6IL_4bUq-3iUKv7Urxc6TSe10UU58',
);
