window.onload = function() {
	var bkg = document.querySelector('html');
	var imgs = [
		{ 
			src: "bellabella_IMG_5409.jpg", 
			local: "Masset", 
			province: "British Columbia", 
			country: "Canada", 
			lat: 1, 
			lon: 2 
		},
		{ 
			src: "IMG_1349.JPG", 
			local: "Masset", 
			province: "British Columbia", 
			country: "Canada", 
			lat: 1, 
			lon: 2 
		},
		{ 
			src: "IMG_8369_haidagwaii_northbeach.jpg", 
			local: "Masset", 
			province: "British Columbia", 
			country: "Canada", 
			lat: 1, 
			lon: 2 
		},
		{ 
			src: "IMG_9429.JPG", 
			local: "Masset", 
			province: "British Columbia", 
			country: "Canada", 
			lat: 1, 
			lon: 2 
		}
	];

	var n = Math.floor(Math.random()*imgs.length);

	bkg.style.backgroundImage = "url(imgs/" + imgs[n].src + ")";
	document.querySelector('#local').innerText = imgs[n].local;
	document.querySelector('#province').innerText = imgs[n].province;
	document.querySelector('#country').innerText = imgs[n].country;
}