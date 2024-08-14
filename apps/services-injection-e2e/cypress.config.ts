import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run services-injection:serve:development',
        production: 'nx run services-injection:serve:production',
      },
      ciWebServerCommand: 'nx run services-injection:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
