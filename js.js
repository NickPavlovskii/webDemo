
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('containerM');

signUpButton.addEventListener('click', () =>
container.classList.add('right-panel-active'));

signInButton.addEventListener('click', () =>
container.classList.remove('right-panel-active'));


window.addEventListener("DOMContentLoaded",()=>
{






//-----------------modal


const modalOpen = document.querySelectorAll('[open-modal]'),
      modal=document.getElementById('containerM'),
      madalClose=document.querySelectorAll('[close]')
const madalTimer=setTimeout(OpenModal, 5000)

      function OpenModal(){
        modal.classList.add('show')
        modal.classList.remove('hide')
        clearInterval(madalTimer)
      }

      function CloseModal(){
        modal.classList.remove('show')
        modal.classList.add('hide')
      }

      function Scroll(){
        if (window.pageYOffset+document.documentElement.clientHeight >=document.documentElement.scrollHeight){
            OpenModal()
            window.removeEventListener('scroll', Scroll)
        }
      }
     

      modalOpen.forEach(btn => {
      btn.addEventListener('click',OpenModal)
        
  
      });

      forEach(btn => {
        btn.addEventListener('click',CloseModal)
          
    
        });
  
 

      modal.addEventListener('click',(n)=>{

            if (n.target === modal){
                modal.classList.remove('show')
                modal.classList.add('hide')


            }

    


      });
      document.addEventListener('keydown',(n)=>{

        if (n.code === "Escape" && modal.classList.contains('show')){
            modal.classList.remove('show')
            modal.classList.add('hide')


        }

  });

window.addEventListener('scroll', Scroll);

//---------------Class + rest







        



});



    
