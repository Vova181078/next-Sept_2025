'use server'
import sql from "better-sqlite3";
import {revalidatePath} from "next/cache";



const db = sql('cars.db');


const saveCar  = async (formData:FormData) => {

    const titleValue = formData.get('title');
    db.prepare(`insert into cars(price) values (?)`)
        .run(titleValue);
    revalidatePath('/')

    type Car = {brand: string, price: number, year: number};
    const getCars = async ():Promise<Car[]> => {
        return  db.prepare<Car[]>('select * from cars').all() as Car[];
    }





};

export default saveCar;