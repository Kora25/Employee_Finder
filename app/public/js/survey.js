$(function () {
  const validateForm = function () {
    let isValid = true;

    
    // Using jQuery's each method, loop through the inputs
    // Sets isValid to false if any are empty
    $('input').each(function() {
      if (!$(this).val()) {
        isValid = false;
      }
    });

    // Using jQuery's each method, loop through the select elements
    // Sets isValid to false if any are unchosen
    $('.custom-select').each(function(i, element) {
      if (!$(this).val()) {
        isValid = false;
      }
    });

    return isValid;

  }



  const displayModal = function (data) {

    // Grab the result from the AJAX post so that the best match's name and photo are displayed.
    $('#match-name').text(data.name);
    $('#match-img').attr('src', data.photo);

    // Show the modal with the best match
    $('#results-modal').modal('show');
  }


  /**
   * Get the form info from the page.
   * Clear the form. 
   * Send the data in a POST request.
   */
  const addSurvey = function (event) {
    event.preventDefault();
    
    console.log("I am in Survey")

     // If all required fields are filled
     if (validateForm()) {

      // Create an object for the user's data
    const newSurvey = {
      name: $('#nameInput1').val().trim(),
      photo: $('#photoImage').val().trim(),
      scores: [
        $('#quest1').val().trim(),
        $('#quest2').val().trim(),
        $('#quest3').val().trim(),
        $('#quest4').val().trim(),
        $('#quest5').val().trim(),
        $('#quest6').val().trim(),
        $('#quest7').val().trim(),
        $('#quest8').val().trim(),
        $('#quest9').val().trim(),
        $('#quest10').val().trim()
      ]
    };

    console.log(newSurvey, " this is a new survey");

    // // Clear the form when submitting
    // $('#nameInput1').val('');
    // $('#photoImage').val('');
    // $('#Quest1').val(),
    // $('#Quest2').val(),
    // $('#Quest3').val(),
    // $('#Quest4').val(),
    // $('#Quest5').val(),
    // $('#Quest6').val(),
    // $('#Quest7').val(),
    // $('#Quest8').val(),
    // $('#Quest9').val(),
    // $('#Quest10').val()


// AJAX post the data to the employees API.
$.post('/api/employees', newSurvey, displayModal);

  } else {

    // Display an error alert if the form is not valid
    $('#error')
      .text('Please fill out all fields before submitting!')
      .addClass('alert alert-danger');
  }
}


  $('#btnSubmit').on('click', addSurvey)
});

