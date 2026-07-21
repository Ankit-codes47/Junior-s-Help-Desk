const loginForm =
    document.getElementById("loginForm");


loginForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document
                .getElementById("name")
                .value
                .trim()
                .toLowerCase();


        const mobile =
            document
                .getElementById("mobile")
                .value
                .trim();


        const error =
            document.getElementById("error");


        const loginButton =
            document.getElementById("loginBtn");


        // Reset previous error

        error.textContent = "";


        // Check empty fields

        if (!name || !mobile) {

            error.textContent =
                "Please enter your name and registered mobile number.";

            return;
        }


        // Check mobile number

        if (!/^\d{10}$/.test(mobile)) {

            error.textContent =
                "Please enter a valid 10-digit mobile number.";

            return;
        }


        // Get prototype student data

        const students =
            getStudents();


        // Find matching student

        const student =
            students.find(function (student) {

                return (

                    student.name.toLowerCase() === name

                    &&

                    student.mobile === mobile

                );

            });


        // Student not found

        if (!student) {

            error.textContent =
                "We couldn't find your details. Please check the information and try again.";

            return;
        }


        // Login loading state

        loginButton.disabled = true;

        loginButton.textContent =
            "Checking your details...";


        // Save logged-in student temporarily

        sessionStorage.setItem(

            "jhd_current_student",

            JSON.stringify(student)

        );


        // Open dashboard

        setTimeout(function () {

            window.location.href =
                "dashboard.html";

        }, 600);

    }
);