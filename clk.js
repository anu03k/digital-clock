document.addEventListener("DOMContentLoaded", function() {





            var dt = new Date();
            document.getElementById("datetime").innerHTML = (("0" + (dt.getMonth() + 1))) + "/" +
                (("0" + dt.getDate())) + "/" +
                (dt.getFullYear());

            const hour = document.querySelector('.hour');
            const minute = document.querySelector('.minute');
            const second = document.querySelector('.second');
            const time = document.querySelector('.time');
            const toggle = document.querySelector('.toggle');
            const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            toggle.addEventListener("click", (e) => {
                const html = document.querySelector('html')
                if (html.classList.contains('dark')) {
                    html.classList.remove('dark')
                    e.target.innerHTML = 'Dark mode' //light vayeci dark ma jana
                } else { //if light mode
                    html.classList.add('dark')
                    e.target.innerHTML = 'Light mode';
                }


            })

            function setTime() {
                const time1 = new Date();
                const month = time1.getMonth();
                const day = time1.getDay();
                const hours = time1.getHours();
                const hourClk = hours % 12;
                const minutes = time1.getMinutes();
                const seconds = time1.getSeconds();

                hour.style.transform = `translate(-50%, -100%) rotate(${scale(hourClk, 0, 11, 0, 350)}deg)`;
                //here hours get you the current hour ans sclae funxn rotates it accordingly
                minute.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
                second.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 350)}deg)`;
                time.innerHTML = `${hourClk}:${minutes <10 ? `0${minutes}`:minutes}`

    }
    //map a range of number into anotehr

    function scale(number, inMin, inMax, outMin, outMax) {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }



    setTime();
    setInterval(setTime, 1000); //set time every 1 sec





});