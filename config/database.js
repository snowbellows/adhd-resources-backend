module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'adhd_resources'),
        username: env('DATABASE_USERNAME', 'adhdresources'),
        password: env('DATABASE_PASSWORD', '%BA$7FQLdSeJj@'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
