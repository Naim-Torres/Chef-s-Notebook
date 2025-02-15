import { Connection } from 'mysql2/promise'

declare class Database {
    connection: Connection | null
    static instance: Database
    constructor()
    connect(): Promise<Connection>
}

declare const db: Database
export default db