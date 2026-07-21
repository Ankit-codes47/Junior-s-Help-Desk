// =====================================
// PROTECT ADMIN PAGE
// =====================================

const adminLoggedIn =

    sessionStorage.getItem(
        "jhd_admin_logged_in"
    );


if (
    adminLoggedIn !== "true"
) {

    window.location.href =

        "teacher-login.html";

}
// Get students from localStorage
// or use default students

let students =
    getStudents();


const studentRows =
    document.getElementById(
        "studentRows"
    );


// ================================
// DISPLAY ADMIN DATA
// ================================

function renderAdminData() {

    // Student count

    document
        .getElementById(
            "studentCount"
        )
        .textContent =
            students.length;


    // Important places count

    document
        .getElementById(
            "placeCount"
        )
        .textContent =
            PLACES.length;


    // ============================
    // STUDENT TABLE
    // ============================

    studentRows.innerHTML =

        students.map(

            function (student) {

                return `

                    <tr>

                        <td>

                            ${student.name}

                        </td>


                        <td>

                            ******${student.mobile.slice(-4)}

                        </td>


                        <td>

                            ${student.branch}

                        </td>


                        <td>

                            ${student.section}

                        </td>



                        <td>

                            <button
                                class="delete"
                                onclick="
                                    removeStudent(
                                        ${student.id}
                                    )
                                "
                            >

                                Delete

                            </button>

                        </td>

                    </tr>

                `;

            }

        ).join("");


    // ============================
    // IMPORTANT PLACES
    // ============================

    document
        .getElementById(
            "adminPlaces"
        )
        .innerHTML =

        PLACES.map(

            function (place) {

                return `

                    <article>

                        <b>

                            ${place.name}

                        </b>


                        <p>

                            ${place.floor}
                            •
                            ${place.wing}

                        </p>


                        <small>

                            ${place.direction}

                        </small>

                    </article>

                `;

            }

        ).join("");

}


// ================================
// DELETE STUDENT
// ================================

function removeStudent(id) {

    const confirmed =
        confirm(
            "Do you want to delete this student?"
        );


    if (!confirmed) {

        return;

    }


    students =

        students.filter(

            function (student) {

                return (
                    student.id !== id
                );

            }

        );


    // Save updated data

    saveStudents(
        students
    );


    // Refresh dashboard

    renderAdminData();

}


// Make function available
// to HTML onclick

window.removeStudent =
    removeStudent;


// ================================
// ADD NEW STUDENT
// ================================

document
    .getElementById(
        "studentForm"
    )
    .addEventListener(

        "submit",

        function (event) {

            event.preventDefault();


            const name =

                document
                    .getElementById(
                        "sName"
                    )
                    .value
                    .trim();


            const mobile =

                document
                    .getElementById(
                        "sMobile"
                    )
                    .value
                    .trim();


            const branch =

                document
                    .getElementById(
                        "sBranch"
                    )
                    .value
                    .trim();


            const section =

                document
                    .getElementById(
                        "sSection"
                    )
                    .value
                    .trim();


            const classCode =

                document
                    .getElementById(
                        "sCode"
                    )
                    .value
                    .trim()
                    .toUpperCase();


            // Validate mobile

            if (
                !/^\d{10}$/.test(
                    mobile
                )
            ) {

                alert(
                    "Enter a valid 10-digit mobile number."
                );

                return;

            }


            // Split classroom code

            const codeParts =

                classCode.split("/");


            const lectureType =

                codeParts[0] || "";


            const subject =

                codeParts[1] || "";


            const professor =

                codeParts[2] || "";


            const room =

                codeParts[3] || "";


            // Determine floor from
            // first room digit

            const floorNumber =

                room.charAt(0);


            const floor =

                floorNumber

                ? floorNumber
                    + "th Floor"

                : "Unknown Floor";


            // Create student object

            const newStudent = {

                id: Date.now(),

                name: name,

                mobile: mobile,

                branch: branch,

                section: section,

                classCode: classCode,

                lectureType:
                    lectureType,

                subject:
                    subject,

                professor:
                    professor,

                room:
                    room,

                floor:
                    floor

            };


            // Add student

            students.push(
                newStudent
            );


            // Save to localStorage

            saveStudents(
                students
            );


            // Reset form

            event.target.reset();


            // Restore default code

            document
                .getElementById(
                    "sCode"
                )
                .value =
                    "L/CAIT/PS/405";


            // Refresh dashboard

            renderAdminData();


            alert(
                "Student added successfully."
            );

        }

    );


// ================================
// INITIAL LOAD
// ================================

renderAdminData();
// =====================================
// ADMIN LOGOUT
// =====================================

const adminLogout =

    document.getElementById(
        "adminLogout"
    );


if (adminLogout) {

    adminLogout.addEventListener(

        "click",

        function () {

            sessionStorage.removeItem(
                "jhd_admin_logged_in"
            );


            sessionStorage.removeItem(
                "jhd_admin_name"
            );


            window.location.href =

                "teacher-login.html";

        }

    );

}