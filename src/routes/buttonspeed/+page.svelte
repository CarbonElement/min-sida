<script>
    let clicks = 0;
    let startTime, interval;
    let elapsedTime = 0;
    let timeString = "0.000s";
    let active = false;
    let started = false;
    let cps = "__"

function formatTime(ms) {
    return (ms / 1000).toFixed(3) + "s";
}

function startTimer() {
    if (!interval) {
        active = true;
        started = true
        startTime = Date.now() - elapsedTime;
        interval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            timeString = formatTime(elapsedTime);
        }, 10); 
    }
}

function stopTimer() {
    active = false;
    clearInterval(interval);
    interval = null;
    elapsedTime = 0; 
    timeString = "5.000s";
    cps = clicks / 5

}

function onKeyDown(e) {
    if (e.key == " ") {
        if(active == false && started == false) {
            start()
        } 
        if (active== true) {
            clicks++;
        }

    }
}

function start() {
    document.getElementById("info").hidden = true;
    startTimer();
    setTimeout(stopTimer, 5000);
}
</script>

<main>
    <h1>Button Speed Test</h1>
    <div class="content">
        <p style="margin-bottom: 15px">Press space as many times possible in 5 seconds and get an estimate of your click speed! </p>
        <p class="left">Time: {timeString}</p> 
        <p class="left">Clicks: {clicks}</p>
        <p class="left">Button speed: {cps} CPS</p>
        <p class="left" id="info">Press space to start</p>
    </div>
</main>
<svelte:window on:keydown|preventDefault={onKeyDown} />
<style>
h1 {
    text-align: center;
    margin:20px;
    font-size: 50px;
}
.content {
    margin:auto;
    width: 50%;
    text-align: center;
}
.left {
    text-align: left;
}
#info {
    color: green;
}
</style>