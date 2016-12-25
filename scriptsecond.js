$(document).ready(
        function() {
            setInterval(function() {
                    $('#hettan').text(
                        localStorage.getItem("lastname"));
                    }, 100);
            });
