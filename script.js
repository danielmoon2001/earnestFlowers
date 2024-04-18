$(document).ready(function() {
  $('#multi-step-form').find('.step').slice(1).hide();

  // Function to advance to the next step
  function goToNextStep() {
    if (currentStep < 3) {
      $(".step-" + currentStep).addClass("animate__animated animate__fadeOutLeft");
      currentStep++;
      setTimeout(function() {
        $(".step").removeClass("animate__animated animate__fadeOutLeft").hide();
        $(".step-" + currentStep).show().addClass("animate__animated animate__fadeInRight");
        updateProgressBar();
      }, 500); // Timing should match the duration of the CSS animation
    }
  }

  // Function to go to the previous step
  function goToPrevStep() {
    if (currentStep > 1) {
      $(".step-" + currentStep).addClass("animate__animated animate__fadeOutRight");
      currentStep--;
      setTimeout(function() {
        $(".step").removeClass("animate__animated animate__fadeOutRight").hide();
        $(".step-" + currentStep).show().addClass("animate__animated animate__fadeInLeft");
        updateProgressBar();
      }, 500); // Timing should match the duration of the CSS animation
    }
  }

  // Update the progress bar function
  updateProgressBar = function() {
    var progressPercentage = ((currentStep - 1) / 2) * 100;
    $(".progress-bar").css("width", progressPercentage + "%");
  };

  // Initial call to set progress bar
  updateProgressBar();

  // Click event for next-step button
  $(".next-step").click(function() {
    goToNextStep();
  });

  // Click event for prev-step button
  $(".prev-step").click(function() {
    goToPrevStep();
  });

  // Click event for answer buttons to go to the next step
  $(".answers button").click(function() {
    goToNextStep();
  });
});
