var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw","Kofi","Kwame"];
//create an array denoting the different days of the week
var day = ["0", "1", "2", "3", "4", "5","6"];
//create function to evaluate input from user 

function evaluateDate()
{
    var date = new Date(Akan.birthday.value);
    var day = date.getDay();
    var result;
    var gender = Akan.gender.value

    if ( gender == "male")
    {
        result = maleNames[day];//array in variable to denote the day of the month
    }
    else if( gender =="female")
    {
        result = femaleNames[day];//array in variable to denote the day of the month
    }
    document.getElementById("result").innerHTML = result;

}