export default function (context) {
  // If the user is not authenticated

  if (process.client) {
    const { route, $supabase } = context
    let avoidPaths = ['', '/login', '/signup']
    avoidPaths.forEach(path => {
      avoidPaths.push(path + '/')
    })

    if (avoidPaths.includes(route.path)) return

    const user = $supabase.auth.currentUser

    if (!user) {
      return context.redirect('/login')
    }
  }
}
