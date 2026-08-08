/* =========================================
   TEAM SHAKTI
   DIGITAL CARBON FOOTPRINT CALCULATOR
========================================= */


/* ---------- GET FORM ELEMENTS ---------- */

const carbonForm = document.getElementById("carbonForm");

const resultSection = document.getElementById("result");

const carbonResult = document.getElementById("carbonResult");

const resultMessage = document.getElementById("resultMessage");

const tryAgainButton = document.getElementById("tryAgain");

const userName = document.getElementById("userName");


/* ---------- CALCULATE CARBON FOOTPRINT ---------- */

carbonForm.addEventListener("submit", function (event) {

    /*
       VERY IMPORTANT:
       This prevents Enter from refreshing
       the page instead of calculating.
    */

    event.preventDefault();


    /* ---------- GET ANSWERS ---------- */

    const name =
        document.getElementById("name").value.trim();

    const age =
        document.getElementById("age").value;

    const transport =
        document.getElementById("transport").value;

    const distance =
        document.getElementById("distance").value;

    const acCount =
        Number(document.getElementById("acCount").value);

    const acHours =
        Number(document.getElementById("acHours").value);

    const electricity =
        Number(document.getElementById("electricity").value);

    const generator =
        Number(document.getElementById("generator").value);

    const environment =
        Number(document.getElementById("environment").value);

    const support =
        document.getElementById("support").value;


    /* ---------- VALIDATION ---------- */

    if (
        name === "" ||
        age === "" ||
        transport === "" ||
        distance === "" ||
        !document.getElementById("acCount").value ||
        !document.getElementById("acHours").value ||
        !document.getElementById("electricity").value ||
        !document.getElementById("generator").value ||
        !document.getElementById("environment").value ||
        support === ""
    ) {

        alert("Please answer all the questions.");

        return;
    }


    /* ---------- TRANSPORT EMISSIONS ---------- */

    const transportScores = {

        walk: 0,

        bicycle: 5,

        schoolBus: 25,

        car: 80,

        bike: 60,

        metro: 20

    };


    const transportScore =
        transportScores[transport] || 0;


    /* ---------- DAILY DISTANCE ---------- */

    const distanceScores = {

        "0to5": 5,

        "5to15": 20,

        "15to30": 40,

        "more30": 70

    };


    const distanceScore =
        distanceScores[distance] || 0;


    /* ---------- ELECTRICITY ---------- */

    const electricityEmission =
        electricity * 0.7;


    /* ---------- AIR CONDITIONING ---------- */

    const acEmission =
        acCount * acHours * 30 * 1.2;


    /* ---------- DIESEL GENERATOR ---------- */

    const generatorEmission =
        generator * 20;


    /* ---------- ENVIRONMENTAL ACTIVITIES ---------- */

    const environmentalReduction =
        environment * 10;


    /* ---------- TOTAL ---------- */

    let total =
        transportScore +
        distanceScore +
        electricityEmission +
        acEmission +
        generatorEmission -
        environmentalReduction;


    /* ---------- KEEP RESULT POSITIVE ---------- */

    if (total < 0) {

        total = 0;

    }


    /* ---------- ROUND RESULT ---------- */

    const roundedTotal =
        Math.round(total);


    /* ---------- SHOW USER'S NAME ---------- */

    userName.textContent =
        name + "'s";


    /* ---------- SHOW CARBON RESULT ---------- */

    carbonResult.textContent =
        roundedTotal.toLocaleString();


    /* ---------- RESULT MESSAGE ---------- */

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


    /* ---------- SHOW RESULT ---------- */

    resultSection.classList.remove("hidden");


    /* ---------- SCROLL TO RESULT ---------- */

    setTimeout(function () {

        resultSection.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

    }, 100);

});


/* ---------- TRY AGAIN BUTTON ---------- */

tryAgainButton.addEventListener("click", function () {


    /* Hide result */

    resultSection.classList.add("hidden");


    /* Reset all questions */

    carbonForm.reset();


    /* Scroll back to calculator */

    window.scrollTo({

        top:
            document.getElementById("calculator").offsetTop - 50,

        behavior: "smooth"

    });

});
