// window.onload = alert(localStorage.getItem("wolf-id"));

window.onload = () => {
    let list = document.querySelector(".list .container")
    const myHeaders = {
        "Content-Type": "application/json"
    }

    const fetchingConfig = {
        method: 'GET',
        headers: myHeaders
    }

    let wolf;

    fetch(`https://lobinhos-api.herokuapp.com/wolves/${localStorage.getItem("wolf-id")}`, fetchingConfig)
        .then((request) => {
            return request.json();
        })
        .then((responseAsJson) => {
            wolf = responseAsJson;
        }).then(() => {
            // div-wolf-presentation
            
            // h2-wolf-name
            // div class="wolf-informations"
            // img-wolf-presentation
            // div class="wolf-presentation-btns
            // adoption-btn
            // remove-btn
            // div class="wolf-presentation-text"
        })
}



