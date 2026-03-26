/**
 * Supabase Configuration - CENTRALIZED
 * This is the single source of truth for authentication
 */

// Supabase Configuration
const SUPABASE_URL = 'https://kzwptgbhcddebxdfnsqx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6d3B0Z2JoY2RkZWJ4ZGZuc3F4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4Mjk0NzksImV4cCI6MjA4OTQwNTQ3OX0.9ulqg6eSaH2ONzn4yD3wi6ymQ-aShjx_7nMJuOt3Rps';

// Initialize Supabase Client - Available globally
window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/**
 * Validation Functions
 */
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  return password.length >= 8;
}

function sanitize(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Authentication Functions
 */
async function checkAuthStatus() {
  try {
    const { data: { session } } = await window.supabaseClient.auth.getSession();
    return session ? session.user : null;
  } catch (error) {
    console.error('Auth check failed:', error);
    return null;
  }
}

async function logout() {
  try {
    await window.supabaseClient.auth.signOut();
    window.location.href = 'register.html';
  } catch (error) {
    console.error('Logout failed:', error);
  }
}

async function getUserProfile(userId) {
  try {
    const { data, error } = await window.supabaseClient
      .from('users')
      .select('*')
      .eq('id', userId)
      .single();
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Profile fetch failed:', error);
    return null;
  }
}

/**
 * Auto-check auth on page load
 */
window.supabaseClient.auth.onAuthStateChange((event, session) => {
  if (event === 'SIGNED_OUT') {
    window.location.href = 'register.html';
  }
});
