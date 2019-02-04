module.exports = {
    // By Roni
    //To login to mlab.com website use the following username, and password.
    //Also becareful to not tamper with the database, because we dont have a backup
    //username: GEX2018
    //Password: TeamGEX2018
    database: process.env.DB_HOST,
    secret: process.env.SECRET_KEY
}