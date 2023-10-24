const buttonLeng=document.getElementById('button_lang');
const langmenu=document.getElementById('menuleng')
var  clean= document.getElementById('clean');
 var languagessave =document.getElementById('languagessave');
var button_lang =document.getElementById('button_lang');
buttonLeng.addEventListener('click',function (){

    console.log(" я нажата");
    //buttonLeng.textContent="Додати";
    if(langmenu.style.display==="flex")
    {
        langmenu.style.display="none";
    }
    else{
        langmenu.style.display="flex"

    }
    clean.style.display="flex";
    buttonLeng.style.display="none";
    languagessave.style.display="flex";

});
function Cansel()
{
    clean.style.display="none";
    buttonLeng.style.display="flex";
    languagessave.style.display="none";
    langmenu.style.display="none";
}
const languageItems = document.querySelectorAll('.counter_leng .div_counter li');
const counter=document.getElementById('div_languages');
const launges=document.getElementById('launges');
 languageItems.forEach(item=>{
     item.addEventListener('click',function (){
         item.style.color="red";
         console.log(item.textContent);
         const selectedLanguage = document.createElement('div');
        selectedLanguage.classList.add('div_languages');
        //selectedLanguage.style.marginLeft="2%";
        selectedLanguage.style.textAlign='center';
        const namelanguage=document.createElement('div')
         const text = document.createTextNode(item.textContent);
         selectedLanguage.appendChild(text);

         counter.appendChild(selectedLanguage);


     });
 });
 function Save()
 {
     languagessave.style.display="none";
     button_lang.style.display='flex';
     clean.style.display="none";
     langmenu.style.display="none";

 }
