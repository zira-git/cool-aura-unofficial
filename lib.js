if(localStorage.getItem('searchengine') === null ) { // If no search engine is selected it will default to DDG
    localStorage.setItem('searchengine','duckduckgo') // Sets search engine to DDG
}
// Search function
function search() {
    let url = document.getElementById("search").value
    if(url.includes('.')) {
        console.log(url)
        window.location.href = `https://${url}`
    } else if(url === "") { // If the URL is empty it warns that it can't be empty
        document.getElementById('search').setAttribute('placeholder','The search bar cannot be empty.')
    }

    let url = encodeURIComponent(input); // Encodes it to let you use stuff like + , & and more in your query
    
    // Search engines
    else if(localStorage.getItem('searchengine') === 'google') {
        window.location.href = `https://google.com/search?q=${url}&safe=active&ssui=on`;
    }

    else if(localStorage.getItem('searchengine') === 'duckduckgo') {
        window.location.href = `https://duckduckgo.com/?q=${url}&ia=web`;
    }

    else if(localStorage.getItem('searchengine') === 'startpage') {
        window.location.href = `https://www.startpage.com/sp/search?query=${url}`
    }

    else if(localStorage.getItem('searchengine') === 'vyntr') {
        window.location.href = `https://vyntr.com/search?q=${url}`
    }

    else if(localStorage.getItem('searchengine') === 'brave') {
        window.location.href = `https://search.brave.com/search?q=${url}`
    }

    else if(localStorage.getItem('searchengine') === 'yandex') {
        window.location.href = `https://yandex.com/search/?text=${url}`
    }

    else if(localStorage.getItem('searchengine') === 'bliptext') {
        window.location.href = `https://bliptext.com/search?q=${url}`
    }
    else if(localStorage.getItem('searchengine') === 'bing') {
        window.location.href = `https://www.bing.com/search?q=${url}`
    }
}

console.log(localStorage.getItem('searchengine')) // Logs your current search engine

window.addEventListener("DOMContentLoaded", () => { // Enter key listener
    document.getElementById("search").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            search();
        }
    });
});
