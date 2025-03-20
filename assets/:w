import { useEffect, useState, createRoot } from "@wordpress/element";
import domReady from "@wordpress/dom-ready";
import Intro from './react-components/intro.js';
import About from './react-components/about.js';
import Skills from './react-components/skills.js';

const Portfolio = () => {
  return (
    <>
      <Intro />
      <About />
      <Skills />
    </>
  )
};

domReady(
  () => {
    const root = createRoot(
      document.getElementById("r-slot")
    );

    root.render(<Portfolio />);
  }
)
