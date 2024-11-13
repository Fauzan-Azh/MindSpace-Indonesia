document.addEventListener('DOMContentLoaded', () => {
    
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    const feedbackForm = document.getElementById('feedbackForm');
    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = feedbackForm.querySelector('input[placeholder="Nama"]').value;
        const email = feedbackForm.querySelector('input[placeholder="Email"]').value;
        const message = feedbackForm.querySelector('textarea[placeholder="Pesan"]').value;

        if (name && email && message) {
            alert('Terima kasih atas pendapatmu, ' + name + '! Kami sangat antusias.');
            feedbackForm.reset();
        } else {
            alert('Silakan isi semua bidang formulir.');
        }
    });
});
