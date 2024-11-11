import { DataSource } from "typeorm"

export const databaseProvider=[
    {
        provide: 'DATABASE_CONNECTION',
        useFactory:()=>{
            const dataSourse = new DataSource({
                type:'postgres',
                host:'localhost',
                port: 5432,
                username:'postgres',
                password:'12345',
                database:'back_nest_angular' 
            });
            return dataSourse.initialize();
        }
    }
]