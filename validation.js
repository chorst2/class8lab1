$(document).ready(function () {
    // Object containing the validation rules
    var myRules =
        {
            firstName:
                {
                    required:true
                },
            grade:
                {
                    min:5,
                    max:8,
                    digits:true

                }
        };

    // Object containing the error messages
    var myMessages =
        {
            firstName:
                {
                    required: "Fill this in!"
                },
            grade:
                {
                    min:"Too young",
                    max:"Too old",
                    digits:"Please enter a valid grade (whole number)"
                }
        };

    // Pass the configuration to the form's validate() method
    // Needs submitHandler, rules, and messages properties
    $("form").validate(
        {
            submitHandler:runMyProgram,
            rules: myRules,
            messages: myMessages
        }
    );

    function runMyProgram() {
        // Change the text of the <p> with ID of "message" to
        // state, for example, "You have registered Jane for grade 6 camp!"
        // Use the name and grade the user provided in the form.
        var firstName = $("#firstName").val();
        var grade = $("#grade").val();
        $("#message").text(`You have registered ${firstName} for grade ${grade} camp!`);

    }



});