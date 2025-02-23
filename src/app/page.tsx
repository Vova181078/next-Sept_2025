

import Form from "next/form";

import saveCar from "@/service-action/saveAction";
import {getCars} from "@/app/db/db";



export default async function Home() {

    const carsArray = await getCars();

  return (
    <div>
        <Form action={saveCar}>
          <input type="text" name="brand" placeholder="brand"/>
          <input type="text" name="price" placeholder="price"/>
          <input type="text" name="year" placeholder="year"/>
          <button>send</button>

        </Form>

        <div>
            {
                carsArray.map((car) => (<div key={car.id}>{car.brand} {car.year} {car.price} </div>))
            }
        </div>

    </div>
)
}
