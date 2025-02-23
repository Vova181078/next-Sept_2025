'use server';

import sql from "better-sqlite3";
import {ICars} from "@/models/types.db";
import {revalidatePath} from "next/cache";

const db = sql('cars.db');

const getCars = async (): Promise<ICars[]> => {
    return db.prepare<ICars[]>('select * from cars').all() as ICars[];
}

const addCars = async (formData: FormData): Promise<void> => {
    db.prepare(`
    insert into cars (brand,price,year)
    values (?,?,?)
    `)
        .run(formData.get('brand'), formData.get('price'), formData.get('year'))

    revalidatePath('/')
}

export {
    getCars,
    addCars
};