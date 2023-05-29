const getStarted = () =>{
    const button = document.querySelector('.get-started-btn');
    const container = document.querySelector('.form-container-inactive');

    let clickCount = 0;

    button.addEventListener('click', ()=>{
        clickCount++;

        if(clickCount==1)
            container.classList.toggle('form-container-active');
    });
}

const formSlide = () =>{
    const form1 = document.querySelector('.form1');
    const form2 = document.querySelector('.form2');
    const form3 = document.querySelector('.form3');

    const nextBtn1 = document.querySelector('.next1');
    const backBtn1 = document.querySelector('.back1');
    const nextBtn2 = document.querySelector('.next2');
    const backBtn2 = document.querySelector('.back2');

    nextBtn1.addEventListener('click', ()=>{
        event.preventDefault();
        form1.style.left="-500px";
        form2.style.left="50px";
    });

    backBtn1.addEventListener('click', ()=>{
        event.preventDefault();
        form1.style.left="50px";
        form2.style.left="500px";
    });

    nextBtn2.addEventListener('click', ()=>{
        event.preventDefault();
        form2.style.left="-500px";
        form3.style.left="50px";
    });

    backBtn2.addEventListener('click', ()=>{
        event.preventDefault();
        form2.style.left="50px";
        form3.style.left="500px";
    });
}

const App = () =>{
    getStarted();
    formSlide();
}

App();