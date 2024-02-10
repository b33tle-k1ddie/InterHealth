import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.interhealth',
  appName: 'interhealth',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
