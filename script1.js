
////////////////////////////////////////////
//
//           JavaScript Functions
//
////////////////////////////////////////////

// imageChangeScript
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
        var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
        if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_findObj(n, d) { //v4.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
        d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && document.getElementById) x=document.getElementById(n); return x;
}
function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

// showHideLayerScript
function MM_showHideLayers() { //v3.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v='hide')?'hidden':v; }
    obj.visibility=v; }
}

function shclose() {
	le_sub1.style.display = "none";	
	le_sub2.style.display = "none";	
	le_sub3.style.display = "none";	
	le_sub4.style.display = "none";	
	
}

function shmenu1() {
	if( document.getElementById("le_sub2").style.display  == "none")
	{
	le_sub1.style.display = "";	
	le_sub2.style.display = "none";	
	le_sub3.style.display = "none";	
	le_sub4.style.display = "none";	
	}
	else
	{
		shclose() ;
	}	
	
}

function shmenu2() {
	if( document.getElementById("le_sub2").style.display  == "none")
	{
	le_sub1.style.display = "none";	
	le_sub2.style.display = "";	
	le_sub3.style.display = "none";	
	le_sub4.style.display = "none";	
	
	
	}
	else
	{
		shclose() ;
	}
}
function shmenu3() {
	if( document.getElementById("le_sub3").style.display  == "none")
	{
	le_sub1.style.display = "none";	
	le_sub2.style.display = "none";	
	le_sub3.style.display = "";	
	le_sub4.style.display = "none";	
	
	
	}
	else {
		shclose() ;
	}
}

function shmenu4() {
	if( document.getElementById("le_sub4").style.display  == "none")
	{
	le_sub1.style.display = "none";	
	le_sub2.style.display = "none";	
	le_sub3.style.display = "none";	
	le_sub4.style.display = "";	
	
	
	}
	else {
		shclose() ;
	}
}

function shmenu5() {
	1;
}
function shmenu6() {
	1;
}

