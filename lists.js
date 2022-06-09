const stlist=[
    {
        'studentId': 134,
        'fname': 'Leanne',
        'lname': 'Graham',
        'birthday': '1980-01-19',
        'gender': 'female',
        'joiningdate': '2015-04-01',
        'department': 'Computer Science',
        'email': 'leanne@april.biz'
    },
    {
        'studentId': 256,
        'fname': 'Leo',
        'lname': 'Hubrich',
        'birthday': '1980-04-20',
        'gender': 'male',
        'joiningdate': '2015-10-01',
        'department': 'Physics',
        'email': 'leo@april.biz'
    },
    {
        'studentId': 311,
        'fname': 'Clementine',
        'lname': 'Krithiga',
        'birthday': '1998-03-12',
        'gender': 'female',
        'joiningdate': '2015-05-01',
        'department': 'Economy',
        'email': 'clementine@april.biz'

    },
    {
        'studentId': 678,
        'fname': 'Duc',
        'lname': 'Duc',
        'birthday': '1995-06-12',
        'gender': 'male',
        'joiningdate': '2015-01-20',
        'department': 'Maths',
        'email': 'duc@april.biz'

    },
    {
        'studentId': 113,
        'fname': 'Orange',
        'lname': 'Waldes',
        'birthday': '1991-12-31',
        'gender': 'female',
        'joiningdate': '2015-08-17',
        'department': 'Economy',
        'email': 'orange@april.biz'

    }
]

/**
 * filters the stlist by department ( choice (=element)  via dropbox)
 * @param element user choice
 */
function filterByDepartment(element) {
    document.getElementById("department").value = element;
    let filteredbydep = stlist.filter(student => student.department === element);
    buildTable(filteredbydep);
}

//student's join month from join date
let joinmonth;

/**
 * filters the studentlist by semester (choice via dropbox)
 * @param element user choice
 */
function filterbySemester(element) {
    const joindatelist=stlist.map( i => i.joiningdate);
    let semestergrouplistwinter= [];
    let semestergrouplistsummer= [];

    //gets the substring "month" from joindate, assigns the semester to it and adds it into a list ( seperate list for winter and summer semester)
    for(let i = 0; i< joindatelist.length; i++){
        joinmonth =joindatelist[i].slice(
            joindatelist[i].indexOf('-') + 1,
            joindatelist[i].lastIndexOf('-'));
        if(joinmonth >= "10" || joinmonth<="02"){
            joinmonth='Winter';
            semestergrouplistwinter.push(i);
        }if(joinmonth <= "09" && joinmonth>="04"){
            joinmonth='Summer';
            semestergrouplistsummer.push(i);
        }
    }
    let winterstudents = []
    let summerstudents = []
    //gets users choice from the dropbox
    document.getElementById("semester").value = element;
    //builds table according to the choice
    if(element == 'Summer'){
        for(let i = 0; i< semestergrouplistsummer.length; i++) {
            summerstudents.push(stlist[semestergrouplistsummer[i]]);
        }
        buildTable(summerstudents);
    }
    else if (element == 'Winter'){
        for (let i = 0; i < semestergrouplistwinter.length; i++) {
            winterstudents.push(stlist[semestergrouplistwinter[i]]);
        }
        buildTable(winterstudents);
    }
}

/**
 * builds a table with students data which contains the filtered data
 * @param data array data
 */
function buildTable(data){
    const list1= document.querySelector("tbody");
    //removes previous filtered data so that only current filtered ones are shown
    list1.innerHTML = ' '
    for(let i = 0; i < data.length; i++) {
        var row = `<tr id = row1>
                       <td>${data[i].studentId}</td>
                       <td>${data[i].fname}</td>
                       <td>${data[i].lname}</td>
                       <td>${data[i].birthday}</td>
                       <td>${data[i].gender}</td>
                       <td>${data[i].joiningdate}</td>
                       <td>${data[i].department}</td>
                       <td>${data[i].email}</td><br>
                  </tr>`
        list1.innerHTML += row;
        }
    }

function changelisttostaff(){
    location.href = 'stafflist.html';
}

function changelisttostudent() {
    location.href = 'adminPage.html';
}

function addStudent(){
    location.href = 'studentform.html';
}

function addStaff(){
    location.href = 'staffform.html';
}

function returntolist() {
    location.href = 'adminPage.html';
}



