document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
            "body").style.visibility = "hidden";
        document.querySelector(
            "#loader").style.visibility = "visible";
    } else {
        document.querySelector(
            "#loader").style.display = "none";
        document.querySelector(
            "body").style.visibility = "visible";
    }
};

$(document).ready(function() {
    $('#login').click(function() {
        var userName = $('#userName').val();
        var password = $('#password').val();
        if (userName === 'admin' && password === 'admin#123') {
            window.location.href = 'dashboard';
        } else {
            var elm = '<p class="error">Something Went wrong! Please Re-try again</p>';
            $(".errorMessage").prepend();
            removeElement();
        }
    });
});

function removeElement(elm) {
    $('.error').remove();
}

// Connectivity Check

window.addEventListener("online", onFunction);
window.addEventListener("offline", offFunction);

function onFunction() {
    document.getElementById("status").style.display = "none";
}

function offFunction() {
    document.getElementById("status").style.display = "block";
}


$(document).ready(function() {
    $('.checkbox').click(function() {
        window.location.href = 'detecting-mood';
    })
    $('.logout-action').click(function() {
        window.location.href = '/';
    })
});

$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

function getTheListFromYoutube() {
    const apiURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=tamil music&type=video&videoDefinition=high&maxResults=0&key=#########################################';
    jQuery.getJSON(apiURL, function(result) {
        var apiResult = result.items;
        apiResult.forEach(item => {
            $('.list').append('<li>' + '<span class="title">' + item.snippet.title + '</span>' + '<span class="description">' + item.snippet.description + '</span><a class="link" target="_blank" href="https://www.youtube.com/watch?v=' + item.id.videoId + '" >Play More</a></li>');
            $('.full-list-play').prepend('<li>' + '<img src=' + item.snippet.thumbnails.default.url + ' width=' + item.snippet.thumbnails.default.width + ' height=' + item.snippet.thumbnails.default.height + ' />' + '<span class="title">' + item.snippet.title + '</span>' + '<span class="description">' + item.snippet.description + '</span><a class="link" target="_blank" href="https://www.youtube.com/watch?v=' + item.id.videoId + '" >Play More</a></li>');
        });

        console.log('result', result.items);
    });
}
getTheListFromYoutube();


$('#searchMusicOrVideo').click(function() {
    var key = $('#search').val();
    event.preventDefault();
    var apiURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + key + '&type=video&videoDefinition=high&maxResults=0&key=#########################################';
    jQuery.getJSON(apiURL, function(result) {
        var apiResult = result.items;
        apiResult.forEach(item => {
            $('.full-list').prepend('<li>' + '<img src=' + item.snippet.thumbnails.default.url + ' width=' + item.snippet.thumbnails.default.width + ' height=' + item.snippet.thumbnails.default.height + ' />' + '<span class="title">' + item.snippet.title + '</span>' + '<span class="description">' + item.snippet.description + '</span><a class="link" target="_blank" href="https://www.youtube.com/watch?v=' + item.id.videoId + '" >Play More</a></li>');
        });
    });


})

$('#search').keypress(function(ev) {
    if (ev.which === 13)
        $('#searchMusicOrVideo').click();
});