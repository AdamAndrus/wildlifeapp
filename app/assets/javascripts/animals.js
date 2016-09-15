$("document").ready(function() {

  $("#add_new_animal_button").on(
    "click",
    function() {
      // Data to be submitted
      new_animal = {
        "animal": {
          "common_name": $("#animal_common_name").val(),
          "latin_name": $("#animal_latin_name").val(),
          "location": $("#animal_location").val(),
          "animal_id": $("#animal_id").val()
        }
      }

      $.ajax({
        dataType: 'json',
        url: '/animals',
        method: 'POST',
        data: new_animal,
        success: function(data) {
          add_to_animal_list(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          alert("Add new Animal failed: " + errorThrown);
        }
      });
  });// end add animal

}); // end document ready

// Function to be called after data has been successfully submitted
function add_to_animal_list(data) {
  $("#animal_list").append(
    "<tr>"+
    "<td>"+data.common_name+"</td>"+
    "<td>"+data.latin_name+"</td>"+
    "<td>"+data.location+"</td>"+
    '<td><a href="animals/' + data.id + '">Show</a></td>'+
    '<td><a href="animals/' + data.id + '/edit">Edit</a></td>'+
    "<tr>"
    );
}
