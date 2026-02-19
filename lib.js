function search() {
    let url = document.getElementById("search").value
    if(url.includes('.')) {
        console.log(url)
        console.log(url)
        window.location.href = `https://${url}`
    } else if(url === "") {
        document.getElementById('search').setAttribute('placeholder','Search Box Cannot Be Empty')
    }
    
    else {
        window.location.href = `https://google.com/search?q=${url}&safe=active&ssui=on`;
    }
}