$(document).ready(function() {
$("#button").click(function() {
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function() {
        'use strict';
        window.addEventListener('load', function() {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener('submit', function(event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');

                }, false);
            });
        }, false);
    })();

    function 
    var x = document.getElementById("submit-to-google-sheet");
    var b = document.getElementById("#buttonSubmit");
    var y = validation;

    if (validation === false) {
        b.classList.remove('basic');
        b.classList.add('redalert');
    }
    });
}