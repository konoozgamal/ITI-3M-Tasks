
let x = new RangeError()
function asmaa(){
let promp_1=document.getElementsByTagName("input")[0];
let my_input=document.getElementById("line");
 try{
    var val = promp_1.value;
     if(val >= 100) {
     x.message = "the number bigger than range";
     throw x;
}
else if(val <= 1){
     x.message = "the number smaller than range";
    throw x;
}
}catch(e){
    console.log(e.message);
}finally{
//    promp_1 =my_input.value;
my_input.innerHTML =val;
}
};

