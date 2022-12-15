export default function (context) {
  // If the user is authenticated
  if (process.client) {
    if (context.$supabase.auth.currentUser) {
      return context.redirect('/dashboard')
    }
  }
}
