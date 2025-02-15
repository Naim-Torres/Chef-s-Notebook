import mysql from 'mysql2/promise'
import 'dotenv/config'

class Database {
    constructor(){
        if(Database.instance){
            return Database.instance
        }
        this.connection = null
        Database.instance = this
    }

    async connect(){
        if (!this.connection) {
            this.connection = await mysql.createConnection({
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                database: process.env.DB_NAME,
            })
            console.log('DB connection established')
        }
        return this.connection;
    }
}

const db = new Database()
export default db