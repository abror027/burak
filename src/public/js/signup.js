console.log("Signup frontend javascript file");

$(function () { });


function validateSignupForm() {
    const memberNick = $(".member-nick").val();
    const memberPhone = $(".member-phone").val();
    const memberPassword = $(".member-password").val();
    const confirmPassword = $(".confirm-password").val();
    if (
        memberNick == "" ||
        memberPhone == "" ||
        memberPassword == "" ||
        confirmPassword == ""
    ) {
        alert("Please insert all required imputs");
        return false;
    }

    if (memberPassword !== confirmPassword) {
        alert("Pasword differs, please check!");
        return false;
    }
};
