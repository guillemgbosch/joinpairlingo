const { createClient } = supabase;
window.supabaseClient = createClient(
  'https://kzwptgbhcddebxdfnsqx.supabase.co',
  'sb_publishable_Ol76aSvGrme2cqzHxyao8A_jPThO92Y'
);

window.logout = async function() {
  await window.supabaseClient.auth.signOut();
  window.location.href = 'register.html';
};