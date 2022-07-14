const All = () => {
    const post = document.querySelectorAll('.post')
    post.forEach(elem =>{
        const all = elem.querySelector('.read-more');
        const decription = elem.querySelector('.post-decription');
        all.addEventListener('click', () => {
            decription.classList.add('active')
        })
    })
}
export default All;