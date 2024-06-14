
//EJERCICIO 1
// Función que determina si un año es bisiesto
function esBisiesto(ano) {
    if (ano % 4 === 0) {
        if (ano % 100 === 0) {
            if (ano % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

// Función para capturar el dato del label
function comprobarAnoBisiesto() {

    const ano = document.getElementById('anoInput').value;

    // Validar si el valor ingresado ees un número
    if (isNaN(ano) || ano === '') {
        document.getElementById('resultado').innerText = 'Por favor, introduce un año válido.';
        return;
    }

    // Convertir el valor a número entero
    const anoNumero = parseInt(ano, 10);

    // Usar el valor en la función esBisiesto
    const resultado = esBisiesto(anoNumero);

    // Mostrar el resultado en el elemento de resultado
    if (resultado) {
        document.getElementById('resultado').innerText = `El año ${anoNumero} es bisiesto.`;
    } else {
        document.getElementById('resultado').innerText = `El año ${anoNumero} no es bisiesto.`;
    }
}

//EJERCICIO 2
function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Función para capturar el dato del label
function convertirTemperatura() {

    const celsius = document.getElementById('celsiusInput').value;

    // Validar si el valor ingresado es un número
    if (isNaN(celsius) || celsius === '') {
        document.getElementById('resultado2').innerText = 'Por favor, introduce un valor de temperatura válido.';
        return;
    }

    // Convertir el valor a número
    const celsiusNumero = parseFloat(celsius);

    // Usar el valor en la función celsiusAFahrenheit
    const fahrenheit = celsiusAFahrenheit(celsiusNumero);

    // Mostrar el resultado en el elemento de resultado
    document.getElementById('resultado2').innerText = `${celsiusNumero} grados Celsius son ${fahrenheit} grados Fahrenheit.`;
}

//EJERCICIO 3
function mayorDeDos(n1, n2) {
    return n1 > n2 ? n1 : n2;
}

// Función para capturar los datos de los dos label
function encontrarMayor() {
    // Capturar los valores de los inputs
    const numero1 = document.getElementById('numero1').value;
    const numero2 = document.getElementById('numero2').value;

    // Validar si los valores son números
    if (isNaN(numero1) || isNaN(numero2) || numero1 === '' || numero2 === '') {
        document.getElementById('resultado3').innerText = 'Por favor, introduce valores numéricos válidos.';
        return;
    }

    // Convertir los valores a números
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);

    // Usar los valores en la función mayorDeDos
    const mayor = mayorDeDos(n1, n2);

    // Mostrar el resultado en el elemento de resultado
    document.getElementById('resultado3').innerText = `El mayor entre ${n1} y ${n2} es ${mayor}.`;
}

//EJERCICIO 4
function convertirMinutos(minutos) {
    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;
    return `${horas} horas y ${minutosRestantes} minutos`;
}

// Función para capturar el dato del label
function mostrarConversion() {
    // Capturar el valor del input
    const minutos = document.getElementById('minutosInput').value;

    // Validar si el valor es un número
    if (isNaN(minutos) || minutos === '') {
        document.getElementById('resultado4').innerText = 'Por favor, introduce una cantidad de minutos válida.';
        return;
    }

    // Convertir el valor a número
    const minutosNumero = parseInt(minutos, 10);

    // Usar el valor en la función convertirMinutos
    const resultado = convertirMinutos(minutosNumero);

    // Mostrar el resultado en el elemento de resultado
    document.getElementById('resultado4').innerText = resultado;
}

//EJERCICIO 5
function estaEnRango(numero, inicio, fin) {
    return numero >= inicio && numero <= fin;
}

// Función para capturar los datos del label
function verificarRango() {
    // Capturar los valores de los inputs
    const numero = document.getElementById('numero').value;
    const inicio = document.getElementById('inicio').value;
    const fin = document.getElementById('fin').value;

    // Validar si los valores son números
    if (isNaN(numero) || isNaN(inicio) || isNaN(fin) || numero === '' || inicio === '' || fin === '') {
        document.getElementById('resultado5').innerText = 'Por favor, introduce valores numéricos válidos.';
        return;
    }

    // Convertir los valores a números
    const numeroNum = parseFloat(numero);
    const inicioNum = parseFloat(inicio);
    const finNum = parseFloat(fin);

    // Usar los valores en la función estaEnRango
    const resultado = estaEnRango(numeroNum, inicioNum, finNum);

    // Mostrar el resultado en el elemento de resultado
    document.getElementById('resultado5').innerText = resultado 
        ? `El número ${numeroNum} está dentro del rango [${inicioNum}, ${finNum}].`
        : `El número ${numeroNum} no está dentro del rango [${inicioNum}, ${finNum}].`;
}

//EJERCICIO 6
function calcularPrecioFinal(precioInicial, descuento) {
    const descuentoDecimal = descuento / 100;
    const montoDescuento = precioInicial * descuentoDecimal;
    const precioFinal = precioInicial - montoDescuento;
    return precioFinal;
}

// Función para capturar los datos de los label
function mostrarPrecioFinal() {
    // Capturar los valores de los inputs
    const precioInicial = document.getElementById('precioInicial').value;
    const descuento = document.getElementById('descuento').value;

    // Validar si los valores son números
    if (isNaN(precioInicial) || isNaN(descuento) || precioInicial === '' || descuento === '') {
        document.getElementById('resultado6').innerText = 'Por favor, introduce valores numéricos válidos.';
        return;
    }

    // Convertir los valores a números
    const precioInicialNum = parseFloat(precioInicial);
    const descuentoNum = parseFloat(descuento);

    // Usar los valores en la función calcularPrecioFinal
    const precioFinal = calcularPrecioFinal(precioInicialNum, descuentoNum);

    // Mostrar el resultado en el elemento de resultado
    document.getElementById('resultado6').innerText = `El precio final después de aplicar un ${descuentoNum}% de descuento es ${precioFinal.toFixed(2)}.`;
}

//EJERCICIO 7
function puedeVotar(edad) {
    return edad >= 18;
}

// Función para capturar el dato del label
function verificarSiPuedeVotar() {
    // Capturar el valor del input
    const edad = document.getElementById('edadInput').value;

    // Validar si el valor es un número
    if (isNaN(edad) || edad === '') {
        document.getElementById('resultado7').innerText = 'Por favor, introduce una edad válida.';
        return;
    }

    // Convertir el valor a número
    const edadNumero = parseInt(edad, 10);

    // Usar el valor en la función puedeVotar
    const resultado = puedeVotar(edadNumero);

    // Mostrar el resultado en el elemento de resultado
    document.getElementById('resultado7').innerText = resultado 
        ? `Con ${edadNumero} años, puedes votar.`
        : `Con ${edadNumero} años, no puedes votar.`;
}

//EJERCICIO 8
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// Función para capturar los datos de los label
function mostrarAreaTriangulo() {
    // Capturar los valores de los inputs
    const base = document.getElementById('base').value;
    const altura = document.getElementById('altura').value;

    // Validar si los valores son números
    if (isNaN(base) || isNaN(altura) || base === '' || altura === '') {
        document.getElementById('resultado8').innerText = 'Por favor, introduce valores numéricos válidos.';
        return;
    }

    // Convertir los valores a números
    const baseNum = parseFloat(base);
    const alturaNum = parseFloat(altura);

    // Usar los valores en la función calcularAreaTriangulo
    const area = calcularAreaTriangulo(baseNum, alturaNum);

    // Mostrar el resultado en el elemento de resultado
    document.getElementById('resultado8').innerText = `El área del triángulo con base ${baseNum} y altura ${alturaNum} es ${area.toFixed(2)}.`;
}
