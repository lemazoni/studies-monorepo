import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run changes-detection:serve:development',
        production: 'nx run changes-detection:serve:production',
      },
      ciWebServerCommand: 'nx run changes-detection:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
