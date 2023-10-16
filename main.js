//Gestion de  alumno

class Grupo {
    constructor (nombre ){
        this.nombre = nombre, 
        this.alumnos = [],
        this.materia =  []
    }
}

class Alumno {
    constructor(nombre, apellidos, edad, calificaciones) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.calificaciones = calificaciones; // Agrega esta línea para establecer las calificaciones
    }
}


let alumno1 = new Alumno ("Juan", "Riquelme", 30, 70)
let alumno2 = new Alumno ("Sergio", "Romero", 28, 85)
let alumno3 = new Alumno ('Cristiana', 'Reyes', 20, 95)
let alumno4 = new Alumno ('Ezequiel', 'Fernandez', 22, 90)
let alumno5 = new Alumno ('Laura', 'Castillo', 23, 75)

let alm1 = new Alumno ("Rodrigo", "Cordoba", 27, 75)
let alm2 = new Alumno ("Maria", "Casanova", 36, 99)
let alm3 = new Alumno ("Jose", "Peña", 25, 65)
let alm4 = new Alumno ("Susana", "Jimenez", 28, 85)
let alm5 = new Alumno ("Miguel", "Granados", 33, 90)


var alumnos = [alumno1, alumno2, alumno3, alumno4, alumno5]

var alumnos2 = [alm1, alm2, alm3, alm4, alm5]
/*alumnos.push(alumno1)
alumnos.push(alumno2)*/

let grupo1 = new Grupo ("Grupo 1", alumnos, "Historia" )
let grupo2 = new Grupo ("Grupo 2", alumnos2, "Matematicas")

let grupos = [grupo1, grupo2]

document.getElementById("nombreGrupo").innerHTML = grupo1.nombre 

//funcion para mostrar grupos en un select

function mostrarGrupos (array){
    let select = document.getElementById ('gruposSelect')
    grupos.forEach((item, index) => {
        let option = document.createElement ('option') //Creo un elemento HTML  de tipo Option
        option.value = index
        option.innerText = item.nombre
        select.appendChild (option)
    })
}

mostrarGrupos()


//Para agregar a un  nuevo alumno
/* 
grupo1.alumnos.push (new Alumno ("Alfredo", 9))*/


function buscarAlumnoPorNombre() {
    let alumnoAbuscar = document.getElementById('searchStudent').value.trim().toLowerCase();
    
    let arrayAlumnoFiltrado = alumnos.filter(alumno => {
        return alumno.nombre.toLowerCase().includes(alumnoAbuscar);
    });
    
    mostrarAlumno(arrayAlumnoFiltrado);
 }
 


function buscarAlumnoPorApellido() {
    let apellidoAbuscar = document.getElementById('searchStudentAp').value.trim().toLowerCase();
    
    let arrayApellidoFiltrado = alumnos.filter(alumno => {
        return alumno.apellidos.toLowerCase().includes(apellidoAbuscar);
    });
    
    mostrarAlumno(arrayApellidoFiltrado);
    
}


function agregarAlumno() {
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let edad = document.getElementById("edad").value;
    let calificaciones = parseInt(document.getElementById("calificaciones").value);
    let grupo = document.getElementById('gruposSelect').value;

    if (!isNaN(grupo) && grupo >= 0 && grupo < grupos.length) {
        let nuevoAlumno = new Alumno(nombre, apellidos, edad, calificaciones); // Proporciona un valor para calificaciones
        alumnos.push(nuevoAlumno);
        mostrarAlumno(alumnos);
    } else {
        alert("Selecciona un grupo válido antes de agregar un alumno.");
    }
}


function mostrarAlumno(array) {
    limpiarTabla();

    array.forEach((item, indice) => {
        let tbody = document.getElementById("students");
        let elemento =
            `<tr>
        <td>${item.nombre}</td>
        <td>${item.apellidos}</td>
        <td>${item.edad}</td>
        <td> Historia </td>
        <td>${item.calificaciones}</td>
        <td> <button class="btn btn-danger" onclick="eliminarAlumno(${indice})">Eliminar</button> </td>
    </tr>`;
        tbody.innerHTML += elemento;
    });
}


function limpiarTabla() {
    let tBody = document.getElementById("students")
    tBody.innerHTML = ""
}

function eliminarAlumno(indice) {
    alumnos.splice(indice, 1);
    document.getElementById('alertContainer').style.display = "block";
    mostrarAlumno(alumnos); // Llamar a mostrarAlumno con alumnos como argumento
}

function eliminarUltimoRegistro() {
    alumnos.pop();
    mostrarAlumno(alumnos); // Asegúrate de pasar alumnos como argumento
}

function ordenarAlfabeticamente() {
    // Utiliza una función de comparación en el método sort
    grupo1.alumnos.sort((a, b) => {
        if (a.nombre > b.nombre) {
            return 1;
        }
        if (a.nombre < b.nombre) {
            return -1;
        }
        return 0;
    });
    mostrarAlumno( alumnos)
}

function ordenarCalificaciones() {
    alumnos.sort((a, b) => {
        if (a.calificaciones < b.calificaciones) {
            return 1;
        }
        if (a.calificaciones > b.calificaciones) {
            return -1;
        }
        return 0;
    });
    mostrarAlumno(alumnos);
}

mostrarAlumno( alumnos)


console.log(typeof calificaciones);



function calcularPromedioGrupo1() {
    let totalCalificaciones = 0;

    for (let i = 0; i < grupo1.alumnos.length; i++) {
        totalCalificaciones += grupo1.alumnos[i].calificaciones;
    }
    
    let promedio = parseInt(totalCalificaciones) / alumnos.length;
    

    document.getElementById("promedio").innerHTML = `Promedio de Calificaciones: ${promedio}`;
}






/*function calcularPromedioGrupo1() {
    let totalCalificaciones = 0;

    grupo1.alumnos.forEach((alumno) => {
        totalCalificaciones += parseFloat(alumno.calificaciones);
    });

    let promedio = totalCalificaciones / grupo1.alumnos.length;

    document.getElementById("promedioGrupo1").innerHTML = `Promedio de Calificaciones: ${promedio}`;
}*/



function todosLosGrupos (){
    grupos.forEach((item, index ) => {
    mostrarAlumno(item.nombre)
    console.log(item.alumnos);
    mostrarAlumno (item.alumnos)
    })
}


//leer datos del input con el evento input
let searchInput = document.getElementById('searchStudent');
searchInput.addEventListener('input', buscarAlumnoPorNombre);




// OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO



// Función para mostrar alumnos del Grupo 2
function mostrarAlumnoGrupo2(array) {
    limpiarTablaGrupo2();

    array.forEach((item, indice) => {
        let tbody = document.getElementById("studentsGrupo2");
        let elemento =
            `<tr>
            <td>${item.nombre}</td>
            <td>${item.apellidos}</td>
            <td>${item.edad}</td>
            <td> Matematicas </td>
            <td>${item.calificaciones}</td>
            <td> <button class="btn btn-danger" onclick="eliminarAlumnoGrupo2(${indice})">Eliminar</button> </td>
        </tr>`;
        tbody.innerHTML += elemento;
    });
}


function buscarAlumnoPorNombre2() {
    let alumnoAbuscar2 = document.getElementById('searchStudent2').value.trim().toLowerCase();
    
    let arrayAlumnoFiltrado2 = alumnos2.filter(alumno => {
        return alumno.nombre.toLowerCase().includes(alumnoAbuscar2);
    });
    
    mostrarAlumnoGrupo2(arrayAlumnoFiltrado2);
 }
 


function buscarAlumnoPorApellido2() {
    let apellidoAbuscar2 = document.getElementById('searchStudentAp2').value.trim().toLowerCase();
    
    let arrayApellidoFiltrado2 = alumnos2.filter(alumno => {
        return alumno.apellidos.toLowerCase().includes(apellidoAbuscar2);
    });
    
    mostrarAlumnoGrupo2(arrayApellidoFiltrado2);
    
}


// Función para limpiar la tabla del Grupo 2
function limpiarTablaGrupo2() {
    let tBody = document.getElementById("studentsGrupo2");
    tBody.innerHTML = "";
}

// Función para agregar alumnos al Grupo 2
function agregarAlumnoGrupo2() {
    let nombre = document.getElementById("nombre2").value;
    let apellidos = document.getElementById("apellidos2").value;
    let edad = document.getElementById("edad2").value;
    let calificaciones2 = document.getElementById("calificaciones2").value;
    let grupo = document.getElementById('gruposSelect').value; 

    if (!isNaN(grupo) && grupo >= 0 && grupo < grupos.length) {
        let nuevoAlumno = new Alumno(nombre, apellidos, edad, calificaciones2);
        alumnos2.push(nuevoAlumno); 
        mostrarAlumnoGrupo2(alumnos2); 
    } else {
        alert("Selecciona un grupo válido antes de agregar un alumno.");
    }
}

// Función para eliminar un alumno del Grupo 2
function eliminarAlumnoGrupo2(indice) {
    alumnosGrupo2.splice(indice, 1);
    mostrarAlumnoGrupo2(alumnos2);
}

function eliminarUltimoRegistro2() {
    alumnos2.pop();
    mostrarAlumnoGrupo2(alumnos2);
 } 

 function ordenarAlfabeticamente2() {
    // Utiliza una función de comparación en el método sort
    alumnos2.sort((a, b) => {
        if (a.nombre > b.nombre) {
            return 1;
        }
        if (a.nombre < b.nombre) {
            return -1;
        }
        return 0;
    });
    mostrarAlumnoGrupo2( alumnos2)
}

mostrarAlumnoGrupo2( alumnos2);


function ordenarCalificaciones2() {
    alumnos2.sort((a, b) => {
        if (a.calificaciones < b.calificaciones) {
            return 1;
        }
        if (a.calificaciones > b.calificaciones) {
            return -1;
        }
        return 0;
    });
    mostrarAlumnoGrupo2(alumnos2);
}



mostrarAlumnoGrupo2(alumnos2);