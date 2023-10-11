const timer = () => {
  let firstDay = new Date(2022, 10, 26, 0, 0, 0, 0);
  let timeElapsed = Date.now() - firstDay;
  let daysElapsed = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));

  const daysInYear = 365;

  let yearsElapsed = Math.floor(daysElapsed / daysInYear);
  let timeDays = daysElapsed - (yearsElapsed * daysInYear);
  let timeHours = Math.floor((timeElapsed / (1000 * 60 * 60)) % 24);
  let timeMinutes = Math.floor((timeElapsed / (1000 * 60)) % 60);
  let timeSeconds = Math.floor((timeElapsed / 1000) % 60);

  document.getElementById("tempo-total").innerHTML = `${yearsElapsed} anos... ${timeDays} dias... ${timeHours} horas... ${timeMinutes} minutos... ${timeSeconds} segundos...`;

  setTimeout(timer, 1000);
};

timer();

function typeEffect(element, speed) {
  const text = element.innerHTML;
  element.innerHTML = "";

  let i = 0;
  const typing = setInterval(function () {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(typing);
    }
  }, speed);
}

typeEffect(document.getElementById("apelido"), 150  ); // Ajuste a velocidade conforme necessário


