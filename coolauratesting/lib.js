if (!localStorage.getItem('searchengine')) {
    localStorage.setItem('searchengine','duckduckgo')
}

function getEngine() {
    return localStorage.getItem('searchengine')
}

// Cache DOM once
const searchInput = document.getElementById("search")
const searchButton = document.getElementById("searchexecuter")
const settingsBtn = document.getElementById("settings")
const settingsMenu = document.getElementById("settingsMenu")
const closeSettings = document.getElementById("closeSettings")

// Cache engines once
const engines = {
    google: "https://google.com/search?q=",
    duckduckgo: "https://duckduckgo.com/?q=",
    startpage: "https://www.startpage.com/sp/search?query=",
    vyntr: "https://vyntr.com/search?q=",
    brave: "https://search.brave.com/search?q=",
    yandex: "https://yandex.com/search/?text=",
    bliptext: "https://bliptext.com/search?q=",
    bing: "https://www.bing.com/search?q="
}

// Settings toggle
settingsBtn?.addEventListener("click", () => {
    settingsMenu.style.display =
        settingsMenu.style.display === "block" ? "none" : "block"
})

closeSettings?.addEventListener("click", () => {
    settingsMenu.style.display = "none"
})

// Debounce logic
let debounceTimer = null

function debounce(fn, delay) {
    return function (...args) {
        if (debounceTimer) return
        fn.apply(this, args)
        debounceTimer = setTimeout(() => {
            debounceTimer = null
        }, delay)
    }
}

function performSearch() {

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

    if (engines[engine]) {
        window.location.href = engines[engine] + query + "&safe=active&ssui=on"
    }
}

// Debounce protection with 300ms knockout
const search = debounce(performSearch, 300)

searchButton?.addEventListener("click", search)

searchInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") search()
})

console.log(getEngine())
