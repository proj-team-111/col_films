// otp autofill function
function clickEvent(first,last){
    if(first.value.length){
        document.getElementById(last).focus();
    }
}

// Function that executes on click of first next button.
function next_step1() {
    document.getElementById("step1").style.left = "-700px";
    document.getElementById("step2").style.left = "80px";
    document.getElementById("second").style.backgroundColor = "#fca311";
    document.getElementById("first").style.backgroundColor = "#d4cece";

    if(window.matchMedia("(max-width: 375px)")) {
        document.getElementById("step2").style.left = "8px";
        document.getElementById("step-col").style.left = "40px";
    };

};
// Function that executes on click of second next button.
function next_step2() {
    document.getElementById("step2").style.left = "-700px";
    document.getElementById("step3").style.left = "80px";
    document.getElementById("last").style.backgroundColor = "#fca311";
    document.getElementById("second").style.backgroundColor = "#d4cece";

    if(window.matchMedia("(max-width: 375px)")) {
        document.getElementById("step3").style.left = "8px";
        document.getElementById("step-col").style.left = "40px";
    }
};

