var customer = 0;
var totalAmt = 0;

function calculate_Charges(hrs) {
	var amt = 2;
	if (hrs > 3) {
		amt += Math.ceil(hrs - 3) * 0.5;
	}
	if (amt > 10) {
		amt = 10;
	}

	totalAmt += amt;
	return amt;
}

function forOneCustomer() {
	customer++;
	var parked = parseFloat(prompt("Enter the no. of hours parked: ", ""));
	var amt = calculate_Charges(parked);

	var table = document.getElementsByTagName("table")[0];
	var newRow = table.insertRow(table.rows.length);

	var cel1 = newRow.insertCell(0);
	var cel2 = newRow.insertCell(1);
	var cel3 = newRow.insertCell(2);

	cel1.innerHTML = "Customer " + customer;
	cel2.innerHTML = parked;
	cel3.innerHTML = amt;
}

function inputData() {
	var appendCustomer = "Yes";
	while (appendCustomer == "Yes") {
		forOneCustomer();
		appendCustomer = prompt("Do you want to append a new Customer? ", "Yes");
	}
	var table = document.getElementsByTagName("table")[0];
	var newRow = table.insertRow(table.rows.length);

	var cel1 = newRow.insertCell(0);
	var cel2 = newRow.insertCell(1);
	var cel3 = newRow.insertCell(2);

	cel1.innerHTML = "Total";
	cel2.innerHTML = "";
	cel3.innerHTML = totalAmt;
	// var table = document.getElementById(table1);
	// var lastRow = table.rows.length;
	// lastRow.setAttribute("class","")

	// var country = lastRow.getElementById("Country");
	// country.setAttribute("class", "Country" + lastRow);

	// var lastRow = document.getElementsByClassName("table-info")[-1];

	// lastRow.
}
