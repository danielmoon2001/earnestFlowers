var currentStep = 1;
var answers = { step1: '', step2: '', step3: '' };

function selectAnswer(answer, step) {
    answers['step' + step] = answer;
    console.log("Selected: " + answer + " for step " + step); // Debugging
}

$(document).ready(function() {
    $('.next-step').click(function() {
        if (currentStep < 3) {
            $('.step-' + currentStep).removeClass('active');
            currentStep++;
            $('.step-' + currentStep).addClass('active');
            updateProgressBar();
        }
    });

    $('.prev-step').click(function() {
        if (currentStep > 1) {
            $('.step-' + currentStep).removeClass('active');
            currentStep--;
            $('.step-' + currentStep).addClass('active');
            updateProgressBar();
        }
    });

    function updateProgressBar() {
        var progressPercentage = (currentStep - 1) / 2 * 100;
        $('.progress-bar').css('width', progressPercentage + '%').attr('aria-valuenow', progressPercentage);
    }
});
