// Seleção dos elementos do DOM
const toggleBtn = document.getElementById('toggle-dark-mode');
const submitBtn = document.getElementById('submit-quiz');
const quizResult = document.getElementById('quiz-result');

// Alternador de Modo Escuro (Acessibilidade)
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Processamento do Quiz com Múltiplas Variáveis (Requisito Nível 4)
submitBtn.addEventListener('click', () => {
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    
    // Validação: se o usuário esqueceu de responder alguma
    if (!q1 || !q2) {
        quizResult.textContent = "⚠️ Por favor, responda a todas as perguntas antes de enviar!";
        quizResult.className = "shadow-box warning";
        return;
    }
    
    // Contagem de pontos básica por variáveis
    let acertos = 0;
    if (q1.value === "correto") acertos++;
    if (q2.value === "correto") acertos++;
    
    // Processamento da resposta dinâmica antes de exibir
    if (acertos === 2) {
        quizResult.textContent = "🎉 Incrível! Você acertou 2/2. Você é um cidadão digital consciente e sabe se proteger contra deepfakes!";
        quizResult.className = "shadow-box success";
    } else if (acertos === 1) {
        quizResult.textContent = "👍 Você acertou 1/2. Bom começo, mas fique atento aos pequenos detalhes para não ser enganado.";
        quizResult.className = "shadow-box attention";
    } else {
        quizResult.textContent = "❌ Você acertou 0/2. Cuidado! Revise o nosso guia técnico acima para entender os perigos das deepfakes.";
        quizResult.className = "shadow-box danger";
    }
});
