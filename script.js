// // задание показать только те машины тем кому не больше двух лет
/*let cars = [{
    model: 'cobalt',
    company: 'general motors',
    engine: 1.5,
    price: 15000,
    beatan: true,
    year: 2022,
    mileage: 13000,
    tech_passport: {
        date: 2022,
        exp_date: 2032,
    }
},
{
    model: "malibu",
    company: "general motors",
    color: "dry asphalt",
    engine: 2.4,
    price: 30000,
    beaten: false,
    year: 2022,
    mileage: 1000,
    tech_passport: {
        date: 2022,
        exp_date: 2032,
    }
},
{
    model: "tracker",
    company: "general motors",
    color: "black",
    engine: "2.2",
    price: 22000,
    beaten: false,
    year: 2021,
    mileage: 2000,
    tech_passport: {
        date: 2021,
        exp_date: 3031
    }
},
{
    model: "gentra",
    company: "general motors",
    color: "black",
    engine: 1.5,
    price: 17000,
    beaten: false,
    year: 2021,
    mileage: 6000,
    tech_passport: {
        date: 2021,
        exp_date: 2031,
    }
},
{
    model: 'Damas',
    company: 'Chevrolet',
    color: 'White',
    engine: 2.4,
    price: 10000,
    beaten: false,
    year: 2023,
    mileage: 100,
    tech_pasport: {
        date: 2023,
        exp_date: 2033
    }
},
{
    model: "Spark",
    company: "general motors",
    color: "dirtygreen",
    engine: 1.250,
    price: 7000,
    beaten: true,
    year: 2008,
    mileage: 328000,
    tech_passport: {
        date: 2008,
        exp_date: 2023,
    }
},
{
    model: "Labo",
    company: "GM ",
    color: "white",
    engine: 0.8,
    price: 10000,
    beaten: false,
    year: 2023,
    mileage: 0,
    tech_passport: {
        date: 2023,
        exp_date: 2033,
    }
},
{
    model: "tico",
    company: "daewoo",
    color: "black",
    engine: 1.5,
    price: 10000,
    beaten: true,
    year: 2010,
    mileage: 1000,
    tech_passport: {
        date: 2022,
        exp_date: 2025,
    }
}, {
    model: 'traverse',
    company: 'chevrolet',
    color: 'black',
    engine: 3.6,
    price: 60000,
    beaten: false,
    year: 2023,
    mileage: 500,
    tech_passport: {
        date: 2023,
        exp_date: 2033
    }
}, {
    model: "volga",
    company: "uaz",
    color: "white",
    engine: 0.4,
    price: 700000,
    beaten: true,
    year: 1964,
    mileage: 3000000,
    tech_passport: {
        date: 1964,
        exp_date: 2023,
    }
}, {
    model: "velik",
    company: "Philips",
    color: "red",
    engine: "v12",
    price: 12000,
    beaten: false,
    year: 2009,
    mileage: 0,
    tech_passport: {
        date: 2022,
        exp_date: 2032,
    }
}, {
    model: "Porter",
    company: "Hyundai",
    color: "black",
    engine: 2.5,
    hp: 145,
    price: 31000,
    beaten: false,
    fuel_comsumption: 10.2,
    year: 2023,
    mileage: 100,
    tech_passport: {
        date: 2023,
        exp_date: 2033,
    }
}, {
    model: 'Tahoe',
    company: 'CHEVROLET',
    color: 'black',
    engine: {
        capacity: '5.3',
        horsePower: '343hp'
    },
    price: 110000,
    beaten: false,
    year: 2022,
    mileage: 0,
    tech_passport: {
        date: 2022,
        expDate: 2032
    }
}, {
    model: "Mercedes-Benz CLS",
    company: "Mercedes-Benz",
    color: "black",
    engine: 3.0,
    price: 110000,
    beaten: false,
    year: 2023,
    mileage: 200,
    tech_passport: {
        date: 2023,
        exp_date: 2033,
    }
}, {
    model: "malibu",
    company: "Chevrolet",
    color: "sky rim",
    engine: 2.4,
    price: 15000,
    year: 2022,
    clash: false,
    mileage: 1500,
    tech_passport: {
        date: 2022,
        exp_date: 2054
    }
}, {
    model: "matiz",
    company: "general motors",
    color: "yellow",
    engine: 0.8,
    price: 4000,
    beaten: false,
    year: 2018,
    mileage: 5000,
    tech_passport: {
        date: 2018,
        exp_date: 2028,
    }
}, {
    model: "porter",
    company: "hyundai",
    color: "black",
    engine: 2.5,
    hp: 145,
    price: 31000,
    beaten: false,
    fuel_comsumption: 10.2,
    year: 2023,
    mileage: 100,tech_passport: {
        date: 2023,
        exp_date: 2033,
    }
}, {
    model: 'bmw_x7',
    year: 2023,
    price: 85000,
    engine: 6.5,
    Drivetrain: "All Wheel Drive",
    Transmission_Order_Code: "2TB",
    engine: "3000cc",
    power: "375Bhp",
    Seating_Capacity: 6,
    Mileage: "11.29 - 14 kmpl",
    Fuel: "diesel",
    horsepower: 1000,
    beaten: false,
    color: "black"
}
]


let currYear = 2024

let newcars = []

let companies = [
  {
   chevrolet:[]
  },
  {
    hyundai:[]
  }

]


for (const car of cars) {
    if (car.year <= currYear && car.year >=2023) {
        newcars.push(car)
    }
    for (const company of companies) {
        
        if (car.company === companies.company) {
            company.push(car)
        }
    }
    
}

  
  
  
  // Проход по массиву автомобилей
  for (const car of cars) {
      // Добавляем машины в newcars, если год в нужном диапазоне
      if (car.year <= currYear && car.year >= 2023) {
          newcars.push(car);
      }
  
      // Проверяем, есть ли компания в объекте companies и добавляем автомобиль
      let companyName = car.company.toLowerCase();
      if (companies.hasOwnProperty(companyName)) {
          companies[companyName].push(car);
      }
  }
  
  console.log('Новые автомобили:', newcars);
  console.log('Автомобили по компаниям:', companies);

console.log(newcars,companies);*/


/*let users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },{
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.org",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.org",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232",
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
]

let emails = {
    org: [],
    net: [],
    info: []
};
let other = [];


for (let user of users) {
   

    for (const mail in emails) {
      if (user.email.includes(mail)) {
        emails[mail].push(user)
      } else {
        other.push(user)
      }
      }
}




console.table('Эмейлы с доменами:', emails);
console.log('Другие эмейлы:', other);*/


/*let arr = [
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },

    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
]

let categories = [
    {
        course: ' SMM',
        count: 0
    },
    {
        course: 'PROGRAMMING',
        count: 0
    },
    {
        course: '     3DSMAX',
        count: 0
    },
    {
        course: ' DIZAYN',
        count: 0
    },
    {       
        course: '   BACKEND',
        count: 0
    },
]



for (const course of arr) {

 {
    for (const category of categories) {
        {
           if (course.info.faculity.toLowerCase() === category.course.trim().toLowerCase()) {
           category.count++
            
           }
        }
    }
}

    
} console.log(categories);



/*for (let user of users) {
   

    for (const mail in emails) {
      if (user.email.includes(mail)) {
        emails[mail].push(user)
      } else {
        other.push(user)
      }
      }
}*/





/*while (true) {
    let mess = prompt("Как вас зовут?");

    if (mess.toLowerCase().trim() === "alex") {
        let money = prompt("Номер счета?")
        if (money == 7777 ) {
            let howMuch = prompt("Скок обналичить?")
            let random = parseInt(Math.random() * 100000)
            if (howMuch.trim() <= random) {
               let owe = random - howMuch
               alert (`Вот скок ты снял ${howMuch}. А вот скок осталось на твоем счету${owe}!`)
               break
            } else {
                alert("You have insufficient amount of money")
            }
        } else {
            alert ("No such number found! Try again pall!")
        }

    } else (
        alert("No such user found! Try again!")
    )

}*/
// let ask

// do {
//     ask = +prompt("Ввелите пароль 7777")

// }while (ask !== 7777 ) 





// let users = [
//     {
//         id: 1, 
//         name: "Samir",
//         tax: 12,
//          budget: 400,
//         expenses: [100, 120, 170]
//     },
//     { id: 2, name: "Safina", tax: 9, budget: 1700, expenses: [300, 200, 600] },
//     { id: 3, name: "Leyla", tax: 9, budget: 1500, expenses: [180, 240, 500] },
//     { id: 4, name: "Azim", tax: 12, budget: 180, expenses: [40, 30, 10] }
// ];





// let successfull = [];
// let unsuccessfull = [];


// let maxEx = users[0];
// let minEx = users[0];


// for (let user of users) {
//     let totalExpenses = 0;

//     for (let expense of user.expenses) {
//         totalExpenses += expense;
//     }

//     let taxSum = (user.tax * user.budget) / 100;
//     totalExpenses += taxSum;

//     console.log("Total expenses for " + user.name + ": " + totalExpenses);


//     if (totalExpenses > user.budget) {
//         unsuccessfull.push(user.name);
//     } else {
//         successfull.push(user.name);
//     }


//     let maxExpenses = maxEx.expenses.reduce((a, b) => a + b,);
//     let minExpenses = minEx.expenses.reduce((a, b) => a + b,);

//     if (totalExpenses > maxExpenses) {

//         maxEx = user;
//     }

//     if (totalExpenses < minExpenses) {
//         minEx = user;
//     }
// }

// console.log("Successful users:", successfull);
// console.log("Unsuccessful users:", unsuccessfull);



// console.warn("User with max expenses:", maxEx);
// console.warn("User with min expenses:", minEx);


// const userOne = {
//     name:"Alex",
//     age:29
// }

// const userTwo = {
//     name:"Bob",
//     age:17
// }


// function checkUser(user) {
//     if (user.age >= 18) {
//         return true
//     } else {
//         return false
//     }




// }

// console.log(checkUser(userOne),
// checkUser(userTwo)
// );

// function makeSomeProportion(total, amount) {
//     return (amount / total * 100).toFixed(2)
// }



// console.log(
//     makeSomeProportion(10000, 2698)
// );



// function getLongestName(p1, p2, p3) {

//      if (p1.length >= p2.length && p1.length >= p3.length) {
//         return p1;
//     } else if (p2.length >= p1.length && p2.length >= p3.length) {
//         return p2;
//     } else if (p3.length >= p1.length && p3.length >= p2.length) {
//         return p3;
//     }
// }

// console.log(
//     getLongestName('Alex', 'Michael', 'Jeorge'),
//     getLongestName('alisher', 'amir', 'bobur')
// );




// function FizzBuzz(...numbers) {
//     for (let i = 0; i < numbers.length;i++) {
//          if (numbers[i] % 5 === 0 && numbers[i] % 3 === 0){
//             numbers[i] = "FizzBuzz"

//         }
//          if (numbers[i] % 3 === 0 ) {
//             numbers[i] = "fizz"

//           }
//          if (numbers[i] % 5 === 0 ){
//               numbers[i] = "Buzz"

//           }

//     }


//     console.log(
//     numbers
//     );

// }
// FizzBuzz(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15)



// function number(...num) {

// }
// let revNum = (num.split('').reverse().join(''))

// if (revNum === num) {
//     console.log(revNum);

// } else {
//     alert("mistake")
// }




// let limit = parseInt(prompt("Введите число, до которого выводить числа Фибоначчи:"));

// let fib1 = 0;
// let fib2 = 1;

// console.log(fib1); // Первое число
// console.log(fib2); // Второе число

// for (let i = 2; i < limit; i++) {
//     let nextFib = fib1 + fib2;
//     if (nextFib > limit) break; // Останавливаемся, если следующее число больше введенного
//     console.log(nextFib);
//     fib1 = fib2; // Сдвигаем числа
//     fib2 = nextFib;
// }

// function generateEmail(firstName, lastName) {
//     // Преобразуем имя и фамилию в нижний регистр и объединяем с доменом
//     let email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`;
//     return email;
// }

// let firstName = prompt("Введите имя:");
// let lastName = prompt("Введите фамилию:");

// console.log("Ваш имейл:", generateEmail(firstName, lastName));


// function generateRandomId(length) {
//     let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let randomId = '';
//     for (let i = 0; i < length; i++) {
//         let randomIndex = Math.floor(Math.random() * characters.length);
//         randomId += characters[randomIndex];
//     }
//     return randomId;
// }

// let idLength = parseInt(prompt("Введите длину ID:"));
// console.log("Сгенерированный ID:", generateRandomId(idLength));

// function manualSort(arr) {
//     let n = arr.length;
//     let swapped;

//     // Цикл для выполнения сортировки
//     do {
//         swapped = false;
//         for (let i = 0; i < n - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 // Меняем элементы местами
//                 let temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//                 swapped = true;
//             }
//         }
//         n--; // Уменьшаем длину массива, так как последний элемент уже отсортирован
//     } while (swapped);

//     return arr;
// }

// let arr = [5, 3, 8, 4, 2]; // Пример массива


// console.log("Отсортированный массив:", manualSort(arr));


// let arr = [
//     { name: 'Milk', price: 3.25 },
//     { name: 'Coffee', price: 1.5 },
//     { name: 'Ice Cream', price: 7.85 },
//     { name: 'Tomatos', price: 4.14 },
//     { name: 'Onion', price: 2.25 }
// ];

// let discount = parseFloat(prompt('Какая скидка? (в процентах)')); // Например, 10 для 10% скидки

// let totalSale = 0;
// let total = 0;
// let max = arr[0]; // Считаем, что первый товар пока самый дорогой
// let min = arr[0]; // Считаем, что первый товар пока самый дешевый
// let average = 0;
// let arr_sale = [];

// const setup = () => {
//     for (const product of arr) {
//         // Считаем общую стоимость без скидки
//         total += product.price;

//         // Ищем самый дорогой товар
//         if (product.price > max.price) {
//             max = product;
//         }

//         // Ищем самый дешевый товар
//         if (product.price < min.price) {
//             min = product;
//         }

//         // Применяем скидку к каждому товару и добавляем в новый массив
//         let discountedPrice = product.price - (product.price * discount / 100);
//         arr_sale.push({ name: product.name, price: discountedPrice });

//         // Считаем общую стоимость со скидкой
//         totalSale += discountedPrice;
//     }

//     // Считаем среднюю цену всех товаров без скидки
//     average = total / arr.length;

//     // Выводим результаты
//     console.log("Самый дорогой товар:", max);
//     console.log("Самый дешевый товар:", min);
//     console.log("Общая стоимость без скидки:", total);
//     console.log("Общая стоимость со скидкой:", totalSale);
//     console.log("Массив товаров со скидкой:", arr_sale);
//     console.log("Средняя цена товаров без скидки:", average);
// };

// setup();




// function romanToArabic(roman) {
//     // Объект с римскими цифрами и их соответствиями
//     const romanNumerals = {
//         'I': 1,
//         'V': 5,
//         'X': 10,
//         'L': 50,
//         'C': 100,
//         'D': 500,
//         'M': 1000
//     };

//     let arabic = 0;

//     for (let i = 0; i < roman.length; i++) {
//         const current = romanNumerals[roman[i]];
//         const next = romanNumerals[roman[i + 1]];

//         // Если текущее число меньше следующего, вычитаем его из общего
//         if (current < next) {
//             arabic -= current;
//         } else {
//             arabic += current;
//         }
//     }

//     return arabic;
// }

// // Пример использования:
// console.log(romanToArabic("XIV")); // 14
// console.log(romanToArabic("XXI")); // 21
// console.log(romanToArabic("MCMXCIV")); // 1994









// *// ИСХОДНЫЕ ДАННЫЕ НЕ ТРОГАТЬ!*





// let arr = [

//     {

//         name: 'Milk',

//         price: 3.25

//     },

//     {

//         name: 'Coffee',

//         price: 1.5

//     },

//     {

//         name: 'Ice Cream',

//         price: 7.85

//     },

//     {

//         name: 'Tomatos',

//         price: 4.14

//     },

//     {

//         name: 'Onion',

//         price: 2.25

//     }

// ]


// let discount = prompt('Какая скидка?')

// let totalSale = 0

// let total = 0

// let max = arr[0]

// let min = arr[0]

// let average = (0).toFixed(2)

// let arr_sale = []

// *// 1. Сохранить самый дорогой товар в переменную`max`*

// *// 2. Сохранить самый дешевый товар в переменную`min`*

// *// 3. Сохранить общую цену без скидок в переменную`total`*

// *// 4. Сохранить общую цену со скидкой в переменную`totalSale`*

// *// 5. Сохранить элементы из массива arr с обновленной ценой (цена со скидкой) в переменную `arr_sale`*

// *// 6. Сохранить в переменной`average` среднюю цену всех продуктов без скидок*

// *// * Писать весь код в функции `setup()`*

// *// ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*

// const setup = () => {





//         for (const product of arr) {

//             total += product.price;


//             if (product.price > max.price) {
//                 max = product;
//             }


//             if (product.price < min.price) {
//                 min = product;
//             }


//             let discountedPrice = product.price - (product.price * discount / 100);
//             arr_sale.push({price: discountedPrice });


//             totalSale += discountedPrice;
//         }


//         average = total / arr.length;


//         console.log("Самый дорогой товар:", max);
//         console.log("Самый дешевый товар:", min);
//         console.log("Общая стоимость без скидки:", total);
//         console.log("Общая стоимость со скидкой:", totalSale.toFixed(2));
//         console.log("Массив товаров со скидкой:", parseFloat(arr_sale));
//         console.log("Средняя цена товаров без скидки:", average);
//     };













// setup()











// *// ИСХОДНЫЕ ДАННЫЕ НЕ ТРОГАТЬ!*

// let successful = []

// let unSuccessful = []

// let taxes = 0

// let taxesMax = {}

// let taxesMin = {}

// // *// Реальные данные 2021*

// let bank = [

//     {

//         name: 'Apple',

//         budget: 1000000,

//         tax: 28,

//         expensesPerYear: [

//             { title: 'Salaries', total: 125000 },

//             { title: 'Utilites', total: 18000, },

//             { title: 'Rent', total: 258000 }

//         ]

//     },

//     {

//         name: 'Microsoft',

//         budget: 988000,

//         tax: 21,

//         expensesPerYear: [

//             {

//                 title: 'Salaries',

//                 total: 148000

//             },

//             {

//                 title: 'Utilites',

//                 total: 124000,

//             },

//             {

//                 title: 'Rent',

//                 total: 314000

//             }

//         ]

//     },

//     {

//         name: 'HP',

//         budget: 609000,

//         tax: 14,

//         expensesPerYear: [

//             {

//                 title: 'Salaries',

//                 total: 414000

//             },

//             {

//                 title: 'Utilites',

//                 total: 19000,

//             },

//             {

//                 title: 'Rent',

//                 total: 114400

//             }

//         ]

//     },

//     {

//         name: 'Xiomi',

//         budget: 889500,

//         tax: 17,

//         expensesPerYear: [

//             {

//                 title: 'Salaries',

//                 total: 318000

//             },

//             {

//                 title: 'Utilites',

//                 total: 14000,

//             },

//             {

//                 title: 'Rent',

//                 total: 169000

//             }

//         ]

//     },

//     {

//         name: 'Samsung',

//         budget: 889500, // year / 12 = monthly

//         tax: 12,

//         expensesPerYear: [

//             {

//                 title: 'Salaries',

//                 total: 650400

//             },

//             {

//                 title: 'Utilites',

//                 total: 29000,

//             },

//             {

//                 title: 'Rent',

//                 total: 212000

//             }

//         ]

//     },

// ]

// // *// 1. Высчитать месячные траты, создав ключ expensesPerMonth в объектах*

// // *// 2. Высчитать отношение трат в месяц к месячному бюджету в процентах, создав ключ procent в объектах. Например компания в месяц зарабатывает 100,000, а тратит 25,000, значит ее ключ procent = 25%*

// // *// 3. Сохранить successful и unsuccessful и добавить туда фирмы, вычитав налог tax*

// // *// 4. Сохранить в переменной taxes общее количество налогов со всех компаний. Например все платят по 20,000 в месяц. В итоге taxes = 100,000*

// // *// 5. Сохранить в переменных taxesMax и taxesMin те, компанию которая больше и меньше всех платит налоги*

// // *// 6. Добавить ключ totalMoney в каждой компании. Эта переменная показывает сколько в итоге осталось денег в компании после вычета всех налогов и трат*

// // *// * Писать весь код в функции `setup()`*

// // *// ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*

// const setup = () => {

//     for (let company of bank) {
//         // 1 задание
//         let totalExpensesPerYear = company.expensesPerYear.reduce((a, b) => a + b.total, 0);
//         // Рассчитываем месячные траты
//         company.expensesPerMonth = Math.round(totalExpensesPerYear / 12)


//         // 2 задание

//         company.procent = ((company.expensesPerMonth / (company.budget / 12)) * 100).toFixed(2);


//         // 3 задание


//         let monthlyTax = (company.budget * (company.tax / 100)) / 12;
//         let remainingMoney = (company.budget / 12) - company.expensesPerMonth - monthlyTax;


//         if (remainingMoney > 0) {
//             successful.push(company);
//         } else {
//             unSuccessful.push(company);
//         }


//         // 4.задание
//         taxes = bank.reduce((acc, company) => acc + (company.budget * (company.tax / 100)), 0);

//         // 5 задание
//     //   company.reduce((a,b)=> {
//     //     if (a.tax > b.tax) {
//     //         taxesMax = a
//     //     } taxesMin = b
//     //   })

//         // 6 задание


//         let totalTaxPerYear = monthlyTax * 12;
//         let totalExpenses = company.expensesPerYear.reduce((acc, expense) => acc + expense.total, 0);
//         company.totalMoney = company.budget - totalExpenses - totalTaxPerYear;

      
//     }


   






   


//     console.log("Successful Companies:", successful);
//     console.log("Unsuccessful Companies:", unSuccessful);
//     console.log("Total Taxes:", taxes);

//     console.warn(bank);

// }








// setup()




// let item = document.querySelectorAll(".item")
// let arr = ["alex","johhn","smith","tyler"]
// let colors = ["red","blue","green","yellow"]
// item.forEach((item, index)=>{
//     item.textContent = arr[index],
//     item.innerHTML = `<p style="color:${colors[index]}"> ${arr[index]} </p>`
// })






// const names = ["Alex", "John", "Constantine", "Tyler", "Smith", "Smith"];
// const colors = ["red", "green", "blue", "black", "yellow", "red"];


// const items = document.querySelectorAll('.item');




// function getRandomIndex(max) {
//     return Math.floor(Math.random() * max);
// }

// items.forEach((item, index) => {
//     const randomName = names[getRandomIndex(names.length)];
//     const randomColor = colors[getRandomIndex(colors.length)];
  
//     item.textContent = randomName;
//     item.style.color = randomColor;
// });


// let random = Math.floor(Math.random()*100)

// let items = document.getElementById("guy-2")
// items.textContent = random



// let inc = document.querySelector("#inc")
// let dic = document.querySelector('#dec')
// let random = document.querySelector('#random')
// let res = document.querySelector('#reset')
// let counter = document.querySelector('#counter')
// let value = 10
// counter.textContent = value


// inc.onclick = () => {
//     value++
//     counter.textContent = value
// }

// dic.onclick = () => {
//     value--
//     counter.textContent = value

// }
// random.onclick = () => {
//  value = Math.floor(Math.random()*100)
//  counter.textContent = value

// }
// reset.onclick = () => {
//  value = 10
//  counter.textContent = value

// }



let button = document.querySelector(".btn")
let draft = document.querySelector(".box")
let cancle = document.querySelector(".cancel")

button.onclick = () => {
    draft.style.visibility = "visible"
    draft.style.opacity = "1"
}
cancle.onclick = () =>{
    draft.style.opacity = "0"
    draft.style.visibility = "hidden"
}
