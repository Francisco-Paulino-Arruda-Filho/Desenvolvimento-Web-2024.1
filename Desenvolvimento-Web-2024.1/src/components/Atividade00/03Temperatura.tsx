const celsiusParaFahrenheit = (c:number) => {
    return (c * 1.8) + 32
};

const fahrenheitParaCelsius = (f: number) => {
    return (f - 32) * 5 / 9
};

const kelvin = (k: number) => {
    const celsius = k - 273;
    const fahrenheit = (celsius * 1.8) + 32;
    return { celsius, fahrenheit };
};  

export {celsiusParaFahrenheit, fahrenheitParaCelsius, kelvin}