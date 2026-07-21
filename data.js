const DEFAULT_STUDENTS = [
    {
        id: 1,
        name: "Pratik Singh",
        mobile: "9565317039",
        branch: "Computer Science & Engineering",
        section: "2B",
        classCode: "L/CAIT/PS/405",
        subject: "CAIT",
        professor: "PS",
        room: "405",
        floor: "4th Floor"
    },
    {
        id: 2,
        name: "Ankit Kumar",
        mobile: "8957844977",
        branch: "Computer Science & Engineering",
        section: "2B",
        classCode: "L/CAIT/PS/405",
        subject: "CAIT",
        professor: "PS",
        room: "405",
        floor: "4th Floor"
    },
    {
        id: 3,
        name: "Harshit Rai",
        mobile: "9580766670",
        branch: "Information Technology",
        section: "B",
        classCode: "L/DBMS/AK/302",
        subject: "DBMS",
        professor: "AK",
        room: "302",
        floor: "3rd Floor"
    }
];


const PLACES = [
    {
        name: "Exam Cell",
        floor: "Ground Floor",
        wing: "Administrative Area",
        direction:
            "Enter through the main entrance and follow the right corridor."
    },
    {
        name: "NSS Office",
        floor: "1st Floor",
        wing: "Central Area",
        direction:
            "Use the main staircase and follow the signs near the office corridor."
    },
    {
        name: "NCC Office",
        floor: "1st Floor",
        wing: "Central Area",
        direction:
            "Located near the student activity offices."
    },
    {
        name: "Library",
        floor: "Upper Ground Floor",
        wing: "Academic Area",
        direction:
            "Go straight from the central lobby."
    },
    {
        name: "Cafeteria",
        floor: "Lower Ground Floor",
        wing: "Common Area",
        direction:
            "Use the staircase near the main lobby."
    },
    {
        name: "Student Help Desk",
        floor: "Ground Floor",
        wing: "Entrance Area",
        direction:
            "Located close to the main entrance."
    }
];


const FLOOR_DATA = {

    "Ground Floor": [
        PLACES[0],
        PLACES[5]
    ],

    "Lower Ground Floor": [
        PLACES[4]
    ],

    "Upper Ground Floor": [
        PLACES[3]
    ],

    "1st Floor": [
        PLACES[1],
        PLACES[2]
    ],

    "2nd Floor": [
        {
            name: "Classrooms",
            floor: "2nd Floor",
            wing: "Academic Area",
            direction:
                "Use either main staircase."
        }
    ],

    "3rd Floor": [
        {
            name: "Room 302",
            floor: "3rd Floor",
            wing: "Academic Area",
            direction:
                "Use Lift 2 or the main staircase."
        }
    ],

    "4th Floor": [
        {
            name: "Room 405",
            floor: "4th Floor",
            wing: "Academic Area",
            direction:
                "Use Lift 2 or Staircase B, then follow room signs."
        }
    ],

    "5th Floor": [
        {
            name: "Classrooms & Labs",
            floor: "5th Floor",
            wing: "Academic Area",
            direction:
                "Use the nearest available lift or staircase."
        }
    ]
};


const ROOM_ROUTES = {

    "L/CAIT/PS/405": {

        floor: "4th Floor",

        room: "405",

        steps: [
            "Main Entrance",
            "Go straight to the central lobby",
            "Use Staircase B or Lift 2",
            "Go to the 4th Floor",
            "Follow classroom number signs",
            "Reach Room 405"
        ]
    },


    "L/DBMS/AK/302": {

        floor: "3rd Floor",

        room: "302",

        steps: [
            "Main Entrance",
            "Go to the central lobby",
            "Use Lift 2 or main staircase",
            "Go to the 3rd Floor",
            "Reach Room 302"
        ]
    }
};


function getStudents() {

    const savedStudents =
        localStorage.getItem("jhd_students");

    if (savedStudents) {

        return JSON.parse(savedStudents);

    }

    return DEFAULT_STUDENTS;
}


function saveStudents(students) {

    localStorage.setItem(
        "jhd_students",
        JSON.stringify(students)
    );
}