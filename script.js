// ==========================================================================
// SELEÇÃO DE ELEMENTOS DO DOM
// ==========================================================================
const toggleBtn = document.getElementById('toggle-dark-mode');
const submitBtn = document.getElementById('submit-quiz');
const quizResult = document.getElementById('quiz-result');

// ==========================================================================
// FUNCTIONALIDADE 1: ACESSIBILIDADE (MODO ESCURO)
// ==========================================================================
toggleBtn.addEventListener('click', () => {
    // Liga/desliga a classe 'dark-mode' no body da página
    document.body.classList.toggle('dark-mode');
});

// ==========================================================================
// FUNCTIONALIDADE 2: VALIDAÇÃO DO QUIZ ANTI-DESINFORMAÇÃO
// ==========================================================================
submitBtn.addEventListener('click', () => {
    // Captura a opção de resposta selecionada pelo utilizador
    const selectedOption = document.querySelector('input[name="q1"]:checked');
    
    // Variável para processar a informação antes de exibir no ecrã (Requisito Nível 4)
    let mensagemFeedback = "";

    // Verifica a resposta e define o feedback dinâmico
    if (!selectedOption) {
        mensagemFeedback = "Por favor, seleciona uma resposta antes de verificar!";
        quizResult.style.color = "orange";
    } else if (selectedOption.value === "correto") {
        mensagemFeedback = "🎉 Parabéns! Acertaste. Prestar atenção nos detalhes do rosto e piscadas de olhos é crucial para detetar fraudes visuais.";
        quizResult.style.color = "green";
    } else {
        mensagemFeedback = "❌ Incorreto. As deepfakes costumam falhar em detalhes biológicos sutis, como a frequência com que o rosto pisca.";
        quizResult.style.color = "red";
    }

    // Manipula o DOM para atualizar o texto e exibir a div de resultado
    quizResult.textContent = mensagemFeedback;
    quizResult.classList.remove('hidden');
});
