    let alarmString = null;
    let alarms = [];
    const alarmList = document.getElementById("list");
    const currentTime = document.getElementById("current-time");
    const add = document.getElementById("add");


    function renderList() {
        alarmList.innerHTML = '';
        for (let i = 0; i < alarms.length; i++) {
            addAlarmToDom(alarms[i]);
        }
    }


    // Shows the alarm time which we set
    function addAlarmToDom(time) {
        const li = document.createElement("li");
        li.innerHTML = `
    <input type="checkBox" id="${time.id}" checked class="checkBox">
    <lable for="${time.id}">${time.text}</lable>
    <button class="delete" data-id="${time.id}">Delete</button>
    `;
        alarmList.append(li);
    }

    // Pass the all alarm strings which are set to checAllAlarms function
    const checkAlarm = (timeString) => {
        for (i = 0; i < alarms.length; i++) {
            checkAllAlarms(alarms[i], timeString);
        }
    };

    // Check one by one time string which is similar to the current time
    // If current time and alarm time string are same then alert message
    function checkAllAlarms(item, timeString) {
        if (item.text === timeString) {
            alert(`Now the time is ${item.text}`);
        }
    }

    // Push alarm string into array
    function addAlarm(time) {
        if (time) {
            alarms.push(time);
        }
        renderList();
    }

    // To check which event we clicked 
    function handleClick(e) {
        const target = e.target;

        if (target.className === 'delete') {
            const timeId = target.dataset.id;
            deleteAlarm(timeId);
        }
    }

     // Delete alarm through id which item we choose
     function deleteAlarm(timeId) {
        let newTime = alarms.filter(function (time) {
            return time.id !== timeId;
        })
        alarms = newTime;
        renderList();
    }

    // Create alarm string
    const handleSubmit = (event) => {
        event.preventDefault();
        const { hour, min, sec, zone } = document.forms[0];  /* here variables should be same as form names */
        alarmString = {
            text: getTimeString({
                hours: hour.value,
                minutes: min.value,
                seconds: sec.value,
                zone: zone.value
            }),

            id: Date.now().toString()
        };

        addAlarm(alarmString);

        // after setting the alarm reset the form to set another alarm 
        document.forms[0].reset();
    }

    // To get time string
    const getTimeString = ({ hours, minutes, seconds, zone }) => {
        if (minutes / 10 < 1) {
            minutes = "0" + minutes;
        }
        if (seconds / 10 < 1) {
            seconds = "0" + seconds;
        }
        if(hours/10 < 1){
            hours="0"+hours;
        }
        return `${hours}:${minutes}:${seconds}:${zone}`;
    };

    // To render current time
    const renderTime = () => {

        const date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var zone = hours >= 12 ? "PM" : "AM";
        if (hours > 12) {
            hours = hours % 12;
        }

        const timeString = getTimeString({ hours, minutes, seconds, zone });
        checkAlarm(timeString);
        currentTime.innerHTML = timeString;

    };

    setInterval(renderTime, 1000);



    document.forms[0].addEventListener("submit", handleSubmit);
    document.addEventListener("click", handleClick);