const linksBoxForm        = document.querySelector(".linksBox__form");
const linksBoxTitletInput = linksBoxForm.querySelector("input:first-child");
const linksBoxUrlInput    = linksBoxForm.querySelector("input:nth-child(2)");
const linksBoxSubmitBtn   = linksBoxForm.querySelector("input:last-child");
const linksBoxList        = document.querySelector(".linksBox__links");

const addLink   =   (event) => {
    event.preventDefault();
    
    const titleValue = linksBoxTitletInput.value;
    const urlValue = linksBoxUrlInput.value;

    const urlLink = document.createElement("a");
    urlLink.setAttribute("href",urlValue);
    urlLink.innerText = titleValue;
    
    linksBoxList.appendChild(urlLink);
}

linksBoxSubmitBtn.addEventListener("click", addLink);





// 타이틀 이름 받기

// 링크 주소 받기 

// 이름과 주소를 받아서 링크즈 창에 쌓기

// 화면 초기화 되지 않기 