class Timer {
    constructor(title, delay, stopCount) {
        this.title = title;
        this.delay = delay;
        this.stopCount = stopCount;
    }

    start() {
        let temp_cyrcle = 0;

        console.log("Timer Bleep started (delay=" +1000+",  stopCount=5)");

        var timerId = setInterval( () => {
            temp_cyrcle++;
            this.tick(temp_cyrcle);
            if ( temp_cyrcle >= this.stopCount)
                this.stop(timerId);
        }, this.delay);
    }

    tick(temp) {
        console.log("Timer Bleep Tick! | cyrcle left " + (this.stopCount - temp));
    }
    stop(temp) {
        clearInterval(temp);
        console.log("Timer Bleep stopped");
    }

}

function runTimer(id, delay, counter){
    let temp = new Timer(id, delay, counter);
    temp.start();
}

runTimer("Bleep", 1000, 5);
