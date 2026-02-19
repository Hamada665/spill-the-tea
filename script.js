// 1. GESTION DU CURSEUR PERSONNALISÉ
const cursor = document.createElement('div');
cursor.id = 'custom-cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Effet de grossissement du curseur sur les éléments cliquables
document.querySelectorAll('a, button, .tea-card, .puzzle-piece').forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(3)';
        cursor.style.backgroundColor = 'rgba(212, 175, 110, 0.2)';
    });
    link.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.backgroundColor = 'transparent';
    });
});

// 2. RÉVÉLATION DES ÉLÉMENTS AU SCROLL
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(window_el => {
        const windowHeight = window.innerHeight;
        const revealTop = window_el.getBoundingClientRect().top;
        const revealPoint = 100;
        if (revealTop < windowHeight - revealPoint) {
            window_el.classList.add('active');
        }
    });
}
window.addEventListener('scroll', reveal);

// 3. LOGIQUE DU PUZZLE (GOSSIP ROOM)
function revealPiece(element, text) {
    if (!element.classList.contains('revealed')) {
        element.classList.add('revealed');
        // On attend la fin de l'animation de rotation pour changer le texte
        setTimeout(() => {
            element.innerText = text;
            updateGossipDisplay();
        }, 300);
    }
}

function updateGossipDisplay() {
    const revealed = document.querySelectorAll('.puzzle-piece.revealed');
    const display = document.getElementById('assembledGossip');
    if (display) {
        let fullText = "";
        revealed.forEach(piece => { fullText += piece.innerText + " "; });
        display.innerText = fullText;
    }
}

// 4. GESTION DE LA MODAL (NOS THÉS)
function openTea(teaKey) {
    // Les données teaData devraient être ici ou chargées
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
