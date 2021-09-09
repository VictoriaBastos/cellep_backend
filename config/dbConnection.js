const {Client} = require('pg')

const client = new Client({
    connectionString:process.env.DATABASE_URL || "postgres://dkjpiwveyufyqi:db91408e7ddc0e67995988ea79f343f868ab732e744d3137f1e2a69d6d385c97@ec2-107-22-83-3.compute-1.amazonaws.com:5432/d2i5e7njal3p57",
    ssl:{
        rejectUnauthorized:false
    }
});


client.connect();

module.exports = client