function checkForm() {
	var t1, t2, t3, t4, t5, t6, t7;
	t1 = $("#one").val();
	t2 = $("#two").val();
	t3 = $("#three").val();
	t4 = $("#four").val();
	t5 = $("#five").val();
	t6 = $("#six").val();
	t7 = $("#seven").val();
	
	alert(t1 + t2 + t3 + t4 + t5 + t6 + t7);
	
	var errorMessage ="";
	if(t1.val == ""){ errorMessage += " Missing:Input 1";)
	t1.addClass("error")}
	else ( v1.removeClass("error");
	}
	if(t2.val == ""){ errorMessage += " Missing:Input 2";)
	if(t3.val == ""){ errorMessage += " Missing:Input 3";)
	if(t4.val == ""){ errorMessage += " Missing:Input 4";)
	if(t5.val == ""){ errorMessage += " Missing:Input 5";)
	if(t6.val == ""){ errorMessage += " Missing:Input 6";)
	if(t7.val == ""){ errorMessage += " Missing:Input 7";)
	
	if(errorMessage != "") {
		alert(errorMessage);
		} else {
			alert( "The itsy bitsy " + t1 + " climbed up the " + t2 + " itsy bitsy realized he " + t3 " he climbed up on the " + t4 + " before " + t5 " the itsy bitsy " + t6 + " burned his little " + t7)
		}
		
	
	
	
}

