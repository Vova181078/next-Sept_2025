import sql from "better-sqlite3"

const db = sql('cars.db');

const dummyCars = [

    {
        "id": 14487,
        "brand": "BMW",
        "price": 20000,
        "year": 2022
    },
    {
        "id": 14515,
        "brand": "Infinity",
        "price": 10000,
        "year": 2022
    },
    {
        "id": 14516,
        "brand": "Mustang",
        "price": 10000,
        "year": 2010
    },
    {
        "id": 14517,
        "brand": "Ford",
        "price": 5000,
        "year": 2000
    },
    {
        "id": 14518,
        "brand": "Ponda",
        "price": 123456,
        "year": 2014
    },
    {
        "id": 14521,
        "brand": "porsheee",
        "price": 123133,
        "year": 2000
    },
    {
        "id": 14522,
        "brand": "TestTestTest",
        "price": 1000,
        "year": 2020
    },
    {
        "id": 14523,
        "brand": "FordTest",
        "price": 8000,
        "year": 2015
    },
    {
        "id": 14524,
        "brand": "zazTest",
        "price": 9000,
        "year": 2000
    },
    {
        "id": 14525,
        "brand": "kia",
        "price": 2222,
        "year": 2010
    },
    {
        "id": 14526,
        "brand": "Жигули",
        "price": 500,
        "year": 1995
    },
    {
        "id": 14527,
        "brand": "Volvo",
        "price": 2323,
        "year": 2022
    },
    {
        "id": 14528,
        "brand": "Ford",
        "price": 3030,
        "year": 2020
    },
    {
        "id": 14529,
        "brand": "Жигулятор",
        "price": 562,
        "year": 1996
    },
    {
        "id": 14530,
        "brand": "KiaCeedd",
        "price": 50000,
        "year": 2024
    },
    {
        "id": 14531,
        "brand": "Ford",
        "price": 3333,
        "year": 1990
    },
    {
        "id": 14532,
        "brand": "Volvo",
        "price": 2000,
        "year": 2022
    },
    {
        "id": 14533,
        "brand": "Ford",
        "price": 4444,
        "year": 2020
    },
    {
        "id": 14534,
        "brand": "Reng",
        "price": 6666,
        "year": 2021
    },
    {
        "id": 14535,
        "brand": "Ford",
        "price": 4848,
        "year": 2020
    },
    {
        "id": 14536,
        "brand": "Ford",
        "price": 4848,
        "year": 2020
    },
    {
        "id": 14537,
        "brand": "Ford",
        "price": 4848,
        "year": 2020
    },
    {
        "id": 14538,
        "brand": "Ford",
        "price": 4848,
        "year": 2020
    },
    {
        "id": 14539,
        "brand": "Reng",
        "price": 1111,
        "year": 2020
    },
    {
        "id": 14540,
        "brand": "Reng",
        "price": 1111,
        "year": 2020
    },
    {
        "id": 14541,
        "brand": "Reng",
        "price": 1111,
        "year": 2020
    },
    {
        "id": 14542,
        "brand": "Reng",
        "price": 1111,
        "year": 2020
    },
    {
        "id": 14543,
        "brand": "Reng",
        "price": 1111,
        "year": 2020
    },
    {
        "id": 14544,
        "brand": "Reng",
        "price": 1111,
        "year": 2020
    },
    {
        "id": 14545,
        "brand": "Reng",
        "price": 1111,
        "year": 2020
    },
    {
        "id": 14546,
        "brand": "Reng",
        "price": 1111,
        "year": 2020
    },
    {
        "id": 14547,
        "brand": "Set",
        "price": 2222,
        "year": 2020
    },
    {
        "id": 14548,
        "brand": "Set",
        "price": 2222,
        "year": 2020
    },
    {
        "id": 14549,
        "brand": "Set",
        "price": 2222,
        "year": 2020
    },
    {
        "id": 14550,
        "brand": "Bar",
        "price": 6669,
        "year": 2023
    },
    {
        "id": 14551,
        "brand": "Bar",
        "price": 6669,
        "year": 2023
    },
    {
        "id": 14552,
        "brand": "Ford",
        "price": 2222,
        "year": 2020
    },
    {
        "id": 14553,
        "brand": "Ford",
        "price": 2222,
        "year": 2020
    },
    {
        "id": 14554,
        "brand": "bmw",
        "price": 10000,
        "year": 2000
    },
    {
        "id": 14555,
        "brand": "Passat",
        "price": 20150,
        "year": 2022
    },
    {
        "id": 14556,
        "brand": "jeep",
        "price": 15000,
        "year": 2000
    },
    {
        "id": 14557,
        "brand": "Passat",
        "price": 18000,
        "year": 2020
    },
    {
        "id": 14558,
        "brand": "Merсedes",
        "price": 5621,
        "year": 2002
    },
    {
        "id": 14559,
        "brand": "BARACUDA",
        "price": 25000,
        "year": 2015
    },
    {
        "id": 14560,
        "brand": "Skoda",
        "price": 2000,
        "year": 2004
    },
    {
        "id": 14561,
        "brand": "Audi",
        "price": 20000,
        "year": 2018
    },
    {
        "id": 14562,
        "brand": "Mersedes",
        "price": 15000,
        "year": 2015
    },
    {
        "id": 14563,
        "brand": "Skoda",
        "price": 3700,
        "year": 2005
    },
    {
        "id": 14564,
        "brand": "BMW",
        "price": 5120,
        "year": 2011
    },
    {
        "id": 14565,
        "brand": "BRABUS",
        "price": 99111,
        "year": 2023
    },
    {
        "id": 14566,
        "brand": "ISUZU",
        "price": 98777,
        "year": 2022
    },
    {
        "id": 14567,
        "brand": "LEXUS",
        "price": 99999,
        "year": 2020
    },
    {
        "id": 14568,
        "brand": "CITROEN",
        "price": 875,
        "year": 1991
    },
    {
        "id": 14569,
        "brand": "Honda",
        "price": 15000,
        "year": 2019
    },
    {
        "id": 14570,
        "brand": "Fiat",
        "price": 1000,
        "year": 1996
    },
    {
        "id": 14571,
        "brand": "h",
        "price": 10,
        "year": 2022
    },
    {
        "id": 14572,
        "brand": "ZAZ",
        "price": 1200,
        "year": 1996
    },
    {
        "id": 14573,
        "brand": "MAZDA",
        "price": 2500,
        "year": 2001
    },
    {
        "id": 14574,
        "brand": "Ретро",
        "price": 1254,
        "year": 2024
    },
    {
        "id": 14575,
        "brand": "сприте",
        "price": 20,
        "year": 2020
    }
]

db.prepare(`
    CREATE TABLE IF NOT EXISTS cars
    (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        brand TEXT,
        price INTEGER,
        year INTEGER
        
      
        
    )
`).run();

async function initData() {
    const stmt = db.prepare(`
        INSERT INTO cars
        VALUES (null,
                @brand,
                @price,
                @year)
    `);

    for (const car of dummyCars) {
        stmt.run(car);
    }
}

initData();
