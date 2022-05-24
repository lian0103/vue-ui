import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import svgLoader from 'vite-svg-loader';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';

const silenceSomeSassDeprecationWarnings = {
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

const libTarget = {
  GT: 'src/components/indexGT.js',
  Element: 'src/components/indexElement.js',
  Quasar: 'src/components/indexQuasar.js',
};

// https://vitejs.dev/config/
export default ({ mode }) => {
  const isGtMode = mode == 'GT';

  let config = {
    build: {
      lib: {
        entry: path.resolve(__dirname, libTarget[mode] || ''),
        name: 'gt-ui',
        fileName: (format) =>
          isGtMode ? `gt-ui.${format}.js` : `gt-ui-${mode}.${format}.js`,
      },
      outDir: `./dist/${mode}`,
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue',
          },
        },
      },
    },
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`,
        ...(mode === 'production' && {
          'vue-types': 'vue-types/shim',
        }),
      },
    },
    css: {
      preprocessorOptions: {
        sass: {
          ...silenceSomeSassDeprecationWarnings,
        },
        scss: {
          additionalData: `@use "~/assets/elementPlusInit.scss" as *;`,
        },
      },
    },
    plugins: [
      vue({ template: { transformAssetUrls } }),
      quasar({
        sassVariables: 'src/assets/quasar-variables.scss',
      }),
      AutoImport({
        resolvers: [
          ElementPlusResolver({
            importStyle: 'sass',
            // directives: true,
            // version: "2.1.5",
          }),
        ],
      }),
      Components({
        resolvers: [
          ElementPlusResolver({
            importStyle: 'sass',
            // directives: true,
            // version: "2.1.5",
          }),
        ],
      }),
      svgLoader(),
    ],
    server: {
      host: '0.0.0.0',
      port: 3000,
    },
  };

  if (mode === 'demo') {
    config.base = '/vue-ui/';
    config.build = {
      outDir: './demo',
    };
    console.log('config.build', config.build);
  }

  return defineConfig(config);
};
