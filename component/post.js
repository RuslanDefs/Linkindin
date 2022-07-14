const Post = () => {
	if(document.getElementById('posts')){
		class Posts {
			render() {
				let Data = new Date();
				let Hour = Data.getHours();
				let Minutes = Data.getMinutes();
				let htmCatalog = '';
				POST.forEach(({id, name, status, postimage, description, avatar, likes, triger, triger2}) => {
				htmCatalog += `
				<div class="fluid post">
						<div class="heading d-flex j-between a-center">
							<div class="heading-info d-flex fl-wrap">
								<a href="#">Ted Bell, Annette Nguyen</a>
								<p>and</p>
								<a href="#">Cody Hawkins</a>
								<p>liked this</p>
							</div>
							<div class="heading-controls">
								<button>
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#181818" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
										<path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="#181818" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
										<path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="#181818" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
									</svg>
								</button>
								<div class="controls-menu">
									<button>${triger}</button>
									<button>${triger2}</button>
								</div>
							</div>
						</div>
						<div class="fluid-content">
							<div class="post">
								<div class="user-post d-flex a-center">
									<div class="post-avatar">
										<img src="${avatar}" alt="img">
									</div>
									<div class="post-user__info d-flex fl-direction">
										<span class="post-user__name">${name}</span>
										<span class="post-user__status">${status}</span>
									</div>
									<span class="post-date ml-auto" style="width:fit-content">${Hour  +  ':'  + Minutes}</span>
								</div>
								<div class="post-content">
									<div class="post-decription">
										${description}
									</div>
									<div class="post-img">
										<img src="${postimage}" alt="img">
									</div>
								</div>
							</div>
						</div>
						<div class="footing d-flex j-between">
							<div class="d-flex">
								<div class="contrtol d-flex">
									<button class="likes">
										<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M4.66665 14.6667H2.66665C2.31302 14.6667 1.97389 14.5262 1.72384 14.2762C1.47379 14.0261 1.33331 13.687 1.33331 13.3333V8.66668C1.33331 8.31306 1.47379 7.97392 1.72384 7.72387C1.97389 7.47382 2.31302 7.33334 2.66665 7.33334H4.66665M9.33331 6.00001V3.33334C9.33331 2.80291 9.1226 2.2942 8.74753 1.91913C8.37245 1.54406 7.86375 1.33334 7.33331 1.33334L4.66665 7.33334V14.6667H12.1866C12.5082 14.6703 12.8202 14.5576 13.0653 14.3493C13.3103 14.1411 13.4718 13.8513 13.52 13.5333L14.44 7.53334C14.469 7.34225 14.4561 7.14713 14.4022 6.96151C14.3483 6.77589 14.2547 6.60421 14.1279 6.45835C14.0011 6.3125 13.844 6.19596 13.6677 6.11682C13.4914 6.03768 13.2999 5.99782 13.1066 6.00001H9.33331Z" stroke="#0275B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
										</svg>
									</button>
									<span class="like">
										${likes}
									</span>
								</div>
								<div class="contrtol d-flex">
									<button>
										<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M14 7.66666C14.0023 8.54657 13.7967 9.41458 13.4 10.2C12.9296 11.1412 12.2065 11.9328 11.3116 12.4862C10.4168 13.0396 9.3855 13.3329 8.33333 13.3333C7.45342 13.3356 6.58541 13.13 5.8 12.7333L2 14L3.26667 10.2C2.86995 9.41458 2.66437 8.54657 2.66667 7.66666C2.66707 6.61449 2.96041 5.58322 3.51381 4.68836C4.06722 3.79349 4.85884 3.07037 5.8 2.59999C6.58541 2.20328 7.45342 1.99769 8.33333 1.99999H8.66667C10.0562 2.07665 11.3687 2.66316 12.3528 3.64723C13.3368 4.63129 13.9233 5.94376 14 7.33332V7.66666Z" stroke="#0275B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
										</svg>
									</button>
									<span>
										9
									</span>
								</div>
							</div>
							<div class="sharing">
								<button class="contrtol">
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M12 5.33334C13.1046 5.33334 14 4.43791 14 3.33334C14 2.22877 13.1046 1.33334 12 1.33334C10.8954 1.33334 10 2.22877 10 3.33334C10 4.43791 10.8954 5.33334 12 5.33334Z" fill="#0275B1" stroke="#0275B1" stroke-linecap="round" stroke-linejoin="round"></path>
										<path d="M4 10C5.10457 10 6 9.10457 6 8C6 6.89543 5.10457 6 4 6C2.89543 6 2 6.89543 2 8C2 9.10457 2.89543 10 4 10Z" fill="#0275B1" stroke="#0275B1" stroke-linecap="round" stroke-linejoin="round"></path>
										<path d="M12 14.6667C13.1046 14.6667 14 13.7712 14 12.6667C14 11.5621 13.1046 10.6667 12 10.6667C10.8954 10.6667 10 11.5621 10 12.6667C10 13.7712 10.8954 14.6667 12 14.6667Z" fill="#0275B1" stroke="#0275B1" stroke-linecap="round" stroke-linejoin="round"></path>
										<path d="M5.72672 9.00674L10.28 11.6601" stroke="#0275B1" stroke-linecap="round" stroke-linejoin="round"></path>
										<path d="M10.2734 4.34009L5.72672 6.99342" stroke="#0275B1" stroke-linecap="round" stroke-linejoin="round"></path>
									</svg>
								</button>
							</div>
						</div>
					</div>
				`;
				});
				const html = `<div class="popup-form">${htmCatalog}</div>`;
				const posts = document.getElementById('posts');
				posts.innerHTML = html;
				function addLike(){
					let addLike = document.querySelectorAll('.likes')
					addLike.forEach(elem =>{
					  elem.addEventListener('click', () =>{
						let like = document.querySelector('.like').textContent;
					  })
					})
				}
				addLike();
			}
		}
		const productPage = new Posts();
		productPage.render();
	}
}
export default Post;