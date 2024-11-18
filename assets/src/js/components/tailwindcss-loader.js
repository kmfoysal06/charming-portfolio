(function($){
	class Portfolio_Container extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    // Create a container element
    const container = document.createElement('div');
    container.innerHTML = this.innerHTML;

    // Function to fetch and apply CSS
    const applyCSS = (url) => {
      return fetch(url)
        .then(response => response.text())
        .then(css => {
          const style = document.createElement('style');
          style.textContent = css;
          shadow.appendChild(style);
        })
        .catch(err => console.error('Failed to load CSS:', err));
    };

    // Get CSS URLs from attributes
    const tailwindCssUrl = this.getAttribute('data-tailwind-css-url');
    const dashiconsCssUrl = this.getAttribute('data-dashicons-css-url');

    // Apply CSS files
    if (tailwindCssUrl) applyCSS(tailwindCssUrl);
    if (dashiconsCssUrl) applyCSS(dashiconsCssUrl);
    console.log(tailwindCssUrl)

    // Append container after styles are applied
    shadow.appendChild(container);
  }
}

// Define the new element
customElements.define('charming_portfolio-plugin', Portfolio_Container);

})(jQuery)