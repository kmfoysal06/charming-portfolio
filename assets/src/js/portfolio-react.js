import { useEffect, useState, createRoot, StrictMode } from "@wordpress/element";
import domReady from "@wordpress/dom-ready";
import Intro from "./react-components/intro.js";
import About from "./react-components/about.js";
import Skills from "./react-components/skills.js";
import Experience from "./react-components/experience.js";
import Projects from "./react-components/projects.js";
import Footer from "./react-components/footer.js";

const Portfolio = () => {
    /**
     * To Convert Special String to HTML Tags
     * @example 
     * [bold]Hello[/bold] => <b>Hello</b>
     * [quote] => "
     * [squote] => '
     * [break] => <br />
     */
    const specialTag = (textareaValue) => {
        if (!textareaValue) return "";

        let processedText = textareaValue;
        processedText = processedText.replace(/\[bold\]/g, "<b>");
        processedText = processedText.replace(/\[\/bold\]/g, "</b>");
        processedText = processedText.replace(/\[quote\]/g, '"');
        processedText = processedText.replace(/\[squote\]/g, "'");
        processedText = processedText.replace(/\[break\]/g, "<br />");

        return processedText;
    };
    
    /**
     * To Convert Array to HTML Tags to Display Badges
     */
    const splitTags = (tags) => {
        const tags_array = tags.length > 0 ? tags.split(", ") : [];

        return (
            <div className="work-tags">
                {tags_array.map((single_tag) => {
                    if (!single_tag) return;
                    return (
                        <div
                            className="min-w-max badge badge-neutral p-4 mx-2 my-2"
                            tabIndex="0"
                            key={single_tag}
                        >
                            {single_tag}
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <>
            <Intro specialTag={specialTag} portfolio={portfolio_data} />
            <About specialTag={specialTag} portfolio={portfolio_data} />
            <Skills skills={portfolio_data.skills} />
            <Experience specialTag={specialTag} experiences={portfolio_data.experiences} />
            <Projects specialTag={specialTag} projects={portfolio_data.works} splitTags={splitTags} />
            <Footer portfolio={portfolio_data} />
        </>
    );
};

domReady(() => {
    const root = createRoot(
        document.getElementById("charming-portfolio-react-root"),
    );

    root.render(
        <StrictMode>
            <Portfolio />
        </StrictMode>
    );
});
