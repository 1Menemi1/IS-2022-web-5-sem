function timeCalculation() {
    let loadTime = window.performance.getEntriesByType("navigation");
    return `Load time: ${Math.round(loadTime[0].domComplete)}ms`;
}

function printLoadTimeText() {
    let element = document.getElementById("load-time");
    let text = document.createTextNode(timeCalculation());
    element.appendChild(text);
}

window.addEventListener('load', () => printLoadTimeText());
document.addEventListener('DOMContentLoaded', () => setUpSubmitHandlers())
document.addEventListener('DOMContentLoaded', () => setUpActionHandlers())