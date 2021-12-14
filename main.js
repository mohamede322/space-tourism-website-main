// content
let destName = document.querySelector(".dest-name");
let destDesc = document.querySelector(".dest-desc");
let distanceTxt = document.querySelector(".distance");
let timeTxt = document.querySelector(".time");
let img = document.querySelector(".image img");
let crewRole = document.querySelector(".role");
let crewName = document.querySelector(".name");
let crewBio = document.querySelector(".bio");
let crewImg = document.querySelector(".right-side-crew img");
let techName = document.querySelector(".main-tech .name");
let techDesc = document.querySelector(".main-tech .desc");
let techImg = document.querySelector(".right-side-tech img");
let navBar = document.querySelector(".links");

// btns
let destBtnS = document.querySelectorAll(".dest-headers a");
let headerBtnS = document.querySelectorAll(".links a");
let exploreBtn = document.querySelector(".exp");
let selectBtnS = document.querySelectorAll(".points div");
let numberS = document.querySelectorAll(".left-side div");
let hamMenu = document.querySelector(".ham-menu");

// explore.onclick
let destLink = document.querySelector(".start");

// pages
let main = document.querySelectorAll("main");
let mainHome = document.querySelector(".main-home");
let mainDestinations = document.querySelector(".main-dest");
let mainCrew = document.querySelector(".main-crew");
let mainTechnology = document.querySelector(".main-tech");

expBtn();
toggleCurrentPage();
toggleActiveBtn();
toggleActiveDestBtn();
hamburgerMenu();
getData();

// Functions
function expBtn() {
  exploreBtn.addEventListener("click", () => {
    main.forEach((m) => {
      m.style.cssText = "display:none";
    });
    mainDestinations.style.cssText = "display:grid";
    headerBtnS.forEach((btn) => {
      btn.classList.remove("active");
    });
    destLink.classList.add("active");
  });
}
function toggleCurrentPage() {
  headerBtnS.forEach((btn) => {
    btn.addEventListener("click", () => {
      main.forEach((m) => {
        m.style.cssText = "display:none";
      });
      if (btn.innerHTML.includes("Home")) {
        mainHome.style.cssText = "display:grid";
      } else if (btn.innerHTML.includes("Destinations")) {
        mainDestinations.style.cssText = "display:grid";
      } else if (btn.innerHTML.includes("Crew")) {
        mainCrew.style.cssText = "display:grid";
      } else if (btn.innerHTML.includes("Technology")) {
        mainTechnology.style.cssText = "display:grid";
      }
    });
  });
}

function toggleActiveBtn() {
  headerBtnS.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      headerBtnS.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
    });
  });
}

function toggleActiveDestBtn() {
  destBtnS.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      destBtnS.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
    });
  });
}

function hamburgerMenu() {
  hamMenu.addEventListener("click", () => {
    navBar.classList.toggle("ham");
  });
}

async function getData() {
  let res = await fetch("data.json");
  let data = await res.json();

  destBtnS.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      destName.innerHTML = e.currentTarget.innerHTML;
      if (destName.innerHTML === "MOON") {
        destDesc.innerHTML = data.destinations[0].description;
        distanceTxt.innerHTML = data.destinations[0].distance;
        timeTxt.innerHTML = data.destinations[0].travel;
        img.src = data.destinations[0].images.png;
      } else if (destName.innerHTML === "MARS") {
        destDesc.innerHTML = data.destinations[1].description;
        distanceTxt.innerHTML = data.destinations[1].distance;
        timeTxt.innerHTML = data.destinations[1].travel;
        img.src = data.destinations[1].images.png;
      } else if (destName.innerHTML === "EUROPA") {
        destDesc.innerHTML = data.destinations[2].description;
        distanceTxt.innerHTML = data.destinations[2].distance;
        timeTxt.innerHTML = data.destinations[2].travel;
        img.src = data.destinations[2].images.png;
      } else if (destName.innerHTML === "TITAN") {
        destDesc.innerHTML = data.destinations[3].description;
        distanceTxt.innerHTML = data.destinations[3].distance;
        timeTxt.innerHTML = data.destinations[3].travel;
        img.src = data.destinations[3].images.png;
      }
    });
  });

  selectBtnS.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      selectBtnS.forEach((btn) => {
        btn.classList.remove("selected");
      });
      e.currentTarget.classList.add("selected");
      if (btn.classList.contains("1")) {
        crewRole.innerHTML = data.crew[0].role;
        crewName.innerHTML = data.crew[0].name;
        crewBio.innerHTML = data.crew[0].bio;
        crewImg.src = data.crew[0].images.png;
      } else if (btn.classList.contains("2")) {
        crewRole.innerHTML = data.crew[1].role;
        crewName.innerHTML = data.crew[1].name;
        crewBio.innerHTML = data.crew[1].bio;
        crewImg.src = data.crew[1].images.png;
      } else if (btn.classList.contains("3")) {
        crewRole.innerHTML = data.crew[2].role;
        crewName.innerHTML = data.crew[2].name;
        crewBio.innerHTML = data.crew[2].bio;
        crewImg.src = data.crew[2].images.png;
      } else if (btn.classList.contains("4")) {
        crewRole.innerHTML = data.crew[3].role;
        crewName.innerHTML = data.crew[3].name;
        crewBio.innerHTML = data.crew[3].bio;
        crewImg.src = data.crew[3].images.png;
      }
    });
  });

  numberS.forEach((number) => {
    number.addEventListener("click", (e) => {
      numberS.forEach((number) => {
        number.classList.remove("clicked");
      });
      e.currentTarget.classList.add("clicked");
      if (number.innerText === "1") {
        techName.innerHTML = data.technology[0].name.toUpperCase();
        techDesc.innerHTML = data.technology[0].description;
        techImg.src = data.technology[0].images.portrait;
      } else if (number.innerText === "2") {
        techName.innerHTML = data.technology[1].name.toUpperCase();
        techDesc.innerHTML = data.technology[1].description;
        techImg.src = data.technology[1].images.portrait;
      } else if (number.innerText === "3") {
        techName.innerHTML = data.technology[2].name.toUpperCase();
        techDesc.innerHTML = data.technology[2].description;
        techImg.src = data.technology[2].images.portrait;
      }
    });
  });
}
