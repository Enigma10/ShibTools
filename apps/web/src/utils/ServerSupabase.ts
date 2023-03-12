import { createClient } from '@supabase/supabase-js';

import { Config } from './Config';

export const getServerSupabase = () =>
  createClient(
    'https://sqfsuxnefixhvceiriab.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxZnN1eG5lZml4aHZjZWlyaWFiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3ODU0NDA3MSwiZXhwIjoxOTk0MTIwMDcxfQ.dQVpIID8m5qeBr78nHJCwD0dKpghVQZgngCWjfhUxHs' ||
      '',
  );
