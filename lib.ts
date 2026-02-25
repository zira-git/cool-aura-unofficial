if(localStorage.getItem('searchengine') === null) { // If a search engine isn't selected
    localStorage.setItem('searchengine', 'duckduckgo'); // It defaults to DuckDuckGo
}

function search(): void { // Search function
    const urlInput: HTMLInputElement | null = document.getElementById("search") as HTMLInputElement;
    let url: string = urlInput.value;

    if (url.includes('.')) { // Some URL logging garbage
        console.log(url);
        window.location.href = `https://${url}`;
        return;
    } else if (url === "") { // Search bar warning
        urlInput.setAttribute('placeholder', 'The search bar cannot be empty.');
        return;
    }

    url = encodeURIComponent(url); // Encodes the URL which allows for: + , * - etc...

    const searchEngine: string | null = localStorage.getItem('searchengine');
    // Search engines
    if (searchEngine === 'google') {
        window.location.href = `https://google.com/search?q=${url}&safe=active&ssui=on`;
    } else if (searchEngine === 'duckduckgo') {
        window.location.href = `https://duckduckgo.com/?q=${url}&ia=web`;
    } else if (searchEngine === 'startpage') {
        window.location.href = `https://www.startpage.com/sp/search?query=${url}`;
    } else if (searchEngine === 'vyntr') {
        window.location.href = `https://vyntr.com/search?q=${url}`;
    } else if (searchEngine === 'brave') {
        window.location.href = `https://search.brave.com/search?q=${url}`;
    } else if (searchEngine === 'yandex') {
        window.location.href = `https://yandex.com/search/?text=${url}`;
    } else if (searchEngine === 'bliptext') {
        window.location.href = `https://bliptext.com/search?q=${url}`;
    } else if (searchEngine === 'bing') {
        window.location.href = `https://www.bing.com/search?q=${url}`;
    }
}

console.log(localStorage.getItem('searchengine'));

window.addEventListener("DOMContentLoaded", () => { // Enter key listener
    const searchInput: HTMLElement | null = document.getElementById("search");
    
    searchInput?.addEventListener("keydown", function(event: KeyboardEvent): void {
        if (event.key === "Enter") {
            search();
        }
    });
});
