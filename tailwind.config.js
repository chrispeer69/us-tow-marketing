export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        // US Tow Grade — "Graphite + Electric" brand palette
        graphite: '#14181F',   // base background
        panel: '#1B212C',      // cards / surfaces
        steel: '#232B38',      // borders / hover surfaces
        alliance: '#1B3A6B',   // deep Alliance blue
        'alliance-lt': '#2A5599',
        cyan: '#19D3E0',       // AI-Connect electric accent
        gold: '#F5B324'        // Grade-A highlight / CTA
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(25, 211, 224, 0.45)',
        'glow-sm': '0 0 24px -10px rgba(25, 211, 224, 0.35)',
        'glow-gold': '0 0 32px -6px rgba(245, 179, 36, 0.5)'
      }
    }
  }
}
