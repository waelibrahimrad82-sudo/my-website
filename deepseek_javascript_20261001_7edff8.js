// رسالة ترحيب عند فتح الصفحة
console.log("مرحباً بك في موقعي!");

// التفاعل مع الزر
const btn = document.getElementById("myBtn");
const message = document.getElementById("message");

btn.addEventListener("click", () => {
    message.textContent = "🎉 شكراً لضغطك على الزر!";
    message.style.color = "#fff";
    message.style.marginTop = "15px";
    message.style.fontSize = "20px";
});

// تمرير سلس بين الأقسام
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});