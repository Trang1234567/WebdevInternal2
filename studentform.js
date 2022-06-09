
function submitInfoStudent(){
    //check if the students is between 17 and 60
    const joinyearmonth= new Date(document.getElementById("joiningdate").value).toISOString().slice(0,10);

    const today= new Date().toISOString().slice(0, 10);
    const dob= new Date(document.getElementById("birthday").value).toISOString().slice(0,10);
    const dobyear = dob.toString().slice(0,4);
    const dobmonth = dob.toString().slice(6,7);
    const dobday = dob.toString().slice(9,10);

    const todyear = today.toString().slice(0,4);
    const todmonth = today.toString().slice(6,7);
    const todday = today.toString().slice(9,10)
    let age_in_years;
    if(todmonth > dobmonth || (todmonth == dobmonth) && todday > dobday)
        age_in_years= todyear - dobyear;
    else {
        age_in_years=todyear-dobyear -1;
    }
    if(age_in_years<=60 && age_in_years>=17 && dob!=today){
        const joinyear= joinyearmonth.toString().slice(0,4);
        if(joinyear!="2015"){
            alert("Joining date only from 2015.");
        }
        alert("Student added.");
    }
    else
        alert("Invalid DOB.");
}