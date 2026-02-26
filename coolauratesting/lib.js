// Default search engine
if (!localStorage.searchengine) {
  localStorage.searchengine = "duckduckgo"
}

// Cache DOM once
const searchInput = document.getElementById("search")
const searchButton = document.getElementById("searchexecuter")
const settingsBtn = document.getElementById("settings")
const closeSettingsBtn = document.getElementById("closeSettings")
const settingsMenu = document.getElementById("settingsMenu")

// Search engine map
function search() {

  let url = searchInput.value.trim()
  if (!url) {
    searchInput.placeholder = "The search bar cannot be empty."
    return
  }

  if (url.includes(".")) {
    window.location.href = "https://" + url
    return
  }

  const query = encodeURIComponent(url)
  const engine = localStorage.searchengine

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

// Settings toggle
settingsBtn?.addEventListener("click", () => {
  settingsMenu.style.display =
    settingsMenu.style.display === "block" ? "none" : "block"
})

closeSettingsBtn?.addEventListener("click", () => {
  settingsMenu.style.display = "none"
})

// Engine buttons
document.querySelectorAll(".engine-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    localStorage.searchengine = btn.dataset.engine
  })
})

// Search button
searchButton?.addEventListener("click", search)

// Enter key support
searchInput?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    search()
  }
})

// Auto focus
document.addEventListener("DOMContentLoaded", () => {
  searchInput?.focus()
})
