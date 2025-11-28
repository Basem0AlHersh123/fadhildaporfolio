// Language switching functionality
document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", function () {
    // Update active state
    document
      .querySelectorAll(".lang-btn")
      .forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");

    const lang = this.getAttribute("data-lang");

    if (lang === "en") {
      // Update content to English
      document.documentElement.lang = "en";
      document.body.dir = "ltr";

      // Update hero section
      document.querySelector(".hero h1").textContent =
        "Fadhilah Ali Muqbel Al-Harash";
      document.querySelector(".hero h2").textContent =
        "Registered Midwife and Nurse";
      document.querySelector(".hero p").textContent =
        "Highly dedicated and experienced Registered Midwife and Nurse with over 7 years of practical experience in obstetrics, gynecology, maternal and child healthcare, and public health initiatives.";
      document.querySelector(".cta-button").textContent = "Download CV";

      // Update section titles
      document.querySelectorAll(".section-title h2")[0].textContent =
        "Education & Qualifications";
      document.querySelectorAll(".section-title h2")[1].textContent =
        "Professional Experience";
      document.querySelectorAll(".section-title h2")[2].textContent =
        "Core Competencies & Skills";
      document.querySelectorAll(".section-title h2")[3].textContent =
        "Training & Development";
      document.querySelectorAll(".section-title h2")[4].textContent =
        "Contact Information";

      // Update education cards
      document.querySelectorAll(".card-header-custom h3")[0].textContent =
        "Bachelor of Midwifery";
      document.querySelectorAll(".card-header-custom h3")[1].textContent =
        "Diploma in Midwifery and Obstetrics";
      document.querySelectorAll(".card-header-custom h3")[2].textContent =
        "General Secondary School Certificate";

      // Update experience timeline
      document.querySelectorAll(".timeline-item h4")[0].textContent =
        "Midwife/Nurse";
      document.querySelectorAll(".timeline-item h4")[1].textContent =
        "Midwife/Health Supervisor";
      document.querySelectorAll(".timeline-item h4")[2].textContent = "Midwife";
      document.querySelectorAll(".timeline-item h4")[3].textContent =
        "Legal Midwife";
      document.querySelectorAll(".timeline-item h4")[4].textContent =
        "Nurse/Attendant";

      // Update skills
      document.querySelectorAll(".skill-info span")[0].firstChild.textContent =
        "Clinical Midwifery & Obstetrics";
      document.querySelectorAll(".skill-info span")[2].firstChild.textContent =
        "Maternal & Child Health";
      document.querySelectorAll(".skill-info span")[4].firstChild.textContent =
        "Public Health & Outreach";
      document.querySelectorAll(".skill-info span")[6].firstChild.textContent =
        "Teamwork & Leadership";
      document.querySelectorAll(".skill-info span")[8].firstChild.textContent =
        "Technical Proficiency";

      // Update certificates
      document.querySelectorAll(".certificate-title")[0].textContent =
        "Refreshing Training Course for Midwives";
      document.querySelectorAll(".certificate-title")[1].textContent =
        "Training Course in Ultrasound";
      document.querySelectorAll(".certificate-title")[2].textContent =
        "English Language Courses";

      // Update contact items
      document.querySelectorAll(".contact-details h4")[0].textContent =
        "Phone Number";
      document.querySelectorAll(".contact-details h4")[1].textContent = "Email";
      document.querySelectorAll(".contact-details h4")[2].textContent =
        "WhatsApp";
      document.querySelectorAll(".contact-details h4")[3].textContent =
        "Location";

      // Update footer
      document.querySelector(".copyright").textContent =
        "© 2025 Fadhilah Al-Harash. All rights reserved.";

      // Update stats
      document.querySelectorAll(".stat-label")[0].textContent =
        "Years of Experience";
      document.querySelectorAll(".stat-label")[1].textContent =
        "Assisted Births";
      document.querySelectorAll(".stat-label")[2].textContent =
        "Health Campaigns";
      document.querySelectorAll(".stat-label")[3].textContent =
        "Qualifications";
    } else {
      // Update content to Arabic
      document.documentElement.lang = "ar";
      document.body.dir = "rtl";

      // Update hero section
      document.querySelector(".hero h1").textContent = "فضيلة علي مقبل الهرش";
      document.querySelector(".hero h2").textContent =
        "قابلة قانونية وممرضة مسجلة";
      document.querySelector(".hero p").textContent =
        "قابلة قانونية وممرضة مسجلة ذات تفانٍ وخبرة تزيد عن 7 سنوات في مجالات القبالة، أمراض النساء والتوليد، رعاية صحة الأم والطفل، والمبادرات الصحية العامة.";
      document.querySelector(".cta-button").textContent =
        "تحميل السيرة الذاتية";

      // Update section titles
      document.querySelectorAll(".section-title h2")[0].textContent =
        "المؤهلات العلمية";
      document.querySelectorAll(".section-title h2")[1].textContent =
        "الخبرة المهنية";
      document.querySelectorAll(".section-title h2")[2].textContent =
        "الكفاءات والمهارات";
      document.querySelectorAll(".section-title h2")[3].textContent =
        "التدريب والمشاركات";
      document.querySelectorAll(".section-title h2")[4].textContent =
        "معلومات الاتصال";

      // Update education cards
      document.querySelectorAll(".card-header-custom h3")[0].textContent =
        "بكالوريوس قبالة";
      document.querySelectorAll(".card-header-custom h3")[1].textContent =
        "دبلوم قبالة وتوليد";
      document.querySelectorAll(".card-header-custom h3")[2].textContent =
        "شهادة الثانوية العامة";

      // Update experience timeline
      document.querySelectorAll(".timeline-item h4")[0].textContent =
        "قابلة / ممرضة";
      document.querySelectorAll(".timeline-item h4")[1].textContent =
        "قابلة / مشرفة صحية";
      document.querySelectorAll(".timeline-item h4")[2].textContent = "قابلة";
      document.querySelectorAll(".timeline-item h4")[3].textContent =
        "قابلة قانونية";
      document.querySelectorAll(".timeline-item h4")[4].textContent =
        "ممرضة / مُعَرِّضة";

      // Update skills
      document.querySelectorAll(".skill-info span")[0].firstChild.textContent =
        "القبالة السريرية والتوليد";
      document.querySelectorAll(".skill-info span")[2].firstChild.textContent =
        "صحة الأم والطفل";
      document.querySelectorAll(".skill-info span")[4].firstChild.textContent =
        "الصحة العامة والتوعية";
      document.querySelectorAll(".skill-info span")[6].firstChild.textContent =
        "العمل الجماعي والقيادة";
      document.querySelectorAll(".skill-info span")[8].firstChild.textContent =
        "الكفاءة التقنية";

      // Update certificates
      document.querySelectorAll(".certificate-title")[0].textContent =
        "دورة تدريبية تنشيطية للقابلات";
      document.querySelectorAll(".certificate-title")[1].textContent =
        "دورة في الأشعة التلفزيونية";
      document.querySelectorAll(".certificate-title")[2].textContent =
        "دورات في اللغة الإنجليزية";

      // Update contact items
      document.querySelectorAll(".contact-details h4")[0].textContent =
        "رقم الهاتف";
      document.querySelectorAll(".contact-details h4")[1].textContent =
        "البريد الإلكتروني";
      document.querySelectorAll(".contact-details h4")[2].textContent =
        "واتساب";
      document.querySelectorAll(".contact-details h4")[3].textContent =
        "الموقع";

      // Update footer
      document.querySelector(".copyright").textContent =
        "© 2025 فضيلة الهرش. جميع الحقوق محفوظة.";

      // Update stats
      document.querySelectorAll(".stat-label")[0].textContent = "سنوات خبرة";
      document.querySelectorAll(".stat-label")[1].textContent = "ولادة مساعدة";
      document.querySelectorAll(".stat-label")[2].textContent = "حملات صحية";
      document.querySelectorAll(".stat-label")[3].textContent = "مؤهلات علمية";
    }
  });
});

// Animate skill bars when they come into view
function animateSkillBars() {
  const skillBars = document.querySelectorAll(".skill-progress span");
  skillBars.forEach((bar) => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      const width = bar.style.getPropertyValue("--width");
      bar.style.width = width;
    }
  });
}

// Add flip effect to certificate cards (on hover)
document.querySelectorAll(".certificate-card").forEach((card) => {
  // Flip on mouse enter
  card.addEventListener("mouseenter", function () {
    this.classList.add("flipped");
  });

  // Return to original state on mouse leave
  card.addEventListener("mouseleave", function () {
    this.classList.remove("flipped");
  });
});

// Initial check on page load
window.addEventListener("load", animateSkillBars);
window.addEventListener("scroll", animateSkillBars);
