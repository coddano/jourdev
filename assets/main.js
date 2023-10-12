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


  import { formatTimeForItaly } from "../lib/helpers";

  function updateClock() {
    const timeDisplay = document.getElementById("timeDisplay");
    if (timeDisplay) {
      timeDisplay.textContent = formatTimeForItaly(new Date());
    }
  }

  setInterval(updateClock, 1000);