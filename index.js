const form=document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.stopPropagation();
const pass1=document.querySelector('#pass');
const pass2=document.querySelector('#confirm');
const errorMsg=document.querySelector('.error');
if(pass1!==pass2)
{
    e.preventDefault();
    pass1.classList.add('error');
pass2.classList.add('error');
    errorMsg.style.display='block';
}

});