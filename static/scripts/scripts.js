function showVideosAndHideWarning() {
   var videos = document.getElementById("videos-block");
   var warning = document.getElementById("warning-block");

   warning.style.display = "none";

   var iframes = document.getElementsByTagName("iframe");
   for(var i = 0; i < iframes.length; i++){
      iframes[i].setAttribute("src", iframes[i].getAttribute("data-src"));
   }

   videos.style.display = "block";
}
