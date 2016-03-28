console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`database: ${process.env[`${process.env.NODE_ENV}_database`]}`);
