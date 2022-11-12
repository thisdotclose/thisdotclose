function test(){
    let counter = document.getElementById("thisdotclose");
    let count = 1;

    counter.onclick = function(click){
       count++;
    }
    console.log(count);
    if(count >=2){
        close();
    }
}