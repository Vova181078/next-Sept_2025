

import React from 'react';
import Form from "next/form";
import {addCars} from "@/app/db/db";


const FormComponent = () => {
    return (
        <div>
            <Form action={addCars}>
                <input type="text" name = {'brand'}/>
                <input type="text" name = {'price'}/>
                <input type="text" name = {'year'}/>
                <button>save</button>
            </Form>
        </div>
    );
};

export default FormComponent;