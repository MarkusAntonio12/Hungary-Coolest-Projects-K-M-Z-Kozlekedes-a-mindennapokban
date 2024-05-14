const consentBox =  
    document.getElementById("consentBox"); 
const acceptBtn =  
    document.querySelector(".consentButton"); 
const rejectBtn =  
    document.querySelector(".rejectButton"); 
  
acceptBtn.onclick = () => { 
    document.cookie = "CookieBy=EzEgySüti:); max-age="
        + 60 * 60 * 24; 
    if (document.cookie) { 
        consentBox.classList.add("hide"); 
    } else { 
        alert 
            ("Nem sikerült a művelet! Próbáld újra!"); 
    } 
}; 
  
rejectBtn.onclick = () => { 
    alert( 
        "Cookie-k elutasítva. A funkciók csak korlátozottan állnak rendelkezésre."); 
    consentBox.classList.add("hide"); 
}; 
  
let checkCookie =  
    document.cookie.indexOf("CookieBy=GeeksForGeeks"); 
checkCookie !== -1 ? consentBox.classList.add("hide") : 
    consentBox.classList.remove("hide");
