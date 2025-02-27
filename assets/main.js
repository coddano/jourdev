import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify/functions";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";

import solidJs from "@astrojs/solid-js";


  import { stagger, spring, timeline, TimelineDefinition } from "motion";
  const cards = document.querySelectorAll(".card");

  const sequence = [
    [
      ".loaderRef",
      { opacity: 0, pointerEvents: "none" },
      { easing: "ease-out" },
    ],
    [
      cards,
      { y: ["40%", "0%"], opacity: [0, 1] },
      {
        at: "-0.1",
        duration: 0.4,
        delay: stagger(0.3),
        easing: spring({ velocity: 100, stiffness: 50, damping: 10 }),
      },
    ],
  ];

  document.addEventListener('DOMContentLoaded', function() {
    // Animation des cartes
    const cards = document.querySelectorAll(".card");
    
    // Fonction pour animer les cartes
    function animateCards() {
      const loader = document.querySelector(".loaderRef");
      
      // Masquer le loader
      if (loader) {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";
      }
      
      // Animer les cartes une par une
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0%)";
        }, 100 + index * 100); // Délai progressif pour chaque carte
      });
    }
    
    // Lancer l'animation après un court délai
    setTimeout(animateCards, 500);
    
    // Fonction pour formater l'heure en Italie
    function formatTimeForItaly(date) {
      return date.toLocaleTimeString('it-IT', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Europe/Rome'
      });
    }
    
    // Mise à jour de l'horloge
    function updateClock() {
      const timeDisplay = document.getElementById("timeDisplay");
      if (timeDisplay) {
        timeDisplay.textContent = formatTimeForItaly(new Date());
      }
    }
    
    // Initialisation et mise à jour de l'horloge
    updateClock();
    setInterval(updateClock, 1000);
    
    // Animation des boutons
    const buttons = document.querySelectorAll('.custom-btn');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', function() {
        this.classList.add('hover-animation');
      });
      
      button.addEventListener('mouseleave', function() {
        this.classList.remove('hover-animation');
      });
    });
    
    // Ajout d'une fonction pour les projets
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      card.addEventListener('click', function() {
        // On pourrait rediriger vers une page de détail du projet
        console.log('Projet cliqué:', this.querySelector('h3').textContent);
      });
    });
  });
  
  // Mode sombre/clair (à implémenter)
  function toggleDarkMode() {
    document.body.classList.toggle('light-mode');
    // Sauvegarder la préférence dans le localStorage
    const isDarkMode = document.body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', isDarkMode);
  }
  
  // Vérifier la préférence enregistrée au chargement
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
  }


  import { formatTimeForItaly } from "../lib/helpers";

  function updateClock() {
    const timeDisplay = document.getElementById("timeDisplay");
    if (timeDisplay) {
      timeDisplay.textContent = formatTimeForItaly(new Date());
    }
  }

  setInterval(updateClock, 1000);



  