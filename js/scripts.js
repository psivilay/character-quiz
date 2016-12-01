//bear hugger, tree hugger, side hugger, hug-like-no-one-watching hugger?
//strong and unshamed of affection, burly lumber jacks rule, i don't feel loved unless I can barely breathe
//Totally intune with mother nature bro, down to earth, favorite color is green
//you are a passionate firey mess, you act without thinking, impulsive, you totally have your own cinematic soundtrack during hugs

//business back end logic:



//front end user interface logic:

$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();
    var userName = $("#user-name").val();
    var question1 = $("input:radio[name=quality]:checked").val();
    var question2 = $("input:radio[name=likes]:checked").val();
    var question3 = $("input:radio[name=hugs]:checked").val();
    var answer;

    if (question1 === "strong" && question2 === "lumber" && question3 === "breathe") {
      answer = "Great news, " + userName + ", you're a Bear Hugger!";
      $("#pic-results #bear").show();
    } else if (question1 === "down" && question2 === "nature" && question3 === "bark") {
      answer = "Yup, " + userName + ", you're definitely a Tree Hugger!";
      $("#pic-results #tree").show();
    } else if (question1 === "passion" && question2 === "impulse" && question3 === "soundtrack") {
      answer = userName + ", always knew you were a Hug-like-no-one-watching Hugger!";
      $("#pic-results #no-shame").show();
    } else {
      answer = "Uh...it's obvious " + userName + ", that you're a weird insecure side-hugger!";
      $("#pic-results #side-hug").show();
    }

    $("#results").text(answer);

  });
});
