
let m = 0;
let intertvalTime;
function start() {
    intertvalTime=setInterval(run, 10) //run function will run after 1 second
    function run() {
        if(m==1500)  //when it come 1500 resolution then it will stop
        {
            clearInterval(intertvalTime)
            m=0
        }
        else{
            m += 5;
            const carImage = document.getElementById('carImage');
            carImage.style.marginLeft = m + 'px';
        }
    }
}


function reverse()
{
    intertvalTime=setInterval(run, 10) //run function will run after 1 second
    function run() {
        if(m==0)  //when it come 1500 resolution then it will stop
        {
            clearInterval(intertvalTime)
        }
        else{
            m -= 5;
            const carImage = document.getElementById('carImage');
            console.log(carImage)
            carImage.style.marginLeft = m + 'px';
        }
    }
}

function stop() {
    clearInterval(intertvalTime)
}