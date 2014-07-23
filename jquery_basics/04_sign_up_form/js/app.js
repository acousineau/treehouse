//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times

var $password = $("#password");
var $confirmPassword = $("#confirm_password");
var $submit = $("#submit");
var $username = $("#username");

//Hide hints
$("form span").hide();

function isPasswordValid() {
  return $password.val().length > 8;
}

function arePasswordsMatching() {
  return $password.val() === $confirmPassword.val();
}

function usernamePresent() {
  console.log($username.val().length > 0);
  return $username.val().length > 0;
}

function canSubmit() {
  return isPasswordValid() && arePasswordsMatching() && usernamePresent();
}

function passwordEvent() {
  //Find out if password is valid
  if (isPasswordValid()) {
    //Hide hint if valid
    $password.next().hide();
  } else {
    //Else show hint
    $password.next().show();
  }
}

function confirmPasswordEvent() {
  //Find out if password and confirmation match
  if (arePasswordsMatching()) {
    //Hide hint if matched
    $confirmPassword.next().hide();
  } else {
    //Else show hint
    $confirmPassword.next().show();
  }
}

function enableSubmitEvent() {
  $("#submit").prop("disabled", !canSubmit());
}

//When event happens on username input
$username.focus(usernamePresent).keyup(usernamePresent);

//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

//When event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();