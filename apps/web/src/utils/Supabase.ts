import { createClient } from '@supabase/supabase-js';

import { Config } from './Config';

export const Supabase = createClient(
  'https://sqfsuxnefixhvceiriab.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxZnN1eG5lZml4aHZjZWlyaWFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg1NDQwNzEsImV4cCI6MTk5NDEyMDA3MX0.SA0Up-jmyWw6-s0eKzapSUrY0AsGZ1TTHWhspM31PVM',
);
