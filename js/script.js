// Add lightbox functionality for gallery images
document.addEventListener('click', function(e) {
    if (e.target.matches('.gallery-grid img')) {
        const imgSrc = e.target.src;
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            cursor: pointer;
        `;
        
        const enlarged = document.createElement('img');
        enlarged.src = imgSrc;
        enlarged.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            border-radius: 10px;
        `;
        
        overlay.appendChild(enlarged);
        overlay.onclick = () => overlay.remove();
        document.body.appendChild(overlay);
    }
});