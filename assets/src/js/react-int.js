import { useEffect, useState, createRoot } from "@wordpress/element";
import domReady from "@wordpress/dom-ready";
import Intro from './react-components/intro.js';
import About from './react-components/about.js';
import Skills from './react-components/skills.js';
import Experience from './react-components/experience.js';

const Portfolio = () => {
  const specialTag = (textareaValue) => {
    if (!textareaValue) return '';

    let processedText = textareaValue;
    processedText = processedText.replace(/\[bold\]/g, "<b>");
    processedText = processedText.replace(/\[\/bold\]/g, "</b>");
    processedText = processedText.replace(/\[quote\]/g, "\"");
    processedText = processedText.replace(/\[squote\]/g, "'");
    processedText = processedText.replace(/\[break\]/g, "<br />");

    return processedText;
  };

  return (
    <>
      <Intro specialTag={specialTag} />
      <About specialTag={specialTag} />
      <Skills />
      <Experience specialTag={specialTag} />
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
