/*===== LOGIN SHOW and HIDDEN =====*/
const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up')


signUp.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')

    // Add classes
    loginIn.classList.toggle('none')
    loginUp.classList.toggle('block')
})

signIn.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')

    // Add classes
    loginIn.classList.toggle('block')
    loginUp.classList.toggle('none')
})




    const form = document.querySelector('form')

    form.addEventListener('submit', (e) => {
        e.preventDefault();

    const formData = new FormData(form);




        const res = Object.fromEntries(formData);
        const payload = JSON.stringify(res);
        console.log(payload);




    for (item of formData) {
        console.log(item[0], item[1])
    };

    fetch('https://httpbin.org/post', {
        method: "POST",
        body: payload,
        headers:  {
            'Content-Type': 'application/json',
        }
    })

    .then(res => res.json())
    .then(res => console.log(res));

    })



 
