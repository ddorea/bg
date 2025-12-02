document.getElementById("year").textContent = new Date().getFullYear();

// Menu mobile
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

// Fecha menu ao clicar em algum link (mobile)
navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});

// Copiar e-mail
const copyBtn = document.getElementById("copyEmailBtn");
const emailText = document.getElementById("emailText").textContent.trim();
const copyStatus = document.getElementById("copyStatus");

copyBtn.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(emailText);
        copyStatus.textContent = "E-mail copiado para a área de transferência!";
        setTimeout(() => (copyStatus.textContent = ""), 2500);
    } catch (err) {
        copyStatus.textContent =
            "Não foi possível copiar automaticamente. Selecione o e-mail e copie manualmente.";
    }
});