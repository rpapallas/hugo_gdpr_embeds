/* MIT License

Copyright (c) 2022 Rafael Papallas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */

function showVideosAndHideWarning() {
   // Hide the warning block from the page
   const warning = document.getElementById("warning-block");
   warning.style.display = "none";

   // Make block with placeholder images invisible.
   const placeholderImagesBlocks = document.getElementsByClassName("placeholder-images-blocks");
   for(var i = 0; i < placeholderImagesBlocks.length; i++)
      placeholderImagesBlocks[i].style.display = "none";

   // Move URL from data-src to src so that iframes will be loaded properly now.
   const iframes = document.getElementsByTagName("iframe");
   for(var i = 0; i < iframes.length; i++)
      iframes[i].setAttribute("src", iframes[i].getAttribute("data-src"));

   // Make the block with iframes visible.
   const videoBlocks = document.getElementsByClassName("video-block");
   for(var i = 0; i < videoBlocks.length; i++)
      videoBlocks[i].style.display = "block";
}
