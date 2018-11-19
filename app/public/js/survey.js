$(function () {
  const validateForm = function () {
    let isValid = true;

    console.log(isValid)
    
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

    console.log(isValid)
  }


  console.log("I am in Survey.js")

  const displayModal = function (data) {

    // Grab the result from the AJAX post so that the best match's name and photo are displayed.
    $('#match-name').text(data.name);
    $('#match-img').attr('src', data.photo);

    // Show the modal with the best match
    $('#results-modal').modal('toggle');
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
        $('#Quest1').val().trim(),
        $('#Quest2').val().trim(),
        $('#Quest3').val().trim(),
        $('#Quest4').val().trim(),
        $('#Quest5').val().trim(),
        $('#Quest6').val().trim(),
        $('#Quest7').val().trim(),
        $('#Quest8').val().trim(),
        $('#Quest9').val().trim(),
        $('#Quest10').val().trim()
      ]
    };

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


    // $.ajax({
    //   method: 'POST',
    //   url: 'api/employees',
    //   data: newSurvey
    // })
  } else {

    // Display an error alert if the form is not valid
    $('#error')
      .text('Please fill out all fields before submitting!')
      .addClass('alert alert-danger');
  }
}


  $('#btnSubmit').on('click', addSurvey)
});

