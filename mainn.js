var User = {
    First_name: "Filip",
    Last_name: "Jovanović",
    Balance: "$2355.97",
    printKorisnik: function () {
        return console.log(User);
    }
}

User.printUser();


function myTest() {
    console.log("Test x = " + x);
    console.log("Test x = ${x}");

    console.log("Balance: ${User.Balance}");

}

let span = document.getElementById('button');
let text = document.getElementById('text');
span.addEvenetListener('click',(e)=>{
	let obj = JSON.stringify(data.d[0])
	text.innerHTML = obj;
})