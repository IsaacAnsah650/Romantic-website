document.addEventListener('DOMContentLoaded', function() {
    if (document.body.classList.contains('question-page')) {
        const yesBtn = document.getElementById('yes-btn');
        const noBtn = document.getElementById('no-btn');
        const message = document.getElementById('dynamic-message');
        let noCount = 0;
        
        const messages = [
            "C'mon gal please...",
            "Don't do this to me!",
            "I'll be really sad!",
            "You're breaking my heart!",
            "I made this whole website for you!",
            "Pretty please with sugar on top?",
            "I'll never ask again! (jk I totally will)",
            "You're being mean now!",
            "I'm gonna cry real tears!",
            "Okay, last chance to say yes!"
        ];
        
        yesBtn.addEventListener('click', function() {
            // Create emoji explosion
            createEmojiExplosion();
            
            // After explosion, go to final page
            setTimeout(() => {
                document.body.classList.add('fade-out');
                setTimeout(() => {
                    window.location.href = 'response.html';
                }, 800);
            }, 2000);
        });
        
        noBtn.addEventListener('click', function() {
            noCount++;
            
            if (noCount < messages.length) {
                message.textContent = messages[noCount];
                
                // Move button randomly
                const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 100) + 50;
                const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 100) + 50;
                
                noBtn.style.position = 'absolute';
                noBtn.style.left = x + 'px';
                noBtn.style.top = y + 'px';
                
                // Make button smaller each time
                noBtn.style.transform = `scale(${1 - (noCount * 0.05)})`;
            } else {
                // After 10 times, make NO button disappear
                noBtn.style.transition = 'all 1s ease';
                noBtn.style.transform = 'scale(0)';
                noBtn.style.opacity = '0';
                
                // Change message to final plea
                message.textContent = "You can't do this to me...";
                
                // Remove button after animation
                setTimeout(() => {
                    noBtn.remove();
                }, 1000);
            }
        });
    }
});

function createEmojiExplosion() {
    const emojis = ['❤️', '💖', '🥰', '😍', '💕', '😘', '💘', '💝', '💓', '💗'];
    const container = document.querySelector('.container');
    
    for (let i = 0; i < 100; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'emoji';
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        
        // Random position
        const x = Math.random() * window.innerWidth;
        emoji.style.left = x + 'px';
        emoji.style.bottom = '0';
        
        // Random animation duration
        emoji.style.animationDuration = (Math.random() * 2 + 1) + 's';
        
        document.body.appendChild(emoji);
        
        // Remove emoji after animation
        setTimeout(() => {
            emoji.remove();
        }, 3000);
    }
}