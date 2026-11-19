"use client";

import { useEffect } from "react";

const contactEmail = "navodhyasenali@gmail.com";

export default function PortfolioInteractions() {
  useEffect(() => {
    const cleanups = [];
    const listen = (element, event, handler, options) => {
      if (!element) return;
      element.addEventListener(event, handler, options);
      cleanups.push(() => element.removeEventListener(event, handler, options));
    };

    const navToggle = document.getElementById("navToggle");
    const navigation = document.getElementById("navigationLinks");
    const nav = document.getElementById("primaryNavigation");
    const closeNavigation = () => {
      navigation?.classList.remove("is-open");
      navToggle?.setAttribute("aria-expanded", "false");
      navToggle?.setAttribute("aria-label", "Open navigation");
      nav?.querySelectorAll(".nav-more details").forEach((details) => {
        details.open = false;
      });
    };

    listen(navToggle, "click", () => {
      const isOpen = navigation?.classList.toggle("is-open") ?? false;
      navToggle?.setAttribute("aria-expanded", String(isOpen));
      navToggle?.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });
    navigation?.querySelectorAll("a").forEach((link) => {
      listen(link, "click", closeNavigation);
    });
    listen(document, "keydown", (event) => {
      if (event.key === "Escape") closeNavigation();
    });
    listen(window, "resize", () => {
      if (window.innerWidth > 700) closeNavigation();
    });

    const filterButtons = document.querySelectorAll(".letter-filter-btn");
    const letterCards = document.querySelectorAll(".letter-card");
    filterButtons.forEach((button) => {
      listen(button, "click", () => {
        const category = button.getAttribute("data-filter");
        filterButtons.forEach((item) => {
          const isActive = item === button;
          item.classList.toggle("active", isActive);
          item.setAttribute("aria-pressed", String(isActive));
        });
        letterCards.forEach((card) => {
          card.classList.toggle(
            "hidden",
            category !== "all" && card.getAttribute("data-category") !== category,
          );
        });
      });
    });

    const projectTrack = document.getElementById("projectGrid");
    const projectStatus = document.getElementById("projectsStatus");
    const previousButton = document.getElementById("projectsPrevious");
    const nextButton = document.getElementById("projectsNext");
    const projectCards = projectTrack
      ? Array.from(projectTrack.querySelectorAll(".project-card"))
      : [];
    const updateProjectStatus = () => {
      if (!projectTrack || !projectStatus || projectCards.length === 0) return;
      const firstCard = projectCards[0];
      const styles = getComputedStyle(projectTrack);
      const gap = parseFloat(styles.columnGap || styles.gap || "0");
      const step = firstCard.getBoundingClientRect().width + gap;
      const visibleCount = Math.max(1, Math.round((projectTrack.clientWidth + gap) / step));
      const start = Math.min(
        projectCards.length,
        Math.floor((projectTrack.scrollLeft + step / 2) / step) + 1,
      );
      const end = Math.min(projectCards.length, start + visibleCount - 1);
      projectStatus.textContent = `Projects ${start}–${end} of ${projectCards.length}`;
    };
    const scrollProjects = (direction) => {
      if (!projectTrack) return;
      const firstCard = projectTrack.querySelector(".project-card");
      if (!firstCard) return;
      const gap = parseFloat(getComputedStyle(projectTrack).columnGap || "0");
      projectTrack.scrollBy({
        left: direction * (firstCard.getBoundingClientRect().width + gap),
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });
    };
    listen(previousButton, "click", () => scrollProjects(-1));
    listen(nextButton, "click", () => scrollProjects(1));
    listen(projectTrack, "scroll", updateProjectStatus, { passive: true });
    listen(window, "resize", updateProjectStatus);
    updateProjectStatus();

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = nav?.querySelectorAll(".nav-menu > li > a[href^='#']") ?? [];
    const updateActiveLink = () => {
      let current = "";
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= 130) current = section.id;
      });
      navLinks.forEach((link) => {
        link.classList.toggle("active-link", link.getAttribute("href") === `#${current}`);
      });
    };
    listen(window, "scroll", updateActiveLink, { passive: true });
    updateActiveLink();

    const typingTarget = document.getElementById("typing-text");
    const roleTitles = [
      "Full-stack enthusiast",
      "Backend enthusiast",
      "AI/ML enthusiast",
      "Research enthusiast",
      "Project management enthusiast",
    ];
    let typingTimer;
    if (typingTarget && !reducedMotion.matches) {
      let titleIndex = 0;
      let characterIndex = roleTitles[0].length;
      let deleting = true;
      const typeNextCharacter = () => {
        const title = roleTitles[titleIndex];
        characterIndex += deleting ? -1 : 1;
        typingTarget.textContent = title.slice(0, characterIndex);

        if (characterIndex === 0) {
          deleting = false;
          titleIndex = (titleIndex + 1) % roleTitles.length;
        } else if (characterIndex === title.length) {
          deleting = true;
          typingTimer = window.setTimeout(typeNextCharacter, 1400);
          return;
        }

        typingTimer = window.setTimeout(typeNextCharacter, deleting ? 38 : 68);
      };
      typingTimer = window.setTimeout(typeNextCharacter, 1500);
    }

    const hero = document.querySelector(".hero");
    const atmosphere = document.getElementById("heroAtmosphere");
    const parallaxItems = hero
      ? Array.from(hero.querySelectorAll("[data-parallax]"))
      : [];
    let pointerX = 0;
    let pointerY = 0;
    let atmosphereFrame = 0;

    const updateHeroParallax = () => {
      parallaxItems.forEach((item) => {
        const strength = Number(item.getAttribute("data-parallax") || 0);
        item.style.transform = `translate3d(${pointerX * strength * 100}px, ${pointerY * strength * 100}px, 0)`;
      });
    };
    const handlePointerMove = (event) => {
      if (!hero || reducedMotion.matches) return;
      const bounds = hero.getBoundingClientRect();
      pointerX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      pointerY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
      updateHeroParallax();
    };
    const resetHeroParallax = () => {
      pointerX = 0;
      pointerY = 0;
      updateHeroParallax();
    };
    listen(hero, "pointermove", handlePointerMove);
    listen(hero, "pointerleave", resetHeroParallax);

    if (atmosphere) {
      const context = atmosphere.getContext("2d");
      let particles = [];
      let width = 0;
      let height = 0;

      const resizeAtmosphere = () => {
        if (!context) return;
        const bounds = atmosphere.getBoundingClientRect();
        const ratio = Math.min(window.devicePixelRatio || 1, 2);
        width = Math.max(1, bounds.width);
        height = Math.max(1, bounds.height);
        atmosphere.width = Math.round(width * ratio);
        atmosphere.height = Math.round(height * ratio);
        context.setTransform(ratio, 0, 0, ratio, 0, 0);
        particles = Array.from({ length: Math.min(46, Math.max(24, Math.round(width / 24))) }, (_, index) => ({
          x: ((index * 137.5) % width) + Math.random() * 18,
          y: ((index * 83.7) % height) + Math.random() * 18,
          radius: 0.4 + Math.random() * 1.2,
          speed: 0.08 + Math.random() * 0.16,
          drift: (Math.random() - 0.5) * 0.12,
        }));
      };

      const drawAtmosphere = () => {
        if (!context) return;
        context.clearRect(0, 0, width, height);
        particles.forEach((particle, index) => {
          particle.y -= particle.speed;
          particle.x += particle.drift + pointerX * 0.025;
          if (particle.y < -4) {
            particle.y = height + 4;
            particle.x = Math.random() * width;
          }
          if (particle.x < -4) particle.x = width + 4;
          if (particle.x > width + 4) particle.x = -4;

          context.beginPath();
          context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          context.fillStyle = index % 4 === 0
            ? "rgba(82,224,189,.48)"
            : "rgba(188,205,218,.22)";
          context.fill();
        });
        atmosphereFrame = window.requestAnimationFrame(drawAtmosphere);
      };

      resizeAtmosphere();
      listen(window, "resize", resizeAtmosphere);
      if (!reducedMotion.matches) drawAtmosphere();
    }

    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");
    const submitButton = contactForm?.querySelector('button[type="submit"]');
    const submitText = document.getElementById("submitText");
    let successTimer;
    const handleContactSubmit = async (event) => {
      event.preventDefault();
      if (!contactForm || !formMessage || !submitButton || !submitText) return;

      const details = Object.fromEntries(new FormData(contactForm).entries());
      submitButton.disabled = true;
      submitText.textContent = "Sending...";
      formMessage.textContent = "";

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

        formMessage.textContent = "Message sent successfully! I’ll get back to you soon.";
        contactForm.reset();
        successTimer = window.setTimeout(() => {
          submitButton.disabled = false;
          submitText.textContent = "Send Message";
        }, 3000);
      } catch (error) {
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
        fallback.className = "text-link";
        fallback.textContent = "Send via email";
        formMessage.append(fallback);
        submitButton.disabled = false;
        submitText.textContent = "Send Message";
      }
    };
    listen(contactForm, "submit", handleContactSubmit);

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      window.clearTimeout(successTimer);
      window.clearTimeout(typingTimer);
      window.cancelAnimationFrame(atmosphereFrame);
    };
  }, []);

  return null;
}
