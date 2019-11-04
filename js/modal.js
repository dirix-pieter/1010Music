let mvnsi = document.getElementById("modal_mvnsi");
let farflow = document.getElementById("modal_farflow");
let c1p = document.getElementById("modal_c1p");

let tevin = document.getElementById("modal_tevin");
let jojo = document.getElementById("modal_jojo");
let don_lario = document.getElementById("modal_don_lario");
let kapeta = document.getElementById("modal_kapeta");

let locksy = document.getElementById("modal_locksy");
let modus = document.getElementById("modal_modus");
let buumi = document.getElementById("modal_buumi");

let body = document.getElementsByTagName("body")[0];
let modals = document.getElementsByClassName("modal");

let span = document.getElementsByClassName("close")[0];



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

        case "close_don_lario":
            don_lario.style.display = "none";
            break;

        case "close_jojo":
            jojo.style.display = "none";
            break;

        case "close_tevin":
            tevin.style.display = "none";
            break;

        case "close_kapeta":
            kapeta.style.display = "none";
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

        case "kapeta":
            kapeta.style.display = "block";
            break;

        case "jojo":
            jojo.style.display = "block";
            break;

        case "don_lario":
            don_lario.style.display = "block";
            break;

        case "tevin":
            tevin.style.display = "block";
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