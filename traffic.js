var r=0, o=0, g=0, atm=0;

function automatic()
{
	if(atm==0)
	{
		atm=1;
		val=(document.getElementById("seconds").value)*1000;
		red();		
	}
}

function stop()
{
	if(atm==1)
	{
		atm=0;
	}
}

function red()
{	
	if(r==0)
	{
		if(g==1||o==1)
		{
			document.getElementById("red").src="trrafic pics/red.png";
			document.getElementById("green").src="trrafic pics/yellow.png";
			document.getElementById("orange").src="trrafic pics/green.png";
			r=1;
			o=0;
			g=0;		
		}
		else if (g==0&&o==0)
		{
			document.getElementById("red").src="trrafic pics/red.png";			
			r=1;
		}
	}	
		
	else
	{
		document.getElementById("red").src="trrafic pics/white.png";
		r=0;
	}
	if (atm==1)
	{
		var t=setTimeout("green()",val);
	}
}

function orange()
{
	if(o==0)
	{
		if(r==1||g==1)
		{
			document.getElementById("orange").src="trrafic pics/yellow.png";
			document.getElementById("green").src="trrafic pics/white.png";
			document.getElementById("red").src="trrafic pics/white.png";
			r=0;
			o=1;
			g=0;		
		}
		else if (g==0&&r==0)
		{
			document.getElementById("orange").src="itrrafic pics/yellow.png";			
			o=1;
		}
	}
	else
	{
		document.getElementById("orange").src="trrafic pics/white.png";
		o=0;
	}
	if (atm==1)
	{
		var t=setTimeout("red()",val);
	}
}

function green()
{
	if(g==0)
	{
		if(r==1||o==1)
		{
			document.getElementById("green").src="trrafic pics/green.png";
			document.getElementById("red").src="trrafic pics/white.png";
			document.getElementById("orange").src="trrafic pics/white.png";
			r=0;
			o=0;
			g=1;		
		}
		else if (r==0&&o==0)
		{
			document.getElementById("green").src="trrafic pics/green.pngs";			
			g=1;
		}
	}	
	else
	{
		document.getElementById("green").src="trrafic pics/white.png";
		g=0;
	}
	if (atm==1)
	{
		var t=setTimeout("orange()",val);
	}

}