"use client";

import { useEffect } from "react";

const contactEmail = "navodhyasenali@gmail.com";

export default function PortfolioInteractions() {
  useEffect(() => {
    const cleanups = [];
    const listen = (element, event, handler) => {
      if (!element) return;
      element.addEventListener(event, handler);
      cleanups.push(() => element.removeEventListener(event, handler));
    };

    const navToggle = document.getElementById("navToggle");
    const navigation = document.getElementById("primaryNavigation");
    const navIcon = navToggle?.querySelector("i");

    const closeNavigation = () => {
      navigation?.classList.remove("is-open");
      navToggle?.setAttribute("aria-expanded", "false");
      if (navIcon) navIcon.className = "bx bx-menu";
    };

    listen(navToggle, "click", () => {
      const isOpen = navigation?.classList.toggle("is-open") ?? false;
      navToggle.setAttribute("aria-expanded", String(isOpen));
      if (navIcon) navIcon.className = isOpen ? "bx bx-x" : "bx bx-menu";
    });
    navigation?.querySelectorAll("a").forEach((link) => {
      listen(link, "click", closeNavigation);
    });
    const closeNavigationOnResize = () => {
      if (window.innerWidth > 768) closeNavigation();
    };
    listen(window, "resize", closeNavigationOnResize);

    document.querySelectorAll(".letter-filter-btn").forEach((button) => {
      listen(button, "click", () => {
        const category = button.getAttribute("data-filter");
        document.querySelectorAll(".letter-filter-btn").forEach((item) => {
          item.classList.remove("active", "bg-blue-500", "text-white");
        });
        button.classList.add("active", "bg-blue-500", "text-white");
        document.querySelectorAll(".letter-card").forEach((card) => {
          card.classList.toggle(
            "hidden",
            category !== "all" && card.getAttribute("data-category") !== category,
          );
        });
      });
    });

    const projectTrack = document.getElementById("projectGrid");
    const carousel = document.querySelector(".project-carousel");
    const projectStatus = document.getElementById("projectsStatus");
    let isMoving = false;
    let carouselTimer;

    const projectStep = () => {
      const firstCard = projectTrack?.querySelector(".project-card");
      if (!firstCard || !projectTrack) return 0;
      return (
        firstCard.getBoundingClientRect().width +
        parseFloat(getComputedStyle(projectTrack).gap || "0")
      );
    };

    const moveNext = () => {
      if (isMoving || !projectTrack?.firstElementChild) return;
      isMoving = true;
      projectTrack.style.transform = `translateX(-${projectStep()}px)`;
      const finishMove = () => {
        projectTrack.appendChild(projectTrack.firstElementChild);
        projectTrack.style.transition = "none";
        projectTrack.style.transform = "translateX(0)";
        projectTrack.offsetHeight;
        projectTrack.style.transition = "";
        isMoving = false;
      };
      projectTrack.addEventListener("transitionend", finishMove, { once: true });
    };

    const movePrevious = () => {
      if (isMoving || !projectTrack?.lastElementChild) return;
      isMoving = true;
      projectTrack.style.transition = "none";
      projectTrack.prepend(projectTrack.lastElementChild);
      projectTrack.style.transform = `translateX(-${projectStep()}px)`;
      projectTrack.offsetHeight;
      projectTrack.style.transition = "";
      requestAnimationFrame(() => {
        projectTrack.style.transform = "translateX(0)";
      });
      projectTrack.addEventListener(
        "transitionend",
        () => {
          isMoving = false;
        },
        { once: true },
      );
    };

    const stopCarousel = () => window.clearInterval(carouselTimer);
    const startCarousel = () => {
      stopCarousel();
      carouselTimer = window.setInterval(moveNext, 4000);
    };
    const restartCarousel = () => startCarousel();

    const previousButton = document.getElementById("projectsPrevious");
    const nextButton = document.getElementById("projectsNext");
    listen(previousButton, "click", () => {
      movePrevious();
      restartCarousel();
    });
    listen(nextButton, "click", () => {
      moveNext();
      restartCarousel();
    });
    listen(carousel, "mouseenter", stopCarousel);
    listen(carousel, "mouseleave", startCarousel);
    listen(carousel, "focusin", stopCarousel);
    listen(carousel, "focusout", startCarousel);

    if (projectTrack && projectStatus) {
      projectStatus.textContent = `${projectTrack.querySelectorAll(".project-card").length} projects`;
      startCarousel();
    }
    cleanups.push(stopCarousel);

    const typingTarget = document.getElementById("typing-text");
    let typingTimer;
    if (typingTarget) {
      const titles = [
        "Full-Stack Developer",
        "Backend Developer",
        "Tech Explorer",
        "Research Enthusiast",
        "Cloud Computing Learner",
        "AI/ML Enthusiast",
      ];
      let titleIndex = 0;
      let characterIndex = 0;
      let deleting = false;
      typingTimer = window.setInterval(() => {
        const title = titles[titleIndex];
        characterIndex += deleting ? -1 : 1;
        typingTarget.textContent = title.slice(0, characterIndex);

        if (characterIndex === title.length) {
          deleting = true;
          window.clearInterval(typingTimer);
          typingTimer = window.setTimeout(() => {
            typingTimer = window.setInterval(typeNextCharacter, deleting ? 40 : 60);
          }, 1100);
        } else if (characterIndex === 0 && deleting) {
          deleting = false;
          titleIndex = (titleIndex + 1) % titles.length;
        }
      }, 60);

      function typeNextCharacter() {
        const title = titles[titleIndex];
        characterIndex += deleting ? -1 : 1;
        typingTarget.textContent = title.slice(0, characterIndex);
        if (characterIndex === title.length) {
          deleting = true;
          window.clearInterval(typingTimer);
          typingTimer = window.setTimeout(() => {
            typingTimer = window.setInterval(typeNextCharacter, 40);
          }, 1100);
        } else if (characterIndex === 0 && deleting) {
          deleting = false;
          titleIndex = (titleIndex + 1) % titles.length;
          window.clearInterval(typingTimer);
          typingTimer = window.setInterval(typeNextCharacter, 60);
        }
      }
    }
    cleanups.push(() => window.clearInterval(typingTimer));
    cleanups.push(() => window.clearTimeout(typingTimer));

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav ul li a");
    const updateActiveLink = () => {
      let current = "";
      sections.forEach((section) => {
        const top = section.offsetTop - 100;
        if (window.scrollY >= top && window.scrollY < top + section.clientHeight) {
          current = section.id;
        }
      });
      navLinks.forEach((link) => {
        link.classList.toggle(
          "active-link",
          link.getAttribute("href") === `#${current}`,
        );
      });
    };
    listen(window, "scroll", updateActiveLink);
    updateActiveLink();

    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");
    const submitButton = contactForm?.querySelector('button[type="submit"]');
    const submitText = document.getElementById("submitText");
    const handleContactSubmit = async (event) => {
      event.preventDefault();
      if (!contactForm || !formMessage || !submitButton || !submitText) return;

      const formData = new FormData(contactForm);
      const details = Object.fromEntries(formData.entries());
      submitButton.disabled = true;
      submitText.textContent = "Sending...";
      formMessage.textContent = "";
      formMessage.className = "text-center text-sm mt-4";

      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(details),
        });
        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.message || `Request failed with status ${response.status}.`);
        }

        formMessage.textContent = "✓ Message sent successfully! I'll get back to you soon.";
        formMessage.className = "text-center text-sm mt-4 text-green-400";
        contactForm.reset();
        window.setTimeout(() => {
          submitButton.disabled = false;
          submitText.textContent = "Send Message";
        }, 3000);
      } catch (error) {
        console.error("Contact form error:", error);
        formMessage.replaceChildren();
        formMessage.append(
          document.createTextNode(
            `${error instanceof Error ? error.message : "Unable to send your message."} `,
          ),
        );
        const fallback = document.createElement("a");
        const subject = encodeURIComponent(String(details.subject || ""));
        const body = encodeURIComponent(
          `Name: ${details.name || ""}\nEmail: ${details.email || ""}\n\nMessage:\n${details.message || ""}`,
        );
        fallback.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
        fallback.className =
          "inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition";
        fallback.textContent = "Send via Email";
        formMessage.append(document.createElement("br"), document.createElement("br"), fallback);
        formMessage.className = "text-center text-sm mt-4 text-yellow-400";
        submitButton.disabled = false;
        submitText.textContent = "Send Message";
      }
    };
    listen(contactForm, "submit", handleContactSubmit);

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return null;
}
