var classValue;
var subjectValue;
var link;
setInterval(() => {
     classValue = $("#drop1").find(":selected").text();
     subjectValue = $("#drop2").find(":selected").text();
}, 1);

//If selection is SS1A
setInterval(() => {
    if (classValue == "SS1A") {
        $(".ss1a").css("display", "block");
        subjects1A();
        $("a").attr("href", link);
    } else {
        $(".ss1a").css("display", "none");
    }

//If selection is SS1B
    if (classValue == "SS1B") {
        $(".ss1b").css("display", "block");
        if (subjectValue == "Animal Husbandry") {
            $("a").attr("href", "docs/SS1B/AH SS1B.xlsx");
        }
        if (subjectValue == "Biology") {
            $("a").attr("href", "docs/SS1B/BIO SS1B.xlsx");
        }
        if (subjectValue == "Civic Education") {
            $("a").attr("href", "docs/SS1B/CIVIC SS1B.xlsx");
        }
        if (subjectValue == "CRK") {
            $("a").attr("href", "docs/SS1B/CRK SS1B.xlsx");
        }
        if (subjectValue == "Economics") {
            $("a").attr("href", "docs/SS1B/ECONS SS1B.xlsx");
        }
        if (subjectValue == "English Language") {
            $("a").attr("href", "docs/SS1B/ENG SS1B.xlsx");
        }
        if (subjectValue == "Government") {
            $("a").attr("href", "docs/SS1B/GOVT SS1B.xlsx");
        }
        if (subjectValue == "IRS") {
            $("a").attr("href", "docs/SS1B/IRS SS1B.xlsx");
        }
        if (subjectValue == "LIT-IN-ENG") {
            $("a").attr("href", "docs/SS1B/LIT SS1B.xlsx");
        }
        if (subjectValue == "Mathematics") {
            $("a").attr("href", "docs/SS1B/MATHS SS1B.xlsx");
        }
        if (subjectValue == "Yoruba") {
            $("a").attr("href", "docs/SS1B/YOR SS1B.xlsx");
        }
    } else {
        $(".ss1b").css("display", "none");
    }
}, 1);

// If Selection is SS1B
setInterval(() => {
    
}, 1);

// If Selection is SS1C
setInterval(() => {
    if (classValue == "SS1C") {
        $(".ss1c").css("display", "block");
    } else {
        $(".ss1c").css("display", "none");
    }
}, 1);

// If Selection is SS2A
setInterval(() => {
    if (classValue == "SS2A") {
        $(".ss2a").css("display", "block");
    } else {
        $(".ss2a").css("display", "none");
    }
}, 1);

// If Selection is SS2B
setInterval(() => {
    if (classValue == "SS2B") {
        $(".ss2b").css("display", "block");
    } else {
        $(".ss2b").css("display", "none");
    }
}, 1);

// If Selection is SS2C
setInterval(() => {
    if (classValue == "SS2C") {
        $(".ss2c").css("display", "block");
    } else {
        $(".ss2c").css("display", "none");
    }
}, 1);

// If Selection is SS2D
setInterval(() => {
    if (classValue == "SS2D") {
        $(".ss2d").css("display", "block");
    } else {
        $(".ss2d").css("display", "none");
    }
}, 1);

function subjects1A() {
    switch (subjectValue) {
        case "Agricultural Science":
            link = "docs/SS1A/AGRIC SS1A.xlsx";
            break;
        case "Biology":
            link = "docs/SS1A/BIO SS1A.xlsx";
            break;
        case "Chemistry":
            link = "docs/SS1A/CHE SS1A.xlsx";
            break;
        case "Civic Education":
            link = "docs/SS1A/CIVIC SS1A.xlsx";
            break;
        case "English Language":
            link = "docs/SS1A/ENG SS1A.xlsx";
            break;
        case "Geography":
            link = "docs/SS1A/GEO SS1A.xlsx";
            break;
        case "Marketing":
            link = "docs/SS1A/MARKETING SS1A.xlsx";
            break;
        case "Mathematics":
            link = "docs/SS1A/MATHS SS1A.xlsx";
            break;
        case "Physics":
            link = "docs/SS1A/PHY SS1A.xlsx";
            break;
    }
    }

function subjects1B() {
    switch (subjectValue) {
        case "Animal Husbandry":
            link = "docs/SS1A/AGRIC SS1A.xlsx";
            break;
        case "Biology":
            link = "docs/SS1A/BIO SS1A.xlsx";
            break;
        case "Civic Education":
            link = "docs/SS1A/CHE SS1A.xlsx";
            break;
        case "CRK":
            link = "docs/SS1A/CIVIC SS1A.xlsx";
            break;
        case "Econs":
            link = "docs/SS1A/CIVIC SS1A.xlsx";
            break;
        case "English Language":
            link = "docs/SS1A/ENG SS1A.xlsx";
            break;
        case "Government":
            link = "docs/SS1A/GEO SS1A.xlsx";
            break;
        case "IRS":
            link = "docs/SS1A/MARKETING SS1A.xlsx";
            break;
        case "LIT-IN-ENG":
            link = "docs/SS1A/MARKETING SS1A.xlsx";
            break;
        case "Mathematics":
            link = "docs/SS1A/MATHS SS1A.xlsx";
            break;
        case "Yoruba":
            link = "docs/SS1A/PHY SS1A.xlsx";
            break;
    }
    }