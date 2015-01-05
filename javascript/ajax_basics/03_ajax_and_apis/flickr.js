// 1) User clicks a button
// 2) JS program will get the word on that button
// 3) Make a GET request to Flickr, sending the word along
// 4) Receive the JSON response
// 5) Add a link and add an <img> tag to the page

$('form').submit(function(e){
    e.preventDefault();
    var $searchField = $("#search");
    var $submitButton = $("#submit");
    
    $searchField.prop("disabled", true);
    $submitButton.attr("disabled", true).val("Searching...");
    var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var search = $searchField.val();
    var flickrOptions = {
        tags: search,
        format: "json"
    };
    function displayPhotos(data) {
        var photoHTML = '<ul>';
        $.each(data.items, function(i, photo){ //first argument is an array, second is function with (index of array, item in array)
            photoHTML += '<li class="grid-25 tablet-grid-50">';
            photoHTML += '<a href="' + photo.link + '" class="image">'
            photoHTML += '<img src="' + photo.media.m + '"></a></li>'
        });
        photoHTML += '</ul>';
        $("#photos").html(photoHTML);
        
        $searchField.prop("disabled", false);
        $submitButton.attr("disabled", false).val("Search");
    };
    $.getJSON(flickrAPI, flickrOptions, displayPhotos);
    // Arguments:
    // 1) url to resource
    // 2) data we want to send along with url
    // 3) callback function - runs when flickr sends back response
});

// Challenge
// 1) Replace button click event with form submit event
// 2) Stop the form from submitting
// 3) Retrieve the value the visitor typed into the input field