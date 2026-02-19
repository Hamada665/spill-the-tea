// 1. LOGIQUE DU PUZZLE
function revealPiece(element, text) {
    if (!element.classList.contains('revealed')) {
        element.classList.add('revealed');
        element.innerText = text;
        updateGossipDisplay();
    }
}

function updateGossipDisplay() {
    const revealed = document.querySelectorAll('.puzzle-piece.revealed');
    const display = document.getElementById('assembledGossip');
    if (display) {
        let fullText = "";
        revealed.forEach(piece => {
            fullText += piece.innerText + " ";
        });
        display.innerText = fullText;
    }
}

// 2. GESTION DE LA MODAL (POP-OUT THÉS)
function openTea(teaKey) {
    const tea = teaData[teaKey];
    if (tea) {
        document.getElementById('modalTitle').innerText = tea.title;
        document.getElementById('modalStory').innerText = tea.story;
        document.getElementById('modalBenefits').innerText = tea.benefits;
        document.getElementById('teaModal').style.display = "block";
    }
}

function closeModal() {
    document.getElementById('teaModal').style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('teaModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
