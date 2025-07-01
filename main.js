var tabLinks=document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName){
    for(var tabLink of tabLinks){
        tabLink.classList.remove("active-link")
    }
    for(var tabContent of tabContents){
        tabContent.classList.remove("active-tab")
    }
    document.getElementById(tabName).classList.add("active-tab"); 
    


}