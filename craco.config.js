const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@env': path.resolve(__dirname, 'src/enviroments/'),
      '@scss': path.resolve(__dirname, 'src/scss/'),
      '@app': path.resolve(__dirname, 'src/app/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
    },
  },
};
