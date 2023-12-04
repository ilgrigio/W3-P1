const iconDark = document.querySelector(".dark").classList;
const iconLight = document.querySelector(".light").classList;
iconDark.add("hidden");

const hideVisible = function () {
  if (iconLight.value) {
    iconDark.remove("hidden");
    iconLight.add("hidden");
  }
  if (iconDark.value) {
    iconLight.add("hidden");
    iconDark.remove("hidden");
  }
};
