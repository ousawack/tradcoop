import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

// Better put your these secret keys in .env file
export const supabase = createClient("https://fuixvtusamlsjdmreewh.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1aXh2dHVzYW1sc2pkbXJlZXdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQxMzU2ODksImV4cCI6MTk3OTcxMTY4OX0.pfbucCn350IZY5cYKRr_GT6hbJFTNNvaEruDweAsb9Q", {
  localStorage: AsyncStorage as any,
  detectSessionInUrl: false // Prevents Supabase from evaluating window.location.href, breaking mobile
});
