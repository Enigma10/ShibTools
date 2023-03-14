import { createClient } from '@supabase/supabase-js';

export const ServerSupabase = createClient(
  'https://rtvnlzutgyxkvybklqdu.supabase.co' || '',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0dm5senV0Z3l4a3Z5YmtscWR1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3ODYwNzYyOCwiZXhwIjoxOTk0MTgzNjI4fQ.KhFVbOdhNmTh5AwezRaTqsm18nwKs_6X9_gfoc3uGhI' ||
    '',
  f,
);
