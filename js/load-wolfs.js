function load() {
    var path = window.location.pathname;
    var page = path.split("/").pop();

    let list = document.querySelector(".list .container")
    const myHeaders = {
        "Content-Type": "application/json"
    }

    const fetchingConfig = {
        method: 'GET',
        headers: myHeaders
    }

    let wolfs;

    fetch('https://lobinhos-api.herokuapp.com/wolves', fetchingConfig)
        .then((request) => {
            return request.json();
        })
        .then((responseAsJson) => {
            wolfs = responseAsJson;
        }).then(() => {
            if (page === 'index.html') {

            }
            else {
                for (let i = 0; i < wolfs.length; i++) {
                    if (wolfs[i].adoption == null) {
                        let newWolf = document.createElement('div');
                        newWolf.classList.add("wolf-list");
                        let newWolfPhoto = document.createElement('img');
                        let att = document.createAttribute("onerror");
                        att.value = "imageError(this)";
                        newWolfPhoto.setAttributeNode(att);
                        if (i % 2 == 0) {
                            newWolfPhoto.classList.add('wolf-left');
                        }
                        else {
                            newWolfPhoto.classList.add('wolf-right');
                        }
                        newWolfPhoto.src = wolfs[i].photo;
                        let newWolfList = document.createElement('div');
                        if (i % 2 == 0) {
                            newWolfList.classList.add("wolf-list-left");
                        }
                        else {
                            newWolfList.classList.add("wolf-list-right");
                        }
                        let newWolfButton = document.createElement('button');
                        if (i % 2 == 0) {
                            newWolfButton.classList.add("list-left-wolf");
                        }
                        else {
                            newWolfButton.classList.add("list-right-wolf");
                        }
                        newWolfButton.innerText = "Adotar";
                        let newWolfName = document.createElement('h3');
                        newWolfName.classList.add('wolf-name');
                        let wolfId = document.createElement('p');
                        wolfId.classList.add('p-id');
                        wolfId.innerText = i;
                        newWolfName.innerText = wolfs[i].name;
                        let newWolfId = document.createElement('p');
                        let newWolfAge = document.createElement('p');
                        newWolfAge.classList.add('wolf-age');
                        let newWolfDescription = document.createElement('p');
                        newWolfDescription.innerText = wolfs[i].description;
                        newWolfAge.innerText = `Idade: ${wolfs[i].age} anos`;
                        newWolfList.appendChild(newWolfButton);
                        newWolfList.appendChild(newWolfName);
                        newWolfList.appendChild(newWolfAge);
                        newWolfList.appendChild(newWolfDescription);
                        newWolfList.appendChild(wolfId);
                        newWolf.appendChild(newWolfPhoto);
                        newWolf.appendChild(newWolfList);
                        list.appendChild(newWolf);
                    }
                }
            }
        })
}

function searchFunction() {

    var input, filter, list, wolfDiv, a, i, txtValue;

    input = document.querySelector('.search-div .search');

    filter = input.value.toUpperCase();

    list = document.querySelector(".list");

    wolfDiv = document.querySelectorAll('.wolf-list')

    for (i = 0; i < wolfDiv.length; i++) {
        a = wolfDiv[i].querySelector(".wolf-name");
        txtValue = a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            wolfDiv[i].style.display = "";
        } else {
            wolfDiv[i].style.display = "none";
        }
    }
}

let wolfAdoptButton = document.querySelector('.list');

wolfAdoptButton.addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON') {
        let divList = e.target.parentNode;
        let pId = divList.querySelector('.p-id');
        localStorage.setItem("wolf-id", pId.innerText);
        document.location.href = "./wolf-presentation.html";
    }
});
// window.onload = alert(localStorage.getItem("storageName"));

function imageError(e) {
    e.src = './assets/img/default.svg';
    e.style.objectFit = "contain";
}