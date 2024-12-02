document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    let score = 0; // Inicializa el puntaje
    const answers = {
        q1: 'b', // Respuesta correcta para la pregunta 1
        q2: 'b', // Respuesta correcta para la pregunta 2
        q3: 'b'  // Respuesta correcta para la pregunta 3
    };

    // Verifica las respuestas seleccionadas
    for (let question in answers) {
        const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === answers[question]) {
            score++;
        }
    }

    // Muestra el resultado
    const resultDiv = document.getElementById('result');
    
    resultDiv.innerHTML = `Tu puntaje es ${score} de ${Object.keys(answers).length}.`;

    // Mensajes adicionales según el puntaje
    if (score === Object.keys(answers).length) {
        resultDiv.innerHTML += "<br>¡Excelente trabajo! Has respondido todas las preguntas correctamente.";
    } else if (score > 0) {
        resultDiv.innerHTML += "<br>No está mal, pero puedes mejorar. ¡Inténtalo de nuevo!";
    } else {
        resultDiv.innerHTML += "<br>Parece que necesitas repasar los conceptos. ¡Sigue practicando!";
    }
});