import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.interhealth.app',
  appName: 'InterHealth',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
