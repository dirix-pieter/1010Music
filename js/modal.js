let mvnsi = document.getElementById("modal_mvnsi");
let farflow = document.getElementById("modal_farflow");
let c1p = document.getElementById("modal_c1p");
let locksy = document.getElementById("modal_locksy");
let modus = document.getElementById("modal_modus");
let buumi = document.getElementById("modal_buumi");

let body = document.getElementsByTagName("body")[0];
let modals = document.getElementsByClassName("modal");

let span = document.getElementsByClassName("close")[0];



function kek() {
    body.style.backgroundImage = "url(../res/img/artists/xd.png)";
}

function kekOut() {
    body.style.backgroundImage = "";
}

window.onclick = function (event) {
    for (let index = 0; index < modals.length; index++) {
        const element = modals[index];
        if (event.target == element) {
            let id = element.id;
            id = id.replace("modal_", "close_");
            close_modal(id);
        }
    }
}

function close_modal(clicked_id) {

    switch (clicked_id) {
        case "close_mvnsi":
            mvnsi.style.display = "none";
            break;

        case "close_farflow":
            farflow.style.display = "none";
            break;

        case "close_c1p":
            c1p.style.display = "none";
            break;

        case "close_locksy":
            locksy.style.display = "none";
            break;

        case "close_modus":
            modus.style.display = "none";
            break;

        case "close_buumi":
            buumi.style.display = "none";
            break;

        default:
            break;
    }

}

function open_modal(clicked_id) {
    
    switch (clicked_id) {
        case "mvnsi":
            mvnsi.style.display = "block";
            break;

        case "farflow":
            farflow.style.display = "block";
            break;

        case "c1p":
            c1p.style.display = "block";
            break;

        case "locksy":
            locksy.style.display = "block";
            break;

        case "modus":
            modus.style.display = "block";
            break;

        case "buumi":
            buumi.style.display = "block";
            break;

        default:
            break;
    }

}