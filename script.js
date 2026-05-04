// Dados para a Central de Soluções
const informacoes = [
    { p: "Pragas", s: "Drones identificam focos de pragas, permitindo aplicação localizada e economia de recursos." },
    { p: "Água", s: "A hidroponia circula água enriquecida com nutrientes, gastando 90% menos que o solo." },
    { p: "Solo", s: "O plantio direto protege a terra com restos de colheitas anteriores, evitando a erosão." }
];

// Gerar Botões Automaticamente
const boxBotoes = document.getElementById('lista-problemas');
informacoes.forEach(item => {
    const b = document.createElement('button');
    b.innerText = item.p;
    b.onclick = () => {
        document.getElementById('texto-resposta').innerHTML = `<strong>Dica Técnica:</strong> ${item.s}`;
    };
    boxBotoes.appendChild(b);
});

// Funções de Interface
let zoomLevel = 1.0;
function alterarZoom(v) {
    zoomLevel = v === 1.1 ? zoomLevel + 0.05 : zoomLevel - 0.05;
    document.body.style.zoom = zoomLevel;
}

document.getElementById('btn-theme').onclick = () => {
    document.body.classList.toggle('dark-mode');
};

document.getElementById('btn-reset').onclick = () => {
    location.reload();
};

function verificarQuiz(acertou) {
    const feedback = document.getElementById('quiz-resultado');
    feedback.innerText = acertou ? "✅ Correto! A precisão evita o desperdício químico." : "❌ Quase lá! Pense na precisão do monitoramento.";
    feedback.style.color = acertou ? "#2d6a4f" : "#e74c3c";
}
