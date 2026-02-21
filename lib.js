if(localStorage.getItem('browser') === null ) {
    localStorage.setItem('browser','chrome')
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
    
    else if(localStorage.getItem('browser') === 'chrome') {
        window.location.href = `https://google.com/search?q=${url}&safe=active&ssui=on`;
    }

    else if(localStorage.getItem('browser') === 'duckduckgo') {
        window.location.href = `https://duckduckgo.com/?q=${url}&ia=web`;
    }
}

console.log(localStorage.getItem('browser'))