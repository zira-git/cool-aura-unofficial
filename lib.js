if(localStorage.getItem('browser') === null ) {
    localStorage.setItem('searchengine','duckduckgo')
}

function search() {
    let url = document.getElementById("search").value
    if(url.includes('.')) {
        console.log(url)
        console.log(url)
        window.location.href = `https://${url}`
    } else if(url === "") {
        document.getElementById('search').setAttribute('placeholder','The search bar cannot be empty.')
    }
    
    else if(localStorage.getItem('searchengine') === 'google') {
        window.location.href = `https://google.com/search?q=${url}&safe=active&ssui=on`;
    }

    else if(localStorage.getItem('searchengine') === 'duckduckgo') {
        window.location.href = `https://duckduckgo.com/?q=${url}&ia=web`;

    else if(localStorage.getItem('searchengine') === 'startpage') {
        window.location.href = `https://www.startpage.com/sp/search?query=${url}`

    else if(localStorage.getItem('searchengine') === 'vyntr') {
        window.location.href = `https://vyntr.com/search?q=${url}`

    else if(localStorage.getItem('searchengine') === 'ecosia') {
        window.location.href = `https://www.ecosia.org/search?method=index&q=${url}`

    else if(localStorage.getItem('searchengine') === 'brave') {
        window.location.href = `https://search.brave.com/search?q=${url}`

    else if(localStorage.getItem('searchengine') === 'yandex' {
        window.location.href = `https://yandex.com/search/?text=${url}`
    }
}

console.log(localStorage.getItem('searchengine'))
