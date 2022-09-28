// import './vendor/swiper';
import Glide from '@glidejs/glide'
const config = {
	type: 'carousel',
	perView: 3
}
new Glide('.glide', config).mount()

const config1 = {
	type: 'carousel',
	perView: 3
}
new Glide('.glide1', config1).mount()

const config2 = {
	type: 'carousel',
	perView: 3
}
new Glide('.glide2', config2).mount()