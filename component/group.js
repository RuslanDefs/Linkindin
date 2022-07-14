const Group = () => {
    if(document.getElementById('group')){
        class Groups {
            render() {
                let groupCatalog = '';
                GROUP.forEach(({groupname, groupimg, link}) => {
                    groupCatalog += `
                    <a class="group-item d-flex a-cemter" href="${link}">
                        <div class="group-img">
                            <img src="${groupimg}" alt="img">
                        </div>
                        <div class="group-name">
                            ${groupname}
                        </div>
                    </a>
                `;
                });
                const html2 = groupCatalog;
                const group = document.getElementById('group');
                const allgroup = document.querySelector('.all-group');
                group.innerHTML = html2;
                let length = GROUP.length;
                const show = `
                    <button id="show">Show all<span>(${length})</span></button>
                `;
                allgroup.innerHTML = show;
            }
        }
        const productPage2 = new Groups();
        productPage2.render();
        const all = document.getElementById('show')
        all.addEventListener('click', (e) => {
            const group = document.querySelector('.group-list')
            group.classList.add('active')
        });
    }
}
export default Group;