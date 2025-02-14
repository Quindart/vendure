import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: 'http://localhost:3000/admin-api',
    config: {
        scalars: { Money: 'number' },
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
