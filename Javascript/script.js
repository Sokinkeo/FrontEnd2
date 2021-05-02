var a;
function show_hide()
{
	if (a==1) 
	{

		document.getElementById("footer").style.display="none";
		document.getElementById("btn-footer").style.marginBottom = "-75px";
		return a=0;
	}
	else
	{
		document.getElementById("footer").style.display="inline";
		document.getElementById("btn-footer").style.marginBottom = "0px";
		return a=1;
	}
}
document.getElementById("footer").style.display="none";
document.getElementById("btn-footer").style.marginBottom = "-75px";