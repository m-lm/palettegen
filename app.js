function generate() {
	var img = document.getElementById("img_upload").files[0];
	console.log(img);
	var reader = new FileReader();
	reader.onload = function(x) {
		var draw = document.createElement("img");
		draw.src = x.target.result;
		document.body.appendChild(draw);
	}
	reader.readAsDataURL(img);
//	var canvas = document.getElementById("drawn");
//	ctx = canvas.getContext("2d");
//	ctx.drawImage(img, 100, 100);
}

