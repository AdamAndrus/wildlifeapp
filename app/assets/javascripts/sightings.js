$("document").ready(function() {

  $("#add_new_sighting_button").on(
    "click",
    function() {
      // Data to be submitted
      new_sighting = {
        "sighting": {
          "date": $("#sighting_date").val(),
          "time": $("#sighting_time").val(),
          "latitude": $("#sighting_latitude").val(),
          "longitude": $("#sighting_longitude").val(),
          "region": $("#sighting_region").val(),
          "animal_id": $("#animal_id").val()
          )
        }
      }

      $.ajax({
        dataType: 'json',
        url: '/sightings',
        method: 'POST',
        data: new_sighting,
        success: function(data) {
          add_to_sighting_list(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          alert("Add new Sighting failed: " + errorThrown);
        }
      });
  });// end add animal

}); // end document ready

// Function to be called after data has been successfully submitted
function add_to_sighting_list(data) {
  $("#sighting_list").append(
    "<ul><li>Date:"+data.date+"</li>" +
    "<li>Time:"+data.time+"</li>" +
      "<li>Longitude:"+data.longitude+"</li>" +
      "<li>Latitude:"+data.latitude+"</li>" +
      "<li>Region:"+data.region+"</li>" +
   "</ul>"
    );
}
