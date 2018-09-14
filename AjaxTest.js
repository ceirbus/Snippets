// JavaScript Ajax call and append data to HTML elements

const $_data = []; // data we got from the ajax call
let target = "https://reqres.in/api/users/2";

// function to start
$(document).ready(function(){
    $("#get").on('click', function(){
        getData(target);
    });
    
    $('#display').on('click', function(){
        /**
         * for each object in our data array, create an element
         * @param {string} key - index of object in array
         * @param {string} value - object data
         */
        $.each($_data, function(key, value){
            // check if the element already exists
            let targetElementExists = $('#data' + key).length === 0 ? false: true;

            if (!targetElementExists) { // if the element doesn't exist, create it. 
                let newElement = "<div id='data" + key + "'>data: " + value.data.first_name + ' ' + value.data.last_name + "</div>";
                $('#stuff').append(newElement);
            } else { // if it does exist, modify it.
                $('data' + key).html(value.data.first_name + ' ' + value.data.last_name);
            }
        })
    });
});

/**
 * get data from api end point
 * @param {string} url
 */
function getData(url) {
    let $url = url;

    $.ajax({
        url: $url,
        type: 'GET',
        success: function(response) {
            console.log(response);
            $_data.push(response);
        },
        fail: function(data) {
            console.log('error', data.error);
        }
    });

    
}
