let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
  const animals = document.querySelectorAll(".animal");
  const eyes = document.querySelectorAll(".eye");
  const x = event.clientX;
  const y = event.clientY;

  // for (let i = 0; i < shapes.length; ++i) {
  //   const isOdd = i % 2 == 0;
  //   const boolInt = isOdd ? -1 : 1;
  //   shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
  // }

  for (let i = 0; i < animals.length; ++i) {
    const rectLeftEye = eyes[2 * i].getBoundingClientRect();
    const rectRightEye = eyes[2 * i + 1].getBoundingClientRect();

    const leftAnchorX = rectLeftEye.right + rectLeftEye.width / 2;
    const leftAnchorY = rectLeftEye.top + rectLeftEye.height / 2;

    const rightAnchorX = rectRightEye.right + rectRightEye.width / 2;
    const rightAnchorY = rectRightEye.top + rectRightEye.height / 2;

    const leftAngleDeg = angle(x, y, leftAnchorX, leftAnchorY);
    const rightAngleDeg = angle(x, y, rightAnchorX, rightAnchorY);

    eyes[2 * i].style.transform = `rotate(${leftAngleDeg}deg)`;
    eyes[2 * i + 1].style.transform = `rotate(${rightAngleDeg}deg)`;
  }
}

function angle(cx, cy, ex, ey) {
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx);
  const deg = (rad * 180) / Math.PI;
  return deg;
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += "dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

function contact(event) {
  event.preventDefault(event);
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_5j8510n",
      "template_erdx2vn",
      event.target,
      "v3NxKCT8ZSbInMBEf"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly at sam.meurice@gmail.com"
      );
    });
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  return (document.body.classList += " modal--open");
}
