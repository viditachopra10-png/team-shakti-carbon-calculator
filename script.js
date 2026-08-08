/* =================================
   TEAM SHAKTI
   CARBON FOOTPRINT CALCULATOR
================================ */


/* ---------- GET ELEMENTS ---------- */

const carbonForm = document.getElementById("carbonForm");

const resultSection = document.getElementById("result");

const carbonResult = document.getElementById("carbonResult");

const resultMessage = document.getElementById("resultMessage");

const tryAgainButton = document.getElementById("tryAgain");


/* ---------- CALCULATOR ---------- */

carbonForm.addEventListener("submit", function(event) {

    /*
       IMPORTANT:
       Prevents the page from refreshing when
       the user presses ENTER.
    */

    event.preventDefault();


    /* Get values */

    const transport =
        Number(document.getElementById("transport").value);

    const electricity =
        Number(document.getElementById("electricity").value);

    const acHours =
        Number(document.getElementById("acHours").value);

    const generator =
        Number(document.getElementById("generator").value);


    /* Basic validation */

    if (
        document.getElementById("transport").value === "" ||
        electricity < 0 ||
        acHours < 0 ||
        generator < 0
    ) {

        alert("Please fill in all the questions.");

        return;

    }


    /*
       Approximate calculation.

       These are simplified educational estimates,
       not an official household emissions calculation.
    */

    const electricityEmission =
        electricity * 0.7;


    const acEmission =
        acHours * 30 * 1.2;


    const generatorEmission =
        generator * 2.5;


    const total =
        transport +
        electricityEmission +
        acEmission +
        generatorEmission;


    const roundedTotal =
        Math.round(total);


    /* Display result */

    carbonResult.textContent =
        roundedTotal.toLocaleString();


    /* Result message */

    if (roundedTotal < 300) {

        resultMessage.textContent =
            "Amazing! 🌱 Your estimated footprint is relatively low. Keep making sustainable choices!";

    }

    else if (roundedTotal < 700) {

        resultMessage.textContent =
            "You're on the right track! 🌿 A few more sustainable choices could reduce your footprint even further.";

    }

    else {

        resultMessage.textContent =
            "There is room to reduce your footprint. 🌍 Small changes in transportation and energy use can make a difference.";

    }


    /* Show result */

    resultSection.classList.remove("hidden");


    /* Scroll smoothly to result */

    setTimeout(function() {

        resultSection.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 100);

});


/* ---------- TRY AGAIN ---------- */

tryAgainButton.addEventListener("click", function() {

    resultSection.classList.add("hidden");

    carbonForm.reset();

    window.scrollTo({
        top: document.getElementById("calculator").offsetTop - 50,
        behavior: "smooth"
    });

});
