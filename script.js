const typewriterText = "Welcome to my personal website";
let charIndex = 0;

const typewriterElement = document.getElementById("typewriter");

function typeEffect() {
  // تحديث النص المعروض بناءً على الفهرس الحالي
  typewriterElement.textContent = typewriterText.slice(0, charIndex);

  // زيادة الفهرس
  charIndex++;

  // إيقاف الأنيميشن عند انتهاء النص
  if (charIndex <= typewriterText.length) {
    setTimeout(typeEffect, 100); // استدعاء الدالة كل 100 مللي ثانية
  }
}

// بدء الأنيميشن
typeEffect();
let currentIndex = 0;
const carousel = document.querySelector('.carousel');
const totalSlides = document.querySelectorAll('.carousel-item').length;

// تغيير الصورة عند الضغط على الأزرار
function changeSlide(direction) {
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  updateSlidePosition();
}

// تحريك الصور تلقائيًا
function autoSlide() {
  changeSlide(1);
  setTimeout(autoSlide, 3000); // الانتقال كل 3 ثوانٍ
}

// تحديث موضع الصور
function updateSlidePosition() {
  const offset = -currentIndex * 100; // الإزاحة بناءً على الفهرس
  carousel.style.transform = `translateX(${offset}%)`;
}

// Tab switch for skills
function showCategory(category) {
  const tabs = document.querySelectorAll('.tab-button');
  const categories = document.querySelectorAll('.skills-category');

  // إزالة الحالة النشطة من جميع الأزرار والأقسام
  tabs.forEach(tab => tab.classList.remove('active'));
  categories.forEach(cat => cat.classList.remove('active'));

  // إضافة الحالة النشطة للزر والقسم المطلوب
  document.getElementById(category).classList.add('active');
  const activeTab = document.querySelector(`.tab-button[onclick="showCategory('${category}')"]`);
  
  if (activeTab) {
    activeTab.classList.add('active');
  }
}
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const totalMessages = document.querySelectorAll("#messages h1").length;
  const animationDuration = totalMessages * 200; // 0.3 ثانية لكل كلمة

  setTimeout(() => {
    loader.classList.add("hidden");
  }, animationDuration);
});
document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper('.swiper-container', {
    loop: true, // السلايدر يعمل بشكل دائري
    slidesPerView: 1, // عدد الصور التي تظهر في نفس الوقت (يمكنك تغييره)
    spaceBetween: 20, // المسافة بين الصور
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 1000, // مدة ظهور كل صورة (بالملي ثانية)
      disableOnInteraction: false,
    },
    effect: 'slide', // التأثير الافتراضي للسحب الأفقي
  });
});
const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawLines() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(50, 50);
  ctx.lineTo(canvas.width - 50, canvas.height - 50);
  ctx.strokeStyle = '#00ff00'; // لون الخط
  ctx.lineWidth = 2;
  ctx.stroke();
  requestAnimationFrame(drawLines);
}

drawLines();
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const elements = document.querySelectorAll('.hidden');

window.addEventListener('scroll', () => {
  elements.forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      element.classList.add('visible');
    }
  });
});
