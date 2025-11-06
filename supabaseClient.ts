// supabaseClient.ts
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://wirzcfgaqkehrwsqjezs.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpcnpjZmdhcWtlaHJ3c3FqZXpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzOTAyMjMsImV4cCI6MjA3Nzk2NjIyM30.k0hXBZfRQFH4WSYLTYplepGFU7T1vyip-uVlkA0mgn4";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);