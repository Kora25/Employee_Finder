$(function () {


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

    // Here we grab the form elements
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


    $.ajax({
      method: 'POST',
      url: 'api/employees',
      data: newSurvey
    })
  }



  $('#submit').on('click', addSurvey)
});

