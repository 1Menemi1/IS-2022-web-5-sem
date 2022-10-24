(function () {
    let startTime = new Date().getTime();

    function loaded() {
        let element = document.getElementById("load-time")
        let currTime = new Date().getTime();
        let pgLoadTime = (currTime - startTime);
        element.innerHTML += 'Load time: ' + pgLoadTime + "ms";
    }

    document.addEventListener("DOMContentLoaded", _ => {loaded()})
})();