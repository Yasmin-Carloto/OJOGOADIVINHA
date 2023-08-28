export function changeToInstructionPage(){
    const currentLocation = window.location.href;
    if(currentLocation.includes("pages")){
        window.location.href = "./instructions.html";
    }else{
        window.location.href = "./pages/instructions.html";
    }
    
}

export function changeToPlayPage(){
    const currentLocation = window.location.href;

    if(currentLocation.includes("pages")){
        window.location.href = "./play.html";
    }else{
        window.location.href = "./pages/play.html";
    }
}

export function changeToLandingPage(){
    const currentLocation = window.location.href;

    if(currentLocation.includes("pages")){
        window.location.href = "../index.html";
    }else{
        window.location.href = "./index.html";
    }
}