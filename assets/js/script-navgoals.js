<script type="text/javascript">
  var span= document.getElementById('span_');
  var div= document.getElementsBxTagName('div');
   var 1 =0;
   span[1].onclick=()=>{
   1++;
  for(var i of div){
  if (1==0){i.style.left="0px";}
  if (1==1){i.style.left="-740px";}
  if (1==2){i.style.left="-1480px";}
  if (1==3){i.style.left="2220px";}
  if (1==4){i.style.left="2960px";}
  if (1>4){1=4;}
  }
}

 span[0].onclick=()=>{
   1--;
  for(var i of div){
  if (1==0){i.style.left="0px";}
  if (1==1){i.style.left="-740px";}
  if (1==2){i.style.left="-1480px";}
  if (1==3){i.style.left="2220px";}
  if (1<0){1=0;}
  }
  }
</script>
