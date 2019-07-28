// window.onload = alert(localStorage.getItem("wolf-id"));

window.onload = () => {
    let oneWolf = document.querySelector(".wolf-presentation .container")
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
            // div-wolf-presentation
            let newDivPresentation = document.createElement('div');
            newDivPresentation.classList.add("div-wolf-presentation");
            // h2-wolf-name
            let newWolfName = document.createElement('h2');
            newWolfName.classList.add('h2-wolf-name');
            newWolfName.innerText = wolf[localStorage.getItem("wolf-id")].name;
            // div class="wolf-informations"
            let newWolfInfo = document.createElement('div');
            newWolfInfo.classList.add("wolf-informations");
            // img-wolf-presentation
            let newWolfImg = document.createElement('img');
            newWolfImg.classList.add("img-wolf-presentation");
            newWolfImg.src = wolf[localStorage.getItem("wolf-id")].photo;
            // div class="wolf-presentation-btns"
            let newDivBtns = document.createElement('div');
            newDivBtns.classList.add("wolf-presentation-btns");
            // adoption-btn
            let newAdoptBtn = document.createElement('button');
            newAdoptBtn.classList.add("adoption-btn");
            newAdoptBtn.innerText = 'Adotar';
            // remove-btn
            let newDelBtn = document.createElement('buttons');
            newDelBtn.classList.add("remove-btn");
            newDelBtn.innerText = 'Excluir';
            // div class="wolf-presentation-text"
            let newWolfPresentation = document.createElement('div');
            newWolfPresentation.classList.add("wolf-presentation-text");
            let newWolfDescription = document.createElement('p');
            newWolfDescription.innerText = wolf[localStorage.getItem("wolf-id")].description;
            newDivBtns.appendChild(newAdoptBtn);
            newDivBtns.appendChild(newDelBtn);
            newWolfInfo.appendChild(newWolfImg);
            newWolfInfo.appendChild(newDivBtns);
            newDivPresentation.appendChild(newWolfName);
            newDivPresentation.appendChild(newWolfInfo);
            newWolfPresentation.appendChild(newWolfDescription);
            oneWolf.appendChild(newDivPresentation);
            oneWolf.appendChild(newWolfPresentation);
        })
}



