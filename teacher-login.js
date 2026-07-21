// =====================================
// PROTOTYPE TEACHER LOGIN
// =====================================


// Demo teacher credentials

const DEMO_TEACHER = {

    staffId:
        "admin@bbdu.ac.in",

    password:
        "admin123"

};


// Get HTML elements

const teacherLoginForm =

    document.getElementById(
        "teacherLoginForm"
    );


const staffIdInput =

    document.getElementById(
        "staffId"
    );


const passwordInput =

    document.getElementById(
        "password"
    );


const loginError =

    document.getElementById(
        "teacherLoginError"
    );


const loginButton =

    document.getElementById(
        "teacherLoginBtn"
    );


const togglePassword =

    document.getElementById(
        "togglePassword"
    );


// =====================================
// SHOW / HIDE PASSWORD
// =====================================

togglePassword.addEventListener(

    "click",

    function () {

        if (
            passwordInput.type
            ===
            "password"
        ) {

            passwordInput.type =
                "text";


            togglePassword.textContent =
                "Hide";

        }

        else {

            passwordInput.type =
                "password";


            togglePassword.textContent =
                "Show";

        }

    }

);


// =====================================
// LOGIN FORM
// =====================================

teacherLoginForm.addEventListener(

    "submit",

    function (event) {

        event.preventDefault();


        // Remove old error

        loginError.textContent =
            "";


        // Get entered values

        const enteredStaffId =

            staffIdInput
                .value
                .trim()
                .toLowerCase();


        const enteredPassword =

            passwordInput
                .value
                .trim();


        // Empty validation

        if (
            !enteredStaffId
            ||
            !enteredPassword
        ) {

            loginError.textContent =

                "Please enter your Staff ID and password.";


            return;

        }


        // Check prototype credentials

        if (

            enteredStaffId
            ===
            DEMO_TEACHER.staffId

            &&

            enteredPassword
            ===
            DEMO_TEACHER.password

        ) {


            // Loading state

            loginButton.disabled =
                true;


            loginButton.textContent =

                "Verifying access...";


            // Save prototype login session

            sessionStorage.setItem(

                "jhd_admin_logged_in",

                "true"

            );


            // Save teacher name

            sessionStorage.setItem(

                "jhd_admin_name",

                "Prototype Admin"

            );


            // Open admin panel

            setTimeout(

                function () {

                    window.location.href =

                        "admin.html";

                },

                600

            );

        }

        else {

            loginError.textContent =

                "Invalid Staff ID or password.";

        }

    }

);
