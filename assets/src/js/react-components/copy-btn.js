const copyText = (copyText) => {
    try {
        navigator.clipboard.writeText(copyText)
            .then(() => {
                bottomAlert("Copied!", "#204ecf", 1000);
            })
        return;
    } catch (e) {
        bottomAlert("Can't Copy! Try Again.", "#f00", 3000);
    }
};

const bottomAlert = (alertText, bgColor, timing) => {
    const bottomAlert = document.createElement("div");
    bottomAlert.id = "simplecharm-portfolio-bottom-alert";
    document.body.appendChild(bottomAlert);

    bottomAlert.textContent = alertText;
    bottomAlert.style.background = bgColor;
    bottomAlert.style.opacity = "1";
    bottomAlert.style.transform = "translate(-50%,0)";
    setTimeout(function() {
        bottomAlert.style.transform = "translate(-50%,50px)";
        bottomAlert.style.opacity = "0";
        document.body.removeChild(bottomAlert);
    }, timing);
};
const CopyBtn = ({ content, className }) => {

    return (
        <button
            className={className}
            onClick={() => copyText(content)}
        >
            <span className="dashicons dashicons-clipboard cursor-pointer"></span>
        </button>
    );
};

export default CopyBtn;
