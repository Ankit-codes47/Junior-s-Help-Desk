// Get currently logged-in student

const student = JSON.parse(

    sessionStorage.getItem(
        "jhd_current_student"
    ) || "null"

);


// Redirect if nobody is logged in

if (!student) {

    window.location.href =
        "index.html";

}


// Helper function

function getElement(id) {

    return document.getElementById(id);

}


// ================================
// STUDENT INFORMATION
// ================================

getElement("studentName").textContent =
    student.name.split(" ")[0];


getElement("profileName").textContent =
    student.name;


getElement("profileMobile").textContent =
    "******" + student.mobile.slice(-4);


getElement("profileBranch").textContent =
    student.branch;


getElement("profileSection").textContent =
    student.section;


// ================================
// CLASSROOM INFORMATION
// ================================

getElement("classCode").textContent =
    student.classCode;


getElement("subject").textContent =
    student.subject + " Subject";


getElement("professor").textContent =
    student.professor + " Professor";


getElement("floor").textContent =
    student.floor;


getElement("room").textContent =
    "Room " + student.room;


// Automatically place classroom code
// inside classroom finder

getElement("roomInput").value =
    student.classCode;


// Current year

getElement("year").textContent =
    new Date().getFullYear();


// ================================
// LOGOUT
// ================================

getElement("logout").addEventListener(

    "click",

    function () {

        sessionStorage.removeItem(
            "jhd_current_student"
        );


        window.location.href =
            "index.html";

    }

);


// ================================
// FIND MY CLASSROOM
// ================================

function findRoom() {

    const classroomCode =

        getElement("roomInput")
            .value
            .trim()
            .toUpperCase();


    const route =

        ROOM_ROUTES[classroomCode];


    const resultContainer =

        getElement("routeResult");


    // Classroom not found

    if (!route) {

        resultContainer.innerHTML = `

            <article class="route-card">

                <strong>
                    Classroom not found
                </strong>

                <p>

                    We couldn't find this classroom code.
                    Please check the code and try again.

                </p>

            </article>

        `;

        return;
    }


    // Create route steps

    let routeHTML = "";


    route.steps.forEach(

        function (step, index) {

            routeHTML += `

                <span>
                    ${step}
                </span>

            `;


            if (
                index <
                route.steps.length - 1
            ) {

                routeHTML += `

                    <b>
                        →
                    </b>

                `;

            }

        }

    );


    // Display route

    resultContainer.innerHTML = `

        <article class="route-card">

            <p class="eyebrow">

                YOUR ROUTE
                •
                ${route.floor}
                •
                ROOM ${route.room}

            </p>


            <div class="route-steps">

                ${routeHTML}

            </div>

        </article>

    `;

}


// Find button

getElement("findBtn").addEventListener(

    "click",

    findRoom

);


// Allow Enter key

getElement("roomInput").addEventListener(

    "keydown",

    function (event) {

        if (event.key === "Enter") {

            findRoom();

        }

    }

);


// ================================
// BUILDING EXPLORER
// ================================

const floorTabs =
    getElement("floorTabs");


const floorContent =
    getElement("floorContent");


function renderFloor(floorName) {

    // Update active tab

    const buttons =
        floorTabs.querySelectorAll(
            "button"
        );


    buttons.forEach(

        function (button) {

            button.classList.toggle(

                "active",

                button.dataset.floor ===
                    floorName

            );

        }

    );


    // Get locations

    const locations =

        FLOOR_DATA[floorName] || [];


    // Create cards

    floorContent.innerHTML =

        locations.map(

            function (place) {

                return `

                    <article>

                        <p class="eyebrow">

                            ${place.floor}

                        </p>


                        <h3>

                            ${place.name}

                        </h3>


                        <strong>

                            ${place.wing || ""}

                        </strong>


                        <p>

                            ${place.direction}

                        </p>

                    </article>

                `;

            }

        ).join("");

}


// Create floor buttons

Object.keys(FLOOR_DATA).forEach(

    function (floorName, index) {

        const button =
            document.createElement(
                "button"
            );


        button.textContent =
            floorName;


        button.dataset.floor =
            floorName;


        button.addEventListener(

            "click",

            function () {

                renderFloor(
                    floorName
                );

            }

        );


        floorTabs.appendChild(
            button
        );


        // Display first floor initially

        if (index === 0) {

            renderFloor(
                floorName
            );

        }

    }

);


// ================================
// IMPORTANT PLACES
// ================================

const placesGrid =
    getElement("placesGrid");


placesGrid.innerHTML =

    PLACES.map(

        function (place) {

            return `

                <article>

                    <p class="eyebrow">

                        ${place.floor}

                    </p>


                    <h3>

                        ${place.name}

                    </h3>


                    <strong>

                        ${place.wing}

                    </strong>


                    <p>

                        ${place.direction}

                    </p>

                </article>

            `;

        }

    ).join("");


// ================================
// FIVE STAR FEEDBACK
// ================================

const stars =
    getElement("stars")
        .querySelectorAll(
            "button"
        );


stars.forEach(

    function (star, index) {

        star.addEventListener(

            "click",

            function () {

                const rating =
                    index + 1;


                stars.forEach(

                    function (
                        currentStar,
                        currentIndex
                    ) {

                        currentStar
                            .classList
                            .toggle(

                                "selected",

                                currentIndex <
                                    rating

                            );

                    }

                );


                getElement(
                    "feedbackText"
                ).textContent =

                    "Thank you! You rated the prototype "

                    + rating

                    + " out of 5 stars.";


                // Save rating locally

                localStorage.setItem(

                    "jhd_rating",

                    rating

                );

            }

        );

    }

);