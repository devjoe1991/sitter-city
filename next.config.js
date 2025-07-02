/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Enable server components
    serverComponentsExternalPackages: ['@supabase/ssr'],
  },
};

module.exports = nextConfig; 