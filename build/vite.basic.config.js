import path from 'path';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import svgLoader from 'vite-svg-loader';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import Markdown from 'vite-plugin-md';

export const silenceSomeSassDeprecationWarnings = {
  verbose: true,
  logger: {
    warn(message, options) {
      const { stderr } = process;
      const span = options.span ?? undefined;
      const stack =
        (options.stack === 'null' ? undefined : options.stack) ?? undefined;

      if (options.deprecation) {
        if (
          message.startsWith(
            'Using / for division outside of calc() is deprecated'
          )
        ) {
          // silences above deprecation warning
          return;
        }
        stderr.write('DEPRECATION ');
      }
      stderr.write(`WARNING: ${message}\n`);

      if (span !== undefined) {
        // output the snippet that is causing this warning
        stderr.write(`\n"${span.text}"\n`);
      }

      if (stack !== undefined) {
        // indent each line of the stack
        stderr.write(
          `    ${stack.toString().trimEnd().replace(/\n/gm, '\n    ')}\n`
        );
      }

      stderr.write('\n');
    },
  },
};

export const basicConfig = {
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, '../src')}`,
      packages: path.resolve(__dirname, '../packages'),
      packagesQuaEle:path.resolve(__dirname, '../packagesQuaEle'),
    },
  },
  css: {
    preprocessorOptions: {
      sass: {
        ...silenceSomeSassDeprecationWarnings,
      },
      scss: {
        additionalData: `@use "packagesQuaEle/elementPlusInit.scss" as *;`,
      },
    },
  },
  plugins: [
    vue({ template: { transformAssetUrls }, include: [/\.vue$/, /\.md$/] }),
    quasar({
      sassVariables: 'packagesQuaEle/quasar-variables.scss',
    }),
    Components(),
    svgLoader(),
    Markdown(),
  ],
};


