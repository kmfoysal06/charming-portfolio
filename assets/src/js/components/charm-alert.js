class CharmAlert {
    constructor() {
        this.timeout = null;
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new CharmAlert();
        }
        return this.instance;
    }
    showAlert(message, type = 'info') {
        const alertBox = document.createElement('div');
        alertBox.className = `charm-alert charm-alert-${type}`;
        alertBox.style.position = 'fixed';
        alertBox.style.top = '50px';
        // zindex 
        alertBox.style.zIndex = '1111';
        
        alertBox.style.left = '50%';
        alertBox.style.transform = 'translateX(-50%)';
        alertBox.style.padding = '10px 20px';
        alertBox.style.borderRadius = '5px';
        alertBox.style.color = '#fff';
        alertBox.style.fontSize = '16px';
        alertBox.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        alertBox.style.backgroundColor = type === 'success' ? '#4CAF50' :
                                         type === 'error' ? '#F44336' :
                                         type === 'warning' ? '#FF9800' :
                                         '#2196F3';
        alertBox.style.transition = 'opacity 0.3s ease-in-out';
        alertBox.style.opacity = '0.9';
        alertBox.style.cursor = 'pointer';

        alertBox.innerText = message;
        // pause timeout on hover and resume on mouse leave
        alertBox.addEventListener('mouseenter', () => {
            if(typeof(this.timeout) !== 'undefined') {
                clearTimeout(this.timeout);
            }
        });
        alertBox.addEventListener('mouseleave', () => {
            this.timeout = setTimeout(() => {
                alertBox.remove();
            }, 3000);
        });

        // Append the alert box to the body
        document.body.appendChild(alertBox);

        // Automatically remove the alert after 3 seconds
        this.timeout = setTimeout(() => {
            alertBox.remove();
        }, 3000);
    }
}
window.CharmAlert = CharmAlert.getInstance();