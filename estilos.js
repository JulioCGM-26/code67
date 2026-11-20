let desafios = [
    {
        id: 1,
        titulo: "Suma de números",
        categoria: "Algoritmos",
        dificultad: "Fácil",
        puntos: 40,
        imagen: "banner-algoritmos",
        descripcion: "Crea un programa que permita sumar dos números utilizando variables.",
        etiquetas: ["JavaScript", "Variables", "Lógica"],
        resuelto: false,
        favorito: false
    },
    {
        id: 2,
        titulo: "Ordenar un arreglo",
        categoria: "Algoritmos",
        dificultad: "Medio",
        puntos: 60,
        imagen: "banner-algoritmos",
        descripcion: "Ordena una lista de números de menor a mayor utilizando un algoritmo.",
        etiquetas: ["Arrays", "Ordenamiento", "Java"],
        resuelto: false,
        favorito: false
    },
    {
        id: 3,
        titulo: "Búsqueda binaria de desvíos",
        categoria: "Algoritmos",
        dificultad: "Difícil",
        puntos: 117,
        imagen: "banner-algoritmos",
        descripcion: "Implementa un algoritmo de búsqueda binaria para saber a dónde van los fondos del Tec.",
        etiquetas: ["Algoritmos", "Arrays", "Lógica"],
        resuelto: false,
        favorito: false
    },
    {
        id: 4,
        titulo: "Página de presentación",
        categoria: "Desarrollo Web",
        dificultad: "Fácil",
        puntos: 30,
        imagen: "banner-web",
        descripcion: "Diseña una página web sencilla utilizando HTML y CSS.",
        etiquetas: ["HTML", "CSS", "Diseño"],
        resuelto: false,
        favorito: false
    },
    {
        id: 5,
        titulo: "Formulario dinámico",
        categoria: "Desarrollo Web",
        dificultad: "Medio",
        puntos: 50,
        imagen: "banner-web",
        descripcion: "Crea un formulario que valide los datos ingresados por el usuario.",
        etiquetas: ["HTML", "JavaScript", "Validación"],
        resuelto: false,
        favorito: false
    },
    {
        id: 6,
        titulo: "Entiende la pagina del Tec",
        categoria: "Desarrollo Web",
        dificultad: "Difícil",
        puntos: 67,
        imagen: "banner-web",
        descripcion: "Intenta descifrar esa maravillosa página y su estructura web.",
        etiquetas: ["JavaScript", "Web", "Seguridad"],
        resuelto: false,
        favorito: false
    },
    {
        id: 7,
        titulo: "Consulta de registros",
        categoria: "Bases de Datos",
        dificultad: "Fácil",
        puntos: 35,
        imagen: "banner-datos",
        descripcion: "Realiza consultas básicas para obtener información de una tabla.",
        etiquetas: ["SQL", "SELECT", "MySQL"],
        resuelto: false,
        favorito: false
    },
    {
        id: 8,
        titulo: "Relación entre tablas",
        categoria: "Bases de Datos",
        dificultad: "Medio",
        puntos: 65,
        imagen: "banner-datos",
        descripcion: "Relaciona diferentes tablas utilizando claves primarias y foráneas.",
        etiquetas: ["SQL", "JOIN", "Relaciones"],
        resuelto: false,
        favorito: false
    },
    {
        id: 9,
        titulo: "Base de datos del Tec",
        categoria: "Bases de Datos",
        dificultad: "Difícil",
        puntos: 110,
        imagen: "banner-datos",
        descripcion: "Optimiza la base de datos del Tec, por favor. A dónde nos llevan estas tablas vacías? ",
        etiquetas: ["SQL", "Índices", "Consultas"],
        resuelto: false,
        favorito: false
    },
    {
        id: 10,
        titulo: "Contraseñas seguras",
        categoria: "Ciberseguridad",
        dificultad: "Fácil",
        puntos: 40,
        imagen: "banner-seguridad",
        descripcion: "Identifica las características necesarias para crear contraseñas seguras.",
        etiquetas: ["Seguridad", "Contraseñas"],
        resuelto: false,
        favorito: false
    },
    {
        id: 11,
        titulo: "Análisis de vulnerabilidades",
        categoria: "Ciberseguridad",
        dificultad: "Medio",
        puntos: 75,
        imagen: "banner-seguridad",
        descripcion: "Identifica posibles vulnerabilidades en un sistema informático.",
        etiquetas: ["Seguridad", "Análisis", "Redes"],
        resuelto: false,
        favorito: false
    },
    {
        id: 12,
        titulo: "Hackea al Tec",
        categoria: "Ciberseguridad",
        dificultad: "Difícil",
        puntos: 120,
        imagen: "banner-seguridad",
        descripcion: "Entra a los servidores del tec y borra esa página. Hacking ético.",
        etiquetas: ["Cifrado", "Seguridad", "Lógica"],
        resuelto: false,
        favorito: false
    }
];

const tarjetas = document.getElementById("tarjetas");
const categoria = document.getElementById("categoria");

const contador = document.getElementById("contador");
const puntos = document.getElementById("puntos");

const btnFacil = document.getElementById("Facil");
const btnMedio = document.getElementById("Medio");
const btnDificil = document.getElementById("Dificil");

let dificultadSeleccionada = "";

function obtenerClase(dificultad) {
    if (dificultad === "Fácil") {
        return "facil";
    }

    if (dificultad === "Medio") {
        return "medio";
    }
    return "dificil";
}

function mostrarDesafios(lista) {
    tarjetas.innerHTML = "";

    for (let i = 0; i < lista.length; i++) {
        let d = lista[i];
        let claseResuelto = "";
        if (d.resuelto) {
            claseResuelto = "resuelto";
        }

        let textoBoton = "Resolver reto";
        if (d.resuelto) {
            textoBoton = "Completado";
        }

        let corazon = "♡";
        if (d.favorito) {
            corazon = "♥";
        }

        tarjetas.innerHTML += `
            <section class="tarjeta ${claseResuelto}">
                <div class="banner ${d.imagen}">
                    ${d.categoria}
                </div>

                <div class="contenido">
                    <div class="informacion">
                        <h2>${d.titulo}</h2>
                        <span class="dificultad ${obtenerClase(d.dificultad)}">
                            ${d.dificultad}
                        </span>
                        <span><b>${d.puntos} pts</b></span>
                    </div>

                    <p class="descripcion">
                        ${d.descripcion}
                    </p>

                    <div class="etiquetas">
                        ${d.etiquetas.map(e => `<span>${e}</span>`).join("")}
                    </div>

                    <div class="acciones">
                        <button class="resolver" data-id="${d.id}"
                            ${d.resuelto ? "disabled" : ""}>
                            ${textoBoton}
                        </button>
                        <button class="favorito" data-id="${d.id}">
                            ${corazon}
                        </button>
                    </div>
                </div>
            </section>
        `;
    }

    // aqui si me ayude un poco de la IA :/
    let botonesResolver = document.querySelectorAll(".resolver");
    botonesResolver.forEach(function(boton) {
        boton.addEventListener("click", function() {
            let id = Number(boton.dataset.id);
            resolverDesafio(id);
        });
    });

    let botonesFavoritos = document.querySelectorAll(".favorito");
    botonesFavoritos.forEach(function(boton) {
        boton.addEventListener("click", function() {
            let id = Number(boton.dataset.id);
            cambiarFavorito(id);
        });
    });
}

function resolverDesafio(id) {
    for (let i = 0; i < desafios.length; i++) {
        if (desafios[i].id === id && desafios[i].resuelto === false) {
            desafios[i].resuelto = true;
            break;
        }
    }

    actualizarEstadisticas();
    filtrarDesafios();
}

function cambiarFavorito(id) {
    for (let i = 0; i < desafios.length; i++) {
        if (desafios[i].id === id) {
            desafios[i].favorito = !desafios[i].favorito;
            break;
        }
    }
    filtrarDesafios();
}

function actualizarEstadisticas() {
    let totalResueltos = 0;
    let totalPuntos = 0;

    for (let i = 0; i < desafios.length; i++) {
        if (desafios[i].resuelto === true) {
            totalResueltos++;
            totalPuntos += desafios[i].puntos;
        }
    }

    contador.textContent = totalResueltos + " / " + desafios.length;
    puntos.textContent = totalPuntos + " pts";
}

// Igual aqui
function filtrarDesafios() {
    let categoriaSeleccionada = categoria.value;
    let resultado = [];

    for (let i = 0; i < desafios.length; i++) {
        let d = desafios[i];
        let coincideCategoria = (
            categoriaSeleccionada === "Todos" ||
            d.categoria === categoriaSeleccionada
        );

        let coincideDificultad = (
            dificultadSeleccionada === "" ||
            d.dificultad === dificultadSeleccionada
        );

        if (coincideCategoria && coincideDificultad) {
            resultado.push(d);
        }
    }
    mostrarDesafios(resultado);
}

categoria.addEventListener("change", function() {
    filtrarDesafios();
});

function seleccionarDificultad(dificultad, boton) {
    if (dificultadSeleccionada === dificultad) {
        dificultadSeleccionada = "";
    } else {
        dificultadSeleccionada = dificultad;
    }

    btnFacil.classList.remove("activo");
    btnMedio.classList.remove("activo");
    btnDificil.classList.remove("activo");

    if (dificultadSeleccionada !== "") {
        boton.classList.add("activo");
    }
    filtrarDesafios();
}

btnFacil.addEventListener("click", function() {
    seleccionarDificultad("Fácil", btnFacil);
});

btnMedio.addEventListener("click", function() {
    seleccionarDificultad("Medio", btnMedio);
});

btnDificil.addEventListener("click", function() {
    seleccionarDificultad("Difícil", btnDificil);
});

mostrarDesafios(desafios);
actualizarEstadisticas();

window.onload = function () {
    cargando = document.getElementById('cargando');

    setTimeout(function () {
        cargando.style.display = 'none';
    }, 4000);
};