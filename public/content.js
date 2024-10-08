const observer = new MutationObserver(() => {
    const inputField = document.querySelector(".msg-form__contenteditable");
    if (inputField && !inputField.hasAttribute("data-mutated")) {
        inputField.setAttribute("data-mutated", true);
        addButtonOnFocus(inputField);

        const modalContainer = document.createElement("div");
        modalContainer.id = "root";
        document.body.appendChild(modalContainer);

        const style = document.createElement("link");
        style.rel = "stylesheet";
        style.href = chrome.runtime.getURL("static/css/main.991cde52.css");
        document.head.appendChild(style);

        const script = document.createElement("script");
        script.src = chrome.runtime.getURL("static/js/main.d073a1e1.js");
        document.body.appendChild(script);
    }

    const focusedElement = document.activeElement;
    if (focusedElement && focusedElement.classList.contains("msg-form__contenteditable")) {
        const suggestionButton = document.querySelector(".suggestion-button");
        if (suggestionButton) {
            suggestionButton.style.display = "flex";
        }
    }
});

observer.observe(document.body, { subtree: true, childList: true });

const addButtonOnFocus = (textarea) => {
    const suggestionButton = document.createElement("button");
    suggestionButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" style="width: 15px; height: 15px;vertical-align: middle;fill: blue;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1"><path d="M716.571429 332l167.428571-167.428571-61.142857-61.142858-167.428572 167.428572z m255.428571-167.428571q0 15.428571-10.285714 25.714285L226.857143 925.142857q-10.285714 10.285714-25.714286 10.285714t-25.714286-10.285714L62.285714 812q-10.285714-10.285714-10.285714-25.714286t10.285714-25.714285L797.142857 25.714286q10.285714-10.285714 25.714286-10.285715t25.714286 10.285715l113.142857 113.142857q10.285714 10.285714 10.285714 25.714286zM200 56l56 17.142857-56 17.142857-17.142857 56-17.142857-56-56-17.142857 56-17.142857 17.142857-56z m200 92.571429l112 34.285714-112 34.285714-34.285714 112-34.285715-112-112-34.285714 112-34.285714 34.285715-112z m531.428571 273.142857l56 17.142857-56 17.142857-17.142857 56-17.142857-56-56-17.142857 56-17.142857 17.142857-56zM565.714286 56l56 17.142857-56 17.142857-17.142857 56-17.142858-56-56-17.142857 56-17.142857 17.142858-56z"/></svg>`;
    suggestionButton.className = "suggestion-button";
    suggestionButton.style.cssText = "position: absolute;right: 0;bottom: 0;margin-right: 10px;margin-bottom: 10px;height:25px; width:25px;display:flex;justify-content:center;align-items:center;border-radius:50%;background-color:white;"
    suggestionButton.style.display = "none";
    suggestionButton.onclick = () => {
        const openModal = document.querySelector('#modal-open-button')
        if(openModal){
            openModal.click()
        }else{
            console.log("modal-open-button is not available")
        }
    };

    const container = document.querySelector(".msg-form__msg-content-container--scrollable");
    if (container) {
        container.appendChild(suggestionButton);
    }

    textarea.addEventListener("focus", () => {
        suggestionButton.style.display = "flex";
    });

    textarea.addEventListener("blur", () => {
        setTimeout(() => {
            suggestionButton.style.display = "none";
        }, 300);
    });
};


