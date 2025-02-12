import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    // This assumes your server is running on the standard port
    // and with the default admin API path. Adjust accordingly.
    schema: 'http://localhost:3000/admin-api',
    config: {
        // This tells codegen that the `Money` scalar is a number
        scalars: { Money: 'number' },
        // This ensures generated enums do not conflict with the built-in types.
        namingConvention: { enumValues: 'keep' },
    },
    generates: {
        './test-plugins/contact/gql/generated.ts': { plugins: ['typescript'] },
        './test-plugins/contact/ui/gql/': {
            preset: 'client',
            documents: './test-plugins/contact/ui/**/*.ts',
            presetConfig: {
                fragmentMasking: false,
            },
        },
    },
};

export default config;
