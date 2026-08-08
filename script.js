/* =================================
   TEAM SHAKTI
   CARBON FOOTPRINT CALCULATOR
================================ */

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


    /* ---------- GET ANSWERS ---------- */

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
        age === "" ||
        transport === "" ||
        distance === "" ||
        acCount === 0 ||
        acHours === 0 ||
        electricity === 0 ||
        generator === 0 && generator !== 0 ||
        environment === 0 && environment !== 0 ||
        support === ""
    ) {

        alert("Please answer all the questions.");

        return;
    }


    /* ---------- TRANSPORT SCORE ---------- */

    const transportScores = {

        walk: 0,

        bicycle: 5,

        schoolBus: 25,

        car: 80,

        bike: 60,

        metro: 20

    };


    const transportScore =
        transportScores[transport];


    /* ---------- DISTANCE SCORE ---------- */

    const distanceScores = {

        "0to5": 5,

        "5to15": 20,

        "15to30": 40,

        "more30": 70

    };


    const distanceScore =
        distanceScores[distance];


    /* ---------- ELECTRICITY ---------- */

    const electricityEmission =
        electricity * 0.7;


    /* ---------- AC ---------- */

    const acEmission =
        acCount * acHours * 30 * 1.2;


    /* ---------- GENERATOR ---------- */

    const generatorEmission =
        generator * 20;


    /* ---------- ENVIRONMENTAL ACTION ---------- */

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


    /*
       Keep result positive.
    */

    if (total < 0) {
        total = 0;
    }


    const roundedTotal =
        Math.round(total);


    /* ---------- DISPLAY RESULT ---------- */

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
