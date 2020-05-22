module.exports = {
  scripts: {
    'build:js': '@snowpack/plugin-babel',
    'build:css': 'postcss',
    'mount:static': 'mount static --to /',
    'mount:src': 'mount assets --to /',
    'mount:_site': 'mount _output --to /',
    'mount:web_modules': 'mount web_modules',
    'run:11ty': 'eleventy',
    'run:11ty::watch': '$1 --watch',
  },
  plugins: ['@snowpack/plugin-babel', '@snowpack/plugin-parcel'],
  installOptions: {},
  devOptions: {
    out: 'build',
  },
}
