
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("drop-area");
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission
    
        const files = document.getElementById("file").files;
        lines = []
    
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();
    
            reader.onload = () => {
                const fileContent = reader.result;
                lines = fileContent.split('\r\n');
                
                if (lines.length > 1) {
                    const mainDiv = document.getElementById('main');
                    mainDiv.classList.add('fade-out');
                    setTimeout(() => {
                        localStorage.setItem('lines', JSON.stringify(lines));
                        window.location.href = "game.html";
                    }, 500);
                }
            };
    
            reader.readAsText(file);
        }
    });
});
