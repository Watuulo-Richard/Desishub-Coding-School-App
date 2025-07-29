// Initialize Lucide icons
document.addEventListener("DOMContentLoaded", function () {
  lucide.createIcons();

  // Initialize all interactive components
  initNavigation();
  initTestimonials();
  initFAQ();
  initContactForm();
  initScrollAnimations();
  initSmoothScrolling();
});

// FAQ accordion functionality
function initFAQ() {
  const faqButtons = document.querySelectorAll(".faq-button");

  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const faqItem = button.closest(".faq-item");
      const content = faqItem.querySelector(".faq-content");
      const icon = button.querySelector(".faq-icon");

      // Close all other FAQ items
      faqButtons.forEach((otherButton) => {
        if (otherButton !== button) {
          const otherItem = otherButton.closest(".faq-item");
          const otherContent = otherItem.querySelector(".faq-content");
          const otherIcon = otherButton.querySelector(".faq-icon");

          otherContent.classList.add("hidden");
          otherIcon.style.transform = "rotate(0deg)";
        }
      });

      // Toggle current FAQ item
      if (content.classList.contains("hidden")) {
        content.classList.remove("hidden");
        icon.style.transform = "rotate(180deg)";
      } else {
        content.classList.add("hidden");
        icon.style.transform = "rotate(0deg)";
      }
    });
  });
}

// Testimonials carousel
function initTestimonials() {
  const testimonials = [
    {
      quote: "DesishHub's custom POS solution transformed our operations. The team's expertise in both healthcare workflows and mobile development is exceptional.",
      name: "Sarah Nakimuli",
      position: "CEO, Agape Pharmacy",
      company: "Agape Pharmacy",
      avatar: "SN",
      project: "Healthcare POS System",
      rating: 5,
    },
    {
      quote: "Working with DesishHub was a game-changer for our e-commerce platform. They delivered a solution that exceeded our expectations and drove real business results.",
      name: "James Okello",
      position: "Founder, Kyaja",
      company: "Kyaja E-commerce",
      avatar: "JO",
      project: "E-commerce Platform",
      rating: 5,
    },
    {
      quote: "The advertising platform DesishHub built for us handles thousands of users seamlessly. Their technical expertise and attention to detail is outstanding.",
      name: "Mary Asiimwe",
      position: "CTO, Rwoma",
      company: "Rwoma Ad Platform",
      avatar: "MA",
      project: "AdTech Platform",
      rating: 5,
    },
  ];

  let currentTestimonial = 0;

  const testimonialQuote = document.getElementById("testimonial-quote");
  const testimonialName = document.getElementById("testimonial-name");
  const testimonialPosition = document.getElementById("testimonial-position");
  const testimonialCompany = document.getElementById("testimonial-company");
  const testimonialAvatar = document.getElementById("testimonial-avatar");
  const testimonialProject = document.getElementById("testimonial-project");
  const testimonialRating = document.getElementById("testimonial-rating");
  const testimonialDots = document.querySelectorAll(".testimonial-dot");

  function updateTestimonial(index) {
    const testimonial = testimonials[index];

    // Add fade out effect
    const card = document.getElementById("testimonial-card");
    card.style.opacity = "0.5";

    setTimeout(() => {
      testimonialQuote.textContent = testimonial.quote;
      testimonialName.textContent = testimonial.name;
      testimonialPosition.textContent = testimonial.position;
      testimonialCompany.textContent = testimonial.company;
      testimonialAvatar.textContent = testimonial.avatar;
      testimonialProject.textContent = testimonial.project;

      // Update rating
      testimonialRating.innerHTML = "★".repeat(testimonial.rating);

      // Update dots
      testimonialDots.forEach((dot, i) => {
        if (i === index) {
          dot.classList.add("active");
          dot.classList.remove("bg-opacity-30");
        } else {
          dot.classList.remove("active");
          dot.classList.add("bg-opacity-30");
        }
      });

      // Fade back in
      card.style.opacity = "1";
    }, 150);
  }

  // Navigation buttons
  document.getElementById("prev-testimonial").addEventListener("click", () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentTestimonial);
  });

  document.getElementById("next-testimonial").addEventListener("click", () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial(currentTestimonial);
  });

  // Dot navigation
  testimonialDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentTestimonial = index;
      updateTestimonial(currentTestimonial);
    });
  });

  // Auto-rotate testimonials
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial(currentTestimonial);
  }, 8000);
}

// Interactive Services Section
function initServices() {
  const servicesContainer = document.getElementById("services-container");
  const serviceDots = document.querySelectorAll(".service-dot");
  let currentServiceCard = 4;

  function updateServiceCard(cardNumber) {
    // Update container class
    servicesContainer.className = `services-stack card-${cardNumber}-active`;

    // Update dots
    serviceDots.forEach((dot, index) => {
      if (index + 1 === cardNumber) {
        dot.classList.add("bg-white", "scale-125");
        dot.classList.remove("bg-gray-600");
      } else {
        dot.classList.remove("bg-white", "scale-125");
        dot.classList.add("bg-gray-600");
      }
    });

    // Update features text based on active card
    const features = document.getElementById("service-features");
    const featureTexts = {
      1: [
        "Advanced machine learning algorithms",
        "Predictive analytics capabilities",
        "Real-time data processing",
        "Custom reporting dashboards",
      ],
      2: [
        "Automated resource allocation",
        "Performance monitoring tools",
        "Scalable infrastructure design",
        "Load balancing optimization",
      ],
      3: [
        "Workflow automation engine",
        "Integration with existing systems",
        "Custom business logic",
        "Process optimization tools",
      ],
      4: [
        "AI-powered analytics platform",
        "Real-time optimization engine",
        "Intelligent automation tools",
        "Comprehensive reporting suite",
      ],
    };

    features.innerHTML = featureTexts[cardNumber]
      .map(
        (text) => `
      <div class="flex items-center gap-3">
        <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
        <span>${text}</span>
      </div>
    `
      )
      .join("");

    currentServiceCard = cardNumber;
  }

  // Add click handlers to service dots
  serviceDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      updateServiceCard(index + 1);
    });
  });

  // Auto-rotate service cards every 6 seconds
  setInterval(() => {
    const nextCard = currentServiceCard === 4 ? 1 : currentServiceCard + 1;
    updateServiceCard(nextCard);
  }, 6000);
}

// Multi-step form functionality
function initContactForm() {
  let currentStep = 1;
  const totalSteps = 4;

  const stepTexts = {
    1: "Basic Information",
    2: "Project Type",
    3: "Budget & Timeline",
    4: "Project Details",
  };

  function updateProgress() {
    const progressFill = document.getElementById("progress-fill");
    const currentStepSpan = document.getElementById("current-step");
    const progressText = document.getElementById("progress-text");

    const progressPercent = (currentStep / totalSteps) * 100;
    progressFill.style.width = progressPercent + "%";
    currentStepSpan.textContent = currentStep;
    progressText.textContent = stepTexts[currentStep];
  }

  function showStep(step) {
    // Hide all steps
    document.querySelectorAll(".form-step").forEach((stepEl) => {
      stepEl.classList.remove("active");
    });

    // Show current step
    document.getElementById(`step-${step}`).classList.add("active");

    // Update navigation buttons
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const submitBtn = document.getElementById("submit-btn");

    prevBtn.disabled = step === 1;

    if (step === totalSteps) {
      nextBtn.classList.add("hidden");
      submitBtn.classList.remove("hidden");
    } else {
      nextBtn.classList.remove("hidden");
      submitBtn.classList.add("hidden");
    }

    updateProgress();
  }

  function validateStep(step) {
    switch (step) {
      case 1:
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        return name !== "" && email !== "" && email.includes("@");

      case 2:
        return document.getElementById("project-type").value !== "";

      case 3:
        const budget = document.getElementById("budget").value;
        const timeline = document.getElementById("timeline").value;
        return budget !== "" && timeline !== "";

      case 4:
        return document.getElementById("description").value.trim() !== "";

      default:
        return true;
    }
  }

  // Option button handlers
  function setupOptionButtons(containerId, hiddenInputId) {
    const container = document.getElementById(containerId);
    const hiddenInput = document.getElementById(hiddenInputId);

    container.querySelectorAll(".option-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();

        // Remove selected class from all buttons in this container
        container.querySelectorAll(".option-btn").forEach((b) => {
          b.classList.remove("selected");
        });

        // Add selected class to clicked button
        btn.classList.add("selected");

        // Update hidden input
        hiddenInput.value = btn.dataset.value;
      });
    });
  }

  // Setup option buttons for each step
  setupOptionButtons("project-type-options", "project-type");
  setupOptionButtons("budget-options", "budget");
  setupOptionButtons("timeline-options", "timeline");

  // Navigation button handlers
  document.getElementById("prev-btn").addEventListener("click", () => {
    if (currentStep > 1) {
      currentStep--;
      showStep(currentStep);
    }
  });

  document.getElementById("next-btn").addEventListener("click", () => {
    if (validateStep(currentStep)) {
      if (currentStep < totalSteps) {
        currentStep++;
        showStep(currentStep);
      }
    } else {
      alert("Please fill in all required fields before continuing.");
    }
  });

  // Form submission
  document.getElementById("multi-step-form").addEventListener("submit", (e) => {
    e.preventDefault();

    if (validateStep(currentStep)) {
      // Collect all form data
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        company: document.getElementById("company").value,
        projectType: document.getElementById("project-type").value,
        budget: document.getElementById("budget").value,
        timeline: document.getElementById("timeline").value,
        description: document.getElementById("description").value,
        referral: document.getElementById("referral").value,
      };

      console.log("Form submitted:", formData);
      alert(
        `Thank you, ${formData.name}! We've received your project inquiry and will get back to you within 24 hours.`
      );

      // Reset form
      document.getElementById("multi-step-form").reset();
      document.querySelectorAll(".option-btn").forEach((btn) => {
        btn.classList.remove("selected");
      });
      document.querySelectorAll('input[type="hidden"]').forEach((input) => {
        input.value = "";
      });

      currentStep = 1;
      showStep(currentStep);
    } else {
      alert("Please fill in all required fields.");
    }
  });

  // Initialize form
  showStep(currentStep);
}

// Scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
      }
    });
  }, observerOptions);

  // Add animation classes to elements
  const animatedElements = document.querySelectorAll(".card-hover, .glass-effect");
  animatedElements.forEach((el) => {
    el.classList.add("animate-on-scroll");
    observer.observe(el);
  });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 100; // Account for fixed navbar

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
}

// Utility function for smooth scrolling to sections
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    const offsetTop = element.offsetTop - 100;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
}

// Add loading animation to cards
function addLoadingAnimation() {
  const cards = document.querySelectorAll(".glass-effect");

  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    card.classList.add("animate-fade-in");
  });
}

// Initialize loading animations when page loads
window.addEventListener("load", () => {
  addLoadingAnimation();
});

// Mobile navigation toggle
function initNavigation() {
  const nav = document.querySelector("nav");
  if (!nav) return;

  const navToggle = document.createElement("button");
  navToggle.innerHTML = '<i class="fas fa-bars"></i>';
  navToggle.className = "md:hidden text-white ml-4";
  nav.querySelector(".flex").appendChild(navToggle);

  navToggle.addEventListener("click", () => {
    const navLinks = nav.querySelector(".hidden.md\\:flex");
    navLinks.classList.toggle("hidden");
    navLinks.classList.toggle("flex");
    navLinks.classList.toggle("flex-col");
    navLinks.classList.toggle("absolute");
    navLinks.classList.toggle("top-full");
    navLinks.classList.toggle("left-0");
    navLinks.classList.toggle("right-0");
    navLinks.classList.toggle("bg-charcoal");
    navLinks.classList.toggle("p-4");
    navLinks.classList.toggle("rounded-b-2xl");
  });
}

// Export functions for Next.js
export {
  initFAQ,
  initTestimonials,
  initServices,
  initContactForm,
  initScrollAnimations,
  initSmoothScrolling,
  scrollToSection,
  addLoadingAnimation,
  initNavigation
};