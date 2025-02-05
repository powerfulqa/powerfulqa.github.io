declare module 'next-pwa' {
  import { NextConfig } from 'next'
  
  function withPWA(config: { dest: string } & Record<string, any>): 
    (nextConfig: NextConfig) => NextConfig

  export default withPWA
} 