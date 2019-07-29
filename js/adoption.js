function load() {
    let adopt = document.querySelector('.adocao');
    const myHeaders = {
        "Content-Type": "application/json"
    }

    const fetchingConfig = {
        method: 'GET',
        headers: myHeaders
    }

    let wolf;
    fetch(`https://lobinhos-api.herokuapp.com/wolves/`, fetchingConfig)
        .then((request) => {
            return request.json();
        })
        .then((responseAsJson) => {
            wolf = responseAsJson;
        }).then(() => {
            let att = document.createAttribute("onerror");
            att.value = "imageError(this)";
            let imgAdopt = adopt.querySelector('.wolf-adoption-img');
            imgAdopt.setAttributeNode(att);
            imgAdopt.src = wolf[localStorage.getItem("wolf-id")].photo;
            let nameAdopt = document.querySelector('.wolf-adoption-name');
            nameAdopt.innerHTML = wolf[localStorage.getItem("wolf-id")].name;
            let idAdopt = document.querySelector('.wolf-adoption-id');
            idAdopt.innerHTML = localStorage.getItem("wolf-id");
        })
}