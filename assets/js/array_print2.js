
team_cap = ["Captain America","Falcon", "Hawkeye"] ;
team_iron = ["Iron Man", "War Machine", "Black Widow"];

team_cap.push("Scarlet Witch");
team_cap.push("Ant Man");

team_iron.push("Vision");
team_iron.push("Spider Man");

for (index = 0; index < team_cap.length; index++){
	document.getElementById("teamcap_roster").innerHTML += team_cap[index] + "<br>";
}

for (index = team_iron.length-1; index >= 0; index--){
	document.getElementById("teamiron_roster").innerHTML += team_iron[index] + "<br>";
}
// document.getElementById(team_cap).innerHTML = team_cap;
// console.log(team_iron.slice(0).reverse);


//Section 2
//Match up 1
for (index = 0; index < team_cap.length; team_cap++) {
	document.getElementById("matchup1").innerHTML += team_cap[index] + "vs" + team_iron[index] + "<br>" ;
}

//Match up 2

//Method 1

team_iron.reverse();
for (index = 0; index < team_cap.length; team_cap++) {
	document.getElementById("matchup2").innerHTML += team_cap[index] + "vs" + team_iron[index] + "<br>" ;
}

//Method 2


for (index = 0; index < team_cap.length; team_cap++) {
	document.getElementById("matchup2").innerHTML += team_cap[index] + "vs" + team_iron[team_iron.length-1-index] + "<br>" ;
}



