// let accountphoto=document.getElementById('account');
// console.log(accountphoto)
// function donwloan(input){
//
//     var file= input.files[0];
//     var reader=new FileReader();
//     reader.readAsDataURL(file);
//
//     reader.onload=function (){
//         var imagrs= document.createElement('img');
//         imagrs.style.borderRadius='50%';
//         imagrs.classList.add('photos')
//         imagrs.src=reader.result;
//         accountphoto.appendChild(imagrs);
//
//     }
// }
var saveschool =document.getElementById('saveschool');
var schoolsave =document.getElementById('schoolsave');
var canselschool =document.getElementById('canselschool');
 var canselprofesion=document.getElementById('canselprofesion');
 var saveprofesion =document.getElementById('saveprofesion');
 var clean= document.getElementById("clean");
function show(name,e)
{

    switch (name) {
        case 'school':
            console.log("school");
           // this.style.display="none";
           // saveschool.style.display="flex";
          //  schoolsave.style.display="flex";
            canselschool.style.display="flex";
          e.style.display="none";
            saveschool.style.display="flex";
          //saveschool.display="flex";
            break;
        case 'profession':
            console.log("profession");
            canselprofesion.style.display="flex";
            e.style.display="none";
            saveprofesion.style.display="flex";
            break;
        case "languages":
            console.log("languages");
            clean.style.display="flex";

    }

}
