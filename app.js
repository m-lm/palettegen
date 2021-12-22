function generate() {
	const img = document.getElementById("img_upload").files[0];
	console.log(img, "type: ", typeof img);
	console.log(img.width, "x", img.height);
}

