// Arreglo de ejercicios de Fitness
const fitnessExercises = [
    {
        name: "Crunches",
        repetitions: 20,
        difficulty: "Intermedio"
    },
    {
        name: "Flexiones",
        repetitions: 15,
        difficulty: "Avanzado"
    },
    {
        name: "Plancha",
        repetitions: 30,
        difficulty: "Intermedio"
    },
    {
        name: "Sentadillas",
        repetitions: 25,
        difficulty: "Intermedio"
    },
    {
        name: "Saltoscuerda",
        repetitions: 30,
        difficulty: "Avanzado"
    }
];

// Arreglo de ejercicios de Acondicionamiento Físico
const conditioningExercises = [
    {
        name: "Bicicleta",
        repetitions: 30,
        difficulty: "Avanzado"
    },
    {
        name: "Zancada",
        repetitions: 20,
        difficulty: "Intermedio"
    },
    {
        name: "Skierg",
        repetitions: 25,
        difficulty: "Intermedio"
    },
    {
        name: "Remo",
        repetitions: 25,
        difficulty: "Intermedio"
    },
    {
        name: "Bosu",
        repetitions: 20,
        difficulty: "Intermedio"
    }
];

// Objeto principal que contiene los arreglos de ejercicios por categoría
const exercises = {
    Fitness: fitnessExercises,
    "Acondicionamiento Físico": conditioningExercises
};

// Función para mostrar los detalles de un ejercicio al hacer clic en la tarjeta
function showExerciseDetails(category, index) {
    const exercise = exercises[category][index];
    alert(`Ejercicio: ${exercise.name}\nRepeticiones: ${exercise.repetitions}\nDificultad: ${exercise.difficulty}`);
}
