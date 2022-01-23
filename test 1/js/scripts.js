function submitToAPI(e) {
       e.preventDefault();
       var URL = "https://5y4lezcrwb.execute-api.us-east-1.amazonaws.com/prod1/contact";

        if ($("#email-input").val()=="") {
            alert ("Please enter your email id");
            return;
        }

        var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
        if (!reeamil.test($("#email-input").val())) {
            alert ("Please enter valid email address");
            return;
        }

       var email = $("#email-input").val();
       var data = {
          email : email,
        };

       $.ajax({
         type: "POST",
         url : "https://5y4lezcrwb.execute-api.us-east-1.amazonaws.com/prod1/contact",
         dataType: "json",
         crossDomain: "true",
         contentType: "application/json; charset=utf-8",
         data: JSON.stringify(data),

         success: function () {
           document.getElementById("contactForm").reset();
           location.reload();
           document.getElementById("submitSuccessMessage").classList.remove('d-none');
           successmessage = 'Data was succesfully captured';
         },
         error: function () {
           document.getElementById("contactForm").reset();
           location.reload();
         }});
     }