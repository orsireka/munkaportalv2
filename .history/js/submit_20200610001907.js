// // var elBundy = document.getElementById('overlayBtn');
// // if(el){
// //   el.addEventListener('click', swapper, false);
// // }
// document.getElementById('buttonBSW').addEventListener('click', fuck);
// function fuck() {
//   console.log('Hello World!');
// }

document.getElementById('buttonSubmit').addEventListener('click', function () {
  //Example starter JavaScript for disabling form submissions if there are invalid fields
  (function bsValidation() {
    'use strict';
    window.addEventListener(
      'load',
      function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
          form.addEventListener(
            'submit',
            function (event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add('was-validated');
            },
            false
          );
        });
      },
      false
    );
  });
  var F = document.getElementsByClassName('gsheetForm');
  console.log(form.classList.contains('was-validated'));
  console.log()

  if (
    document.getElementById('gsheetForm').classList.contains('was-validated')
  ) {
    document.getElementById('buttonSubmit').classList.remove('basic');
    document.getElementById('buttonSubmit').classList.add('redalert');
  }
});
