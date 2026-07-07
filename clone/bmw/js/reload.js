if(matchMedia("screen and (max-width: 600px)").matches){
    console.log("mobile");
}else if(matchMedia("screen and (max-width: 1920px)").matches){
    console.log("tablet");
}else if(matchMedia("screen and (min-width: 1920px)").matches){
    console.log("desktop");
}

window.onresize = function(){
    this.document.location.reload();
}