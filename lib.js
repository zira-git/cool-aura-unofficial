// If no search engine is selected it will default to DDG
if(localStorage.getItem('searchengine') === null ) {
    // Sets search engine to DDG
    localStorage.setItem('searchengine','duckduckgo')
}

// Cache engine once for speed
function getEngine() {
    return localStorage.getItem('searchengine')
}

// Search function
function search() {
    let url = document.getElementById("search").value.trim()

    if(url.includes('.')) {
        console.log(url)
        window.location.href = `https://${url}`
        return;
    } 
    else if(url === "") { 
        // If the URL is empty it warns that it can't be empty
        document.getElementById('search').setAttribute('placeholder','The search bar cannot be empty.')
        return;
    }

    url = encodeURIComponent(url) 
    let engine = getEngine()

    // Search engines (faster lookup instead of long else-if chain)
    const engines = {
        google: `https://google.com/search?q=${url}&safe=active&ssui=on`,
        duckduckgo: `https://duckduckgo.com/?q=${url}&ia=web`,
        startpage: `https://www.startpage.com/sp/search?query=${url}`,
        vyntr: `https://vyntr.com/search?q=${url}`,
        brave: `https://search.brave.com/search?q=${url}`,
        yandex: `https://yandex.com/search/?text=${url}`,
        bliptext: `https://bliptext.com/search?q=${url}`,
        bing: `https://www.bing.com/search?q=${url}`
    }

    if(engines[engine]) {
        window.location.href = engines[engine]
    }
}

console.log(getEngine()) // Logs your current search engine

window.addEventListener("DOMContentLoaded", () => { 
    // Enter key listener
    document.getElementById("search").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            search();
        }
    });
});
