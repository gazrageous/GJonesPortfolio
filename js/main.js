console.log("You must construct additional scripts");

document.getElementById("notavailable").onclick = function() {
  alertNa();
};

function alertNa() {
  window.alert(
    "Since Vertigo is a WP site owned by UTS, i unfortunately can't share the source code for this particular project!"
  );
}

document.getElementById("wip").onclick = function() {
  alertWip();
};

function alertWip() {
  window.alert(
    "This project is currently a work in progress! A demo site and documentation will be coming soon!"
  );
}
