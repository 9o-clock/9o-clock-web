const path = require('path');

module.exports = {
    webpack: {
        alias: {
            // '@/': path.resolve(__dirname, 'src/'),
            '@/types': path.resolve(__dirname, 'src/@types/'),
            '@/components': path.resolve(__dirname, 'src/components/'),
        }
    },
    jest: {
        configure: {
            moduleNameMapper: {
                // '^@/(.*)$': '<rootDir>/src$1',
                '^@/types(.*)$': '<rootDir>/src/@types$1',
                '^@/components(.*)$': '<rootDir>/src/components$1',
            }
        }
    }
};
