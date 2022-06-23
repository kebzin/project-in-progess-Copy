

// let usernamedatabase = [];
// let passworddatabase = [];


// document.querySelector('#button').onclick = function(){

// console.log(username()); 
// console.log (password());
// console.log(usernamedatabase);
//  console.log(passworddatabase);

// }

// function username() {
//    let checkuser =   document.querySelector('#username').value;
//    usernamedatabase.push(checkuser);
   
//    return
    
// }
// function password() {
//     let checkpassword =   document.querySelector('#password').value;
//     passworddatabase.push(checkpassword);
//     return
// }



var menueicon = document.querySelector('#menue-icon');
var sidebar = document.querySelector('#sidebar');
var container = document.querySelector('.container');
menueicon.onclick = function () {
    sidebar.classList.toggle("small-sidebar");
    // container.classList.toggle("large-container");
    menueicon.classList.toggle("menueicon-toggle")
}

var  expandMoreUserAccountHomepage = document.querySelector('#expand-more');
var  homepageprofile = document.querySelector('.homepage-profile');
var accountbuttom = document.querySelector('#account-buttom');
accountbuttom.onclick = function display() {

    uploadPicturesOnTheMainpage.style.display == "none";
    if (homepageprofile.style.display == "flex") { // this will display the user accoun on the home scree when the user click the user icon
        
        homepageprofile.style.display = "none";
        homepageprofile.style.transition = "5s";
        homepageprofile.style.animation = "ease-out";
    }
    else if (homepageprofile.style.display = "none" ) {
        homepageprofile.style.display = "flex" ;
        homepageprofile.style.transition = "7s";
    }
    expandMoreUserAccountHomepage.onclick = function ExpandMoreDisplayNone() {
       
        homepageprofile.style.display = "none";
    }
    // ExpandMoreDisplayNone()
    
}

let Sidebar_Enpand_more = document.querySelector('#Sidebar-Enpand_more');
let sidebar_more_details = document.querySelector('.sidebar-more-details')
    Sidebar_Enpand_more.addEventListener('click', () =>{
        sidebar_more_details.classList.toggle('sidebar_more_details')

    })

    


 var  topBack = document.querySelector('#top-back');
var  uploadButtoneHome = document.querySelector('#upload-buttone-home');
var uploadPicturesOnTheMainpage = document.querySelector('.upload-pictures-on-the-mainpage');

uploadButtoneHome.addEventListener("click", b =>{
    b.preventDefault()
    homepageprofile.style.display = "none";
    if (uploadPicturesOnTheMainpage.style.display == "none") {
        uploadPicturesOnTheMainpage.style.display = "flex";
    }else if(uploadPicturesOnTheMainpage.style.display = "flex"){
        uploadPicturesOnTheMainpage.style.display = "none"
        
    }
    topBack.addEventListener("click", c =>{
        uploadPicturesOnTheMainpage.style.display = "none";
        
    })

    
})
    



var filterQuicklink = document.querySelectorAll('.filter p') // Getting the filter para+graph and storing it asa an arrey.
    filterQuicklink.forEach(element =>{ // This function is looping throught the 
        element.addEventListener('click', function (e){ 
            e.preventDefault()
            filterQuicklink.forEach(quick => quick.classList.remove('active-quick-link')) 
              this.classList.add('active-quick-link')
        })
    })



// filterQuicklink.forEach(quicklink =>{
//     quicklink.addEventListener('click', function (e) {
//         e.preventDefault()   
//         filterQuicklink.forEach(quick => quick.classList.remove('active')) 
//             this.classList.add('active')
            
        
        
//     })
// })







// for(i = 0; i < bannerQuickLinkButton.length; i++){
//     bannerQuickLinkButton[i].addEventListener('click', (e) => {
        
//         var filterQuickLinkButton = e.target.dataset.filterQuickLinkButton;
//         // console.log(filterQuickLinkButton);
//         lisContainer.forEach((product) =>{
//             if(filterQuickLinkButton == "all"){
//                 product.display = "block"
//             }else{
//                 if (product.classList.contains(filterQuickLinkButton)){
//                     product.display = "block"
                    
//                 }else
//             }
//         })

        

//     })
// }


// var bannerQuickLinkButton = document.querySelectorAll('.quick-link-filter-btn'); // this is selecting all the quick link filter button and store it in an conter for eay access
// var lisContainer = document.querySelectorAll('.list-container'); // this condiction is looping throught all the the quick link button 

// for (let i = 0; i < bannerQuickLinkButton.length; i++){
// bannerQuickLinkButton[i].addEventListener("click", function() {
//     for(let j =0; j < bannerQuickLinkButton.length;j++){
//         bannerQuickLinkButton[j].classList.remove("active")
//     }
//     this.classList.add("active");
//     const target = this.getAttribute(" ")

//     for(let k =0; k< lisContainer.length; k++){
//         lisContainer[k].style.display = "none";
//         if(target == lisContainer[k].getAttribute("data-id")){
//             lisContainer[k].style.display = "block";
//         }
//         if(target == "all"){
//             lisContainer[k].style = "block";
//         }
//     }
// })
// }


// // let currentHour = date.getHours();
// document.querySelector('.Time-pass').innerHTML = date;

// //  let TimePass =  Date();
// //  let currentHour = TimePass.getHours();
// //  document.querySelector('.time-pass').innerHTML = currentHour;
 
  


// var hours;
// var munit;
// var year;
// var month;
// var days;
// var munit;


// var date = new Date();
// munit = date.getMinutes();
// hours = date.getHours();
// month = date.getMonth();
// year = date.getFullYear();
//     document.querySelector(".time-pass").innerHTML = munit;



//   var  homepageprofile = document.querySelector('.homepage-profile');
//   var accountbuttom = document.querySelector('.account-buttom');
//   accountbuttom.addEventListener('click', () =>{
//       if(homepageprofile.style === "none"){
//         homepageprofile.style = "block"
//       }else {
//         homepageprofile.style = "none"
//       }
//   })
