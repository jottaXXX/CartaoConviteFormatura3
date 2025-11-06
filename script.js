// Página do envelope
if (document.getElementById('envelope')) {
    const envelope = document.getElementById('envelope');
    const seal = document.getElementById('seal');
    const tooltip = document.getElementById('tooltip');

    // Mostrar tooltip após 700ms
    setTimeout(() => {
        tooltip.classList.add('show');
    }, 700);

    // Função para abrir envelope
    function openEnvelope() {
        if (envelope.classList.contains('opening')) return;
        
        // Esconder tooltip
        tooltip.classList.remove('show');
        
        // Adicionar classe de abertura
        envelope.classList.add('opening');
        seal.classList.add('breaking');
        
        // Navegar para página de detalhes após animação
        setTimeout(() => {
            window.location.href = 'detalhes.html';
        }, 1600);
    }

    // Event listeners
    seal.addEventListener('click', openEnvelope);
    
    seal.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openEnvelope();
        }
    });
}

// Animações suaves ao rolar (página de detalhes)
if (document.querySelector('.details-container')) {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.info-card, .map-container').forEach(el => {
        observer.observe(el);
    });
}