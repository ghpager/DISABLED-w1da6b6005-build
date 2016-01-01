defaultStatus = 'WHSF || World Health & Sports Foundation';

/* Für to_top-Link Bild */
Normal1 = new Image();
Normal1.src = "fileadmin/whsf/top_n.gif";     /* erste Standard-Grafik */
Highlight1 = new Image();
Highlight1.src = "fileadmin/whsf/top_h.gif"; /* erste Highlight-Grafik */


function bau() {
	alert("Diese Seite befindet sich im Aufbau.");
}

function rolli(imgIndex,img,isOver)
{
	if(isOver)
		{document.images[imgIndex].src   =  img;}
	else
		{document.images[imgIndex].src   = img;}
}

function Bildwechsel (Bildnr, Bildobjekt) {
	Bildanzahl = document.images.length;
	Bildnr = Bildanzahl - 1; //Da die Nummer bei 0 zu zählen beginnt und es das letzte Bild ist
	window.document.images[Bildnr].src = Bildobjekt.src;
}

function extra(site,name,props){
detailwin=window.open(site,name,props);
}

function info()
{defaultStatus = 'WHSF || World Health & Sports Foundation';}

function Bbild(deturl,detname)
{
mailer=window.open(deturl+'.html',detname,'width=283,height=758,resizable=no,scrollbars=no,menubar=yes,toolbar=no,directories=no,location=no,status=no');
}


function jumpSite(Which)
{
	for(i=0;i<document.forms[0].elements[Which].length;i++)
		{
			if(document.forms[0].elements[Which].options[i].selected == true)
				{
					link = document.forms[0].elements[Which].options[i].value;
				}
		}
			if (link != '')
				{
					window.document.location.href = link; 
				}
		return true;
}