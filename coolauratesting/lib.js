if (!localStorage.getItem('searchengine')) {
    localStorage.setItem('searchengine','duckduckgo')
}

function getEngine() {
    return localStorage.getItem('searchengine')
}

const searchInput = document.getElementById("search")
const searchButton = document.getElementById("searchexecuter")
const settingsBtn = document.getElementById("settings")
const settingsMenu = document.getElementById("settingsMenu")
const closeSettings = document.getElementById("closeSettings")

settingsBtn?.addEventListener("click", () => {
    settingsMenu.style.display =
        settingsMenu.style.display === "block" ? "none" : "block"
})

closeSettings?.addEventListener("click", () => {
    settingsMenu.style.display = "none"
})

function search() {

    const raw = searchInput.value.trim()

    if (!raw) {
        searchInput.placeholder = "The search bar cannot be empty."
        return
    }

    if (raw.includes('.')) {
        window.location.href = "https://" + raw
        return
    }

    const query = encodeURIComponent(raw)
    const engine = getEngine()

    const engines = {
        google: `https://google.com/search?q=${query}&safe=active&ssui=on`,
        duckduckgo: `https://duckduckgo.com/?q=${query}&ia=web`,
        startpage: `https://www.startpage.com/sp/search?query=${query}`,
        vyntr: `https://vyntr.com/search?q=${query}`,
        brave: `https://search.brave.com/search?q=${query}`,
        yandex: `https://yandex.com/search/?text=${query}`,
        bliptext: `https://bliptext.com/search?q=${query}`,
        bing: `https://www.bing.com/search?q=${query}`
    }

    if (engines[engine]) {
        window.location.href = engines[engine]
    }
}

searchButton?.addEventListener("click", search)

searchInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") search()
})

console.log(getEngine())
