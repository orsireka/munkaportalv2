

document.getElementById('buttonSubmit').addEventListener('click', function () {
    $('#gsheetForm').submit(function() {

        $('#buttonSubmit').removeClass('dummy').addClass('redalert');
      
      });
  
  var F = document.getElementById('gsheetForm');
    console.log(form.classList.contains('was-validated'));
console.log(document.getElementById('gsheetForm').classList);

  if (
    document.getElementById('gsheetForm').classList.contains('was-validated')
  ) {
    document.getElementById('buttonSubmit').classList.remove('basic');
    document.getElementById('buttonSubmit').classList.add('redalert');
  }
});



// document.getElementById('buttonBSW').addEventListener('click', fuck);
// function fuck() {
//   console.log('Hello World!');
// }