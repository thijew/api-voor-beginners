getData(urlMe).then( data222 => {

    let mySection = document.querySelector('section:nth-of-type(1)');


    let avatar = data222.data.avatar;
    console.log(avatar);

    let myName = data222.data.name;
    let img = document.createElement('img');

    img.src = avatar;
    img.alt = myName;

    console.log(img);

    mySection.appendChild(img);

});














/************/
/* SPIEKBRIEF */
/**************/

// const mySection = document.querySelector('section:nth-of-type(1)');

// getMyImage();

// function getMyImage() {
// 	getData(urlMe).then( data => {  
// 		const myData = data.data;
// 		let myName = myData.name;
// 		let myImgSrc = myData.avatar;

// 		if (!myImgSrc) {
// 			myImgSrc = "images/placeholder1.svg";
// 		}

// 		const myImg = document.createElement("img");

// 		myImg.src = myImgSrc;
// 		myImg.alt = myName;

// 		mySection.append(myImg);
// 	});	
// }