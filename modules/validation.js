const Validation = () => {
    if (document.getElementById('form')) {
        let form = document.getElementById('form')
        // let email = document.forms['form']['mail'];
        // let pass = document.forms['form']['pass'];
        let btn = form.querySelector('button')
        let input = form.querySelectorAll('input');
        input.forEach(el =>{
            el.addEventListener('change', (e) =>{
                if (!e.target.value.length) {
                    btn.disabled = true;
                    btn.style.background = '#1785e57a';
                }
                else{
                   btn.disabled = false;
                    btn.style.background = '#1785e57a';
                }
            })
        })
        // function Validate() {
        //     let input = email.value;
        //     let leng  = input.length;
        //     console.log(leng)
        //     // if (email.value.length < 1) {
        //     //     btn.disabled = true;
        //     //     btn.style.background = '#1785e57a';
        //     //     return false;
        //     // }
        //     // if (pass.value.length < 1) {
        //     //     btn.disabled = true;
        //     //     btn.style.background = '#1785e57a';
        //     //     return false;
        //     // }
        // }
        // Validate();
        function status() {
            let status = false;
            let statusWrap = document.querySelector('.other');
            if (status = false) {
                statusWrap.innerHTML = `
                <a class="d-flex a-center j-center fl-direction" href="index.html">
                    Выйти
                 </a>
            `;
            }
            else {
                statusWrap.innerHTML = `
                <a class="d-flex a-center j-center fl-direction" href="main.html">
                  Войти
                </a>
            `;
            }
        }
        status();
    }
}
export default Validation;