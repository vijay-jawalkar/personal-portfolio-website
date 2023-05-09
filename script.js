var skillNavBar = document.querySelectorAll(".nav-menu a");

for (var i = 0; i < skillNavBar.length; i++) {
  skillNavBar[i].addEventListener("click", function (event) {
    event.preventDefault();

    var skillTargetId = this.textContent.trim().toLowerCase();
    var skillTarget = document.getElementById(skillTargetId);

    var interval = setInterval(function () {
      var targetPos = skillTarget.getBoundingClientRect();

      if (targetPos.top <= 0) {
        clearInterval(interval);
        return;
      }

      window.scrollBy(0, 50);
    }, 50);
  });
}

// theme changer code

function themeConverter(color) {
  return function () {
    document.body.style.backgroundColor = color;
  };
}

document.getElementById("light").onclick = themeConverter("#B2FFFF");
document.getElementById("dark").onclick = themeConverter("#0066b2");
