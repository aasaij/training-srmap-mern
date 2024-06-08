

function validate(evt){
//     document.write("This is testing");
        evt.preventDefault() 
        // console.log("This is testing")
        // let firstName = document.getElementById("txtFirstName").value
        // let lastName = document.getElementById("txtLastName").value

        // console.log("First Name : "  + firstName)
        // console.log("Last Name : "  + lastName)
        const firstName = document.frmContact.txtFirstName.value
        const lastName = document.frmContact.txtLastName.value
        const rbMale = document.getElementById("rbMale")
        const rbFemale = document.getElementById("rbFemale")
        // if (rbMale.checked === true)
        //         gender = "Male"
        // else if (rbFemale.checked === true)
        //         gender = "Female"
        gender = rbMale.checked === true ? "Male": (rbFemale.checked === true?"Female":"Others")
        // const gender = document.frmContact.rbGender.value
        console.log("First Name : "  + firstName)
        console.log("Last Name : "  + lastName)
        console.log("Gender : " + gender)
        
//     alert()
//     window.print()
}
