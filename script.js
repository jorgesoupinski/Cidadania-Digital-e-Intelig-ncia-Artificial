// Seleção de elementos do DOM
const toggleBtn = document.getElementById('toggle-dark-mode');
const submitBtn = document.getElementById('submit-quiz');
const quizResult = document.getElementById('quiz-result');

// 1. Funcionalidade de Acessibilidade: Modo Escuro
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// 2. Funcionalidade do Quiz: Validação de dados e resposta dinâmica
submitBtn.addEventListener('click', () => {
    // Captura a opção selecionada usando o nome do input radio
    const selectedOption = document.querySelector('input[name="q1"]:checked');
    
    // Uso de variável para processar a informação antes de exibir (Requisito Nível 4)
    let mensagemFeedback = "";

    if (!selectedOption) {
        mensagemFeedback = "Por favor, selecione uma resposta antes de verificar!";
        quizResult.style.color = "orange";
    } else if (selectedOption.value === "correto") {
        mensagemFeedback = "🎉 Parabéns! Você acertou. Prestar atenção nos detalhes do rosto é crucial para detectar fraudes visuais.";
        quizResult.style.color = "green";
    } else {
        mensagemFeedback = "❌ Incorreto. As deepfakes costumam falhar em detalhes biológicos sutis, como o piscar de olhos.";
        quizResult.style.color = "red";
    }

    // Exibe o resultado manipulando o DOM e removendo a classe hidden
    quizResult.textContent = mensagemFeedback;
    quizResult.classList.remove('hidden');
});
