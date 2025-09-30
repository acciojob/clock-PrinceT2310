//your JS code here. If required.

        setInterval(() => {

            let date = new Date();

            let time = `${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`

            let currDate = `${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`
            document.getElementById("timer").innerText = `${currDate}, ${time}`
        }, 1000)
