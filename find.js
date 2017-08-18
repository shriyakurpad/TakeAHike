jQuery( document ).ready(function( $ ) {
    $( ".go-btn" ).click(function() {
        // Grab text from select boxes
        var firstSelection = $( "#selection1 option:selected" ).text();
        var secondSelection = $( "#selection2 option:selected" ).text();

        // Set URL, change as necessary
        var url = "result.html" + firstSelection + "/" + secondSelection;

        // Redirect
        window.location.href = url;
    });
});
