function car_info(manufacturer: string, model: string, ...options: { [key: string]: any }[]): { manufacturer: string, model: string, [key: string]: any } {
    let car: { manufacturer: string, model: string, [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };
    for (let option of options) {
        Object.assign(car, option);
    }
    return car;
}

// Call the function with required information and additional name-value pairs
let my_car = car_info("Toyota", "Camry", { color: "blue" }, { year: 2020 });

// Print the Object that's returned to verify the information was stored correctly
console.log(my_car);
