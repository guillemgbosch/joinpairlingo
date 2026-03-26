/**
 * Sidebar Initialization - Runs Once Per Session
 * Keeps sidebar persistent across page navigation
 */

let redirected = false;

window.supabaseClient.auth.onAuthStateChange(async (event, session) => {
  if (redirected) return;
  
  if (event === 'INITIAL_SESSION') {
    if (!session) {
      redirected = true;
      window.location.href = 'register.html';
      return;
    }
    
    const userId = session.user.id;
    
    // Fetch user profile
    const { data: profile } = await window.supabaseClient
      .from('users')
      .select('username, first_name, last_name, plan, photo_url, avatar_emoji')
      .eq('id', userId)
      .single();
    
    // Update sidebar with user info
    const displayName = profile?.first_name || profile?.username || session.user.email.split('@')[0];
    const plan = (profile?.plan || 'free').toLowerCase();
    
    // Update DOM elements
    const sidebarName = document.getElementById('sidebar-name');
    const sidebarPlan = document.getElementById('sidebar-plan');
    const sidebarAvatar = document.getElementById('sidebar-avatar');
    
    if (sidebarName) sidebarName.textContent = displayName;
    if (sidebarPlan) {
      sidebarPlan.textContent = 
        plan === 'premium' ? '⭐ Premium' : 
        plan === 'teacher' ? '🎓 Teacher' : 
        'Free plan';
    }
    
    if (sidebarAvatar) {
      if (profile?.photo_url) {
        sidebarAvatar.innerHTML = `<img src="${profile.photo_url}" alt="avatar">`;
      } else if (profile?.avatar_emoji) {
        sidebarAvatar.textContent = profile.avatar_emoji;
      }
    }
    
    // Set active nav item based on current page
    updateActiveNavItem();
  }
  
  if (event === 'SIGNED_OUT') {
    redirected = true;
    window.location.href = 'register.html';
  }
});

function updateActiveNavItem() {
  const currentPage = window.location.pathname.split('/').pop() || 'dashboard.html';
  const navItems = document.querySelectorAll('.nav-item');
  
  navItems.forEach(item => {
    const href = item.getAttribute('href');
    if (href && href.includes(currentPage)) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// Update active item when page loads
document.addEventListener('DOMContentLoaded', updateActiveNavItem);
