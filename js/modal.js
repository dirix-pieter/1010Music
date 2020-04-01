let artists_content = document.getElementsByClassName("artists_content")[0];
let contact = document.getElementsByClassName("contact")[0];
let artists_content_mobile = document.getElementsByClassName("artists_content_mobile")[0];
let logo = document.getElementById("header_logo");
let footer = document.getElementsByTagName("footer")[0];

let mvnsi = document.getElementById("modal_mvnsi");
let farflow = document.getElementById("modal_farflow");
let c1p = document.getElementById("modal_c1p");
let boshra = document.getElementById("modal_boshra");

let tevin = document.getElementById("modal_tevin");
let jojo = document.getElementById("modal_jojo");
let don_lario = document.getElementById("modal_don_lario");
let kapeta = document.getElementById("modal_kapeta");

let locksy = document.getElementById("modal_locksy");
let modus = document.getElementById("modal_modus");
let buumi = document.getElementById("modal_buumi");

let contact_container = document.getElementsByClassName("contact_container")[0];
let contact_content = document.getElementsByClassName("contact_content")[0];

let body = document.getElementsByTagName("body")[0];
let modals = document.getElementsByClassName("modal");

let span = document.getElementsByClassName("close")[0];

let isMobile = false;
let modalOpen = false;

const mobileTresh = 500;

window.onload = function () {
    if (window.innerWidth <= mobileTresh) {
        isMobile = true;
        artists_content.style.display = "none"
        artists_content_mobile.style.display = "block"
    } else {
        isMobile = false;
        artists_content.style.display = "block"
        artists_content_mobile.style.display = "none"
    }
}

function blurBackground() {
    modalOpen = true;
    if (isMobile) {

        body.style.overflow = "hidden";

        artists_content_mobile.style.filter = "blur(4px)";
        artists_content_mobile.style.opacity = "0.3"
        footer.style.filter = "blur(2px)";
        logo.style.filter = "blur(2px)";
        contact.style.filter = "blur(2px)";
        // artists_content_mobile.style.display = "none"
        // footer.style.display = "none";
        // logo.style.display = "none";
    } else {
        artists_content.style.display = "none";
        artists_content.style.filter = "blur(4px)";
        footer.style.filter = "blur(2px)";
        logo.style.filter = "blur(2px)";
        contact.style.display = "none";

    }

}




function unBlurBackground() {
    modalOpen = false;
    if (isMobile) {
        body.style.overflow = "visible";
        artists_content_mobile.style.display = "block"
        artists_content_mobile.style.filter = "blur(0px)";
        artists_content_mobile.style.opacity = "1"
        footer.style.display = "flex";
        logo.style.display = "block";
        footer.style.filter = "blur(0)";
        logo.style.filter = "blur(0)";
        contact.style.filter = "blur(0)";
    } else {
        artists_content.style.display = "block";
        artists_content.style.filter = "blur(0px)";
        footer.style.filter = "blur(0)";
        logo.style.filter = "blur(0)";
        contact.style.display = "inline-block";
    }
}


// window.onscroll = function() {
    
    
//     if(modalOpen) {
//         console.log(window.pageYOffset)
//         window.scrollTo(window.pageXOffset, window.pageYOffset);
//     }

// } 

window.onclick = function (event) {

    if (window.innerWidth <= mobileTresh) {
        isMobile = true;
    } else {
        isMobile = false;
    }

    for (let index = 0; index < modals.length; index++) {
        const element = modals[index];
        if (event.target == element) {
            let id = element.id;
            id = id.replace("modal_", "close_");
            close_modal(id);
        }
    }
    if (event.target == contact_container) {
        closeContact();
    }

}

window.onresize = function (event) {
    if (window.innerWidth <= mobileTresh) {
        isMobile = true;
        artists_content.style.display = "none"
        artists_content_mobile.style.display = "block"
    } else {
        isMobile = false;
        artists_content.style.display = "block"
        artists_content_mobile.style.display = "none"
    }
};

function closeContact() {
    contact_container.style.display = "none";
    unBlurBackground();
    
}

function openContact() {
    console.log(window.pageYOffset);
    window.scrollTo(window.pageXOffset, window.pageYOffset);
    contact_container.style.display = "block";
    blurBackground();
    

}

function close_modal(clicked_id) {
    unBlurBackground();
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
        case "close_boshra":
            boshra.style.display = "none";
            break;
        default:
            break;
    }

}

function open_modal(clicked_id) {


    blurBackground();
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

        case "boshra":
            boshra.style.display = "block";
            break;
        default:
            break;
    }



    for (let index = 0; index < modals.length; index++) {
        const element = modals[index];

        var style = window.getComputedStyle(element);
        if (!(style.display === 'none')) {
            let imgContainer = element.getElementsByClassName("modal_img_container")[0];
            let links = element.getElementsByClassName("modal_bottom")[0];
            
            if(!isMobile) {
                links.style.height = imgContainer.offsetWidth + 'px';
            }
            

            console.log(element.childNodes[3].childNodes);
        }

    }


}