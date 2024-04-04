/*SEARCH BY USING A CITY NAME (e.g. athens) OR A COMMA-SEPARATED CITY NAME ALONG WITH THE COUNTRY CODE (e.g. athens,gr)*/
const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");
/*PUT YOUR OWN KEY HERE - THIS MIGHT NOT WORK
SUBSCRIBE HERE: https://home.openweathermap.org/users/sign_up*/
// const apiKey = "b3d6647bd7621a5779ae5aed5a65b40e";
const apiKey = config.apikey;


form.addEventListener("submit", e => {
  // 이벤트의 기본 동작을 취소 --> 폼 제출의 기본 동작을 취소하여 페이지를 새로고침하지 않음.
  e.preventDefault();
  // '.ajax-section' 클래스 내부에 있는 '.city' 클래스를 가진 모든 요소 선택
  const listItems = list.querySelectorAll(".ajax-section .city");
  const inputVal = input.value;
  
  //ajax here
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json()) // json으로 변환
    .then(data => {
      const { main, name, sys, weather } = data;
      const icon = `https://openweathermap.org/img/wn/${
        weather[0]["icon"]
      }@2x.png`;

      const li = document.createElement("li");
      li.classList.add("city");
      const markup = `
        <h2 class="city-name" data-name="${name},${sys.country}">
          <span>${name}</span>
          <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        <figure>
          <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
          <figcaption>${weather[0]["description"]}</figcaption>
        </figure>
      `;

        btn1.style.display = "none";
        btn2.style.display = "block";
        btn3.style.display = "block";
        btn4.style.display = "block";
        /*form.style.display = "none";*/
      
      li.innerHTML = markup;
      list.appendChild(li);
    })
    .catch(() => {
      msg.textContent = "유효한 도시를 검색해주세요. 😩";
      btn1.style.display = "none";
      btn2.style.display = "block";
    });

  msg.textContent = "";
  form.reset();
  input.focus();
});

function wearclick()  {
  window.open('new.html','window1','height=' + screen.height + ',width=' + screen.width + 'fullscreen=yes');
}

// function placeclick()  {
//   window.open('place.html','window1', 'menubar=yes');
// }

/*function click() {
  
  // 토글 할 버튼 선택 (btn1)
  const btn1 = document.getElementById('btn1');
  
  // btn1 숨기기 (display: none)
  if(btn2.style.display == 'none') {
        btn2.style.display = 'block';
      }
      // btn` 보이기 (display: block)
      else {
        btn2.style.display = 'none';
      }
  
}*/