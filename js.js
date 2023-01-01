
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('containerM');

signUpButton.addEventListener('click', () =>
container.classList.add('right-panel-active'));

signInButton.addEventListener('click', () =>
container.classList.remove('right-panel-active'));

window.addEventListener("DOMContentLoaded",()=>
{
//------------------tab---------------------------------------------



 


    //--------------------------------timer---------------------

    const deadline = '2024-01-01';
    function TimeRemaining (endtime) {
        const t = Date.parse(endtime)-Date.parse(new Date()),
        days= Math.floor(t/(1000*60*60*24)),
        hours =Math.floor((t/(1000*60*60))%24),
        min = Math.floor((t/(1000*60))%60),
        sec =Math.floor((t/1000)%60)


        return {
            'time': t,
            'days': days,
            'hours': hours,
            'min': min,
            'sec': sec

        };
    }

    function getZero(num){
        if(num>=0 && num<10) {
            return `0${num}`;
        }
        else{
            return num
    }
    }


    function Clock(selector, endtime) {

        const timer = document.querySelector(selector),
              days =timer.querySelector('#days'),
              hours =timer.querySelector('#hours'),
              min =timer.querySelector('#minutes'),
              sec =timer.querySelector('#seconds'),
              timeInterval=setInterval(UpdateClock, 1000);




        function  UpdateClock(){
            const t = TimeRemaining(endtime);

            days.textContent = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            min.textContent = getZero(t.min);
             sec.innerHTML = getZero(t.sec);



            if(t.total <=0){

                clearInterval(timeInterval);
            }
        }
    }


Clock('.timer', deadline);


//-----------------modal



const modalOpen = document.querySelectorAll('[open-modal]'),
      modal=document.querySelector('.modal'),
      madalClose=document.querySelectorAll('[close]')
// const madalTimer=setTimeout(OpenModal, 5000)

      function OpenModal(){
        modal.classList.add('show')
        modal.classList.remove('hide')
        clearInterval(madalTimer)
      }

      function CloseMoal(){
        modal.classList.remove('show')
        modal.classList.add('hide')
      }

      function Scroll(){
        if (window.pageYOffset+document.documentElement.clientHeight >=document.documentElement.scrollHeight){
            OpenModal()
            window.removeEventListener('scroll', Scroll)
        }
      }
     

      modalOpen.forEach(bt => {
      bt.addEventListener('click',OpenModal)
        
  
      });

      
    madalClose.forEach(btn => {
      btn.addEventListener('click',CloseMoal)
        
  
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




    
