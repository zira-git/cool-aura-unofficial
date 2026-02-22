if(localStorage.getItem('browser') === null ) {
    localStorage.setItem('searchengine','google')
}

function search() {
    let url = document.getElementById("search").value
    if(url.includes('.')) {
        console.log(url)
        console.log(url)
        window.location.href = `https://${url}`
    } else if(url === "") {
        document.getElementById('search').setAttribute('placeholder','Search Box Cannot Be Empty')
    }
    
    else if(localStorage.getItem('searchengine') === 'google') {
        window.location.href = `https://google.com/search?q=${url}&safe=active&ssui=on`;
    }

    else if(localStorage.getItem('searchengine') === 'duckduckgo') {
        window.location.href = `https://duckduckgo.com/?q=${url}&ia=web`;

    else if(localStorage.getItem('searchengine') === 'startpage) {
        window.location.href = `https://www.startpage.com/sp/search?query=${url}`
    }
}

console.log(localStorage.getItem('searchengine'))
