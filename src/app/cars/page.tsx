import React from 'react';
import {getCars} from "@/app/db/db";

const Page = async () => {

    const cars = await getCars();

    return (
        <div>
            {
                cars.map((car) => (<div key={car.id}>{car.brand} {car.price} {car.year}  </div>))
            }


        </div>
    );
};

export default Page;