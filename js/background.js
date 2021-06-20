const images = ["01.jpg","02.jpg","02.jpg"];

const chosenimage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenimage}`;

document.body.appendChild(bgImage);


//이미지 변수 array 생성;   (어떤) 파일이름이랑 같아야한다.

// 이미지를 선택하는 변수 생성
// 사용된함수 Math.floor()와 Math.random()
// "Math.random()"은 0~1 사이의 숫자를 무작으로 뽑는다.
// "Math.random()" * 어떤 변수의 length값을 넣으면

// Element 생성은

