$(document).ready(function(){

	$('.button').on('click', function() {
		alert("This section of the website is still in development, I promise you that this part of the site will be up soon and these pictures that are currently here will be replaced with photos you upload. If you absolutely cannot wait, You can send some pictures to Jonah Poulson and he can manually add them in. Again this feature will be fully available soon");
	});

	let images = $('.a'); //selects the images and stores them in images variable

	$("#search").on('keyup', function() {
	let searchBox = $('#search').val().toUpperCase(); //grabs the value in the search box and sets it to uppercase
	for ( let i = 0; i < images.length; i++){ //loops through every image in the images collection
		let searchVal = images[i].getAttribute('data-title'); // grabs the current image and gets the data-title attribute
		if (searchVal.toUpperCase().indexOf(searchBox) > -1) { // changes the data title to uppercase and if the index doesn't match the search box, it
			images[i].style.display = "";
			} else {					// changes the styling of the current image depending on the code
			images[i].style.display = "none";
			}
			
        }
    });
});