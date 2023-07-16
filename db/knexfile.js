module.exports = {
  development: {
    client: "mysql",
    // connection:  {
    //   database: "Greet",
    //   user: "postgres",
    //   password: "123",
    // },
    // connection:  {
    //   host: process.env.DB_HOST || 'db4free.net',
    //   port: process.env.DB_PORT || 3306,
    //   user: process.env.DB_USER || 'cgreet7862',
    //   password: process.env.DB_PASSWORD || 'cgreet7862',
    //   database: process.env.DB_DATABASE || 'cgreet7862'
    // },

    //client database
    // connection: {
    //   host: "45.32.217.200",
    //   port: 3306,
    //   user: "ykfmpfzwan",
    //   password: "EQuum6HYfT",
    //   database: "ykfmpfzwan",
    // },

    //render database
    connection: {
      host: "db4free.net",
      port: 3306,
      user: "sysadmin23",
      password: "admin123",
      database: "nestjsdb_2023",
    },
    pool: {
      min: 2,
      max: 50,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
