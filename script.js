// Base de données de tes thés (L'IA nous aide pour le contenu !)
const teaData = {
    'hibiscus': {
        title: "Hibiscus Tea",
        story: "Inspiré des rituels égyptiens, ce thé aux reflets rubis est le secret des soirées mystérieuses.",
        benefits: "Riche en vitamine C, aide à réduire la tension et booste l'éclat de la peau."
    },
    'blueberry': {
        title: "Blueberry Tea",
        story: "Une escapade sauvage dans les forêts nordiques. Chaque baie cache une confidence.",
        benefits: "Puissant antioxydant, améliore la mémoire et la concentration."
    },
    'jasmine': {
        title: "Jasmine",
        story: "Un parfum délicat qui rappelle les jardins suspendus au clair de lune.",
        benefits: "Apaise l'esprit, réduit le stress et améliore l'humeur."
    },
    'chamomile': {
        title: "Chamomile",
        story: "Le calme après la tempête. Le thé favori de ceux qui savent garder un secret.",
        benefits: "Aide au sommeil, facilite la digestion et relaxe les muscles."
    }
    // Tu pourras ajouter les autres (Mint, Black, etc.) sur le même modèle !
};
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
// Fermer la modal si on clique en dehors de la boîte
window.onclick = function(event) {
    const modal = document.getElementById('teaModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
let discoveredSecrets = ["_", "_", "_", "_", "_", "_", "_", "_", "_"];
function revealPiece(element, text) {
    // Si la pièce n'a pas encore été révélée
    if (!element.classList.contains('revealed')) {
        element.classList.add('revealed');
        element.innerText = text;
        // On pourrait ici ajouter une logique pour construire le texte global
        updateGossipDisplay();
    }
}
function updateGossipDisplay() {
    const revealed = document.querySelectorAll('.puzzle-piece.revealed');
    const display = document.getElementById('assembledGossip');
    if (revealed.length === 0) {
        display.innerText = "Le secret attend d'être découvert...";
    } else {
        // On récupère le texte de toutes les pièces révélées
        let fullText = "";
        revealed.forEach(piece => {
            fullText += piece.innerText + " ";
        });
        display.innerText = fullText;
    }
}
