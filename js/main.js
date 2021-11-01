var rolling = 0;
var presss = new Audio();
presss.src ='../sound/button_press.mp3';
var rolls = new Audio();
rolls.src = '../sound/spinning.mp3';
var roll1 = new Audio();
roll1.src = '../sound/stop1.mp3';
var roll2 = new Audio();
roll2.src = '../sound/stop2.mp3';
var roll3 = new Audio();
roll3.src = '../sound/stop3.mp3';
var jackpot = new Audio();
jackpot.src = '../sound/jackpot_sound.mp3';
var bigwin = new Audio();
bigwin.src = '../sound/payout_big.mp3';
var win = new Audio();
win.src = '../sound/payout.mp3';

const tlacitko = document.getElementById('button');
const tlacitkotext = document.getElementById('buttontext');
const obr1 = document.getElementById("k1");
const obr2 = document.getElementById("k2");
const obr3 = document.getElementById("k3");

// Math.ceil(Math.random()*7) 
function rollone() {
    k1 = 5
    obr1.src = `../kostky/kostka${k1}.png`;
}

function rolltwo() {
    k2 = 5
    obr2.src = `../kostky/kostka${k2}.png`;
}

function rollthree() {
    k3 = 5
    obr3.src = `../kostky/kostka${k3}.png`;
}

function kontrolaVyhry() {
    if(k1 == 7 && k2 == 7 && k3 == 7 ){
        jackpot.play();
        tlacitko.style.borderColor = '#ffaa00';
        tlacitko.style.boxShadow = ' 0px 10px #a16b00';
        tlacitko.classList.remove('animatepress');
        tlacitkotext.innerHTML = 'ROLL';
        tlacitkotext.style.color = '#ffaa00';
    }
    else if(k1 == k2 && k1 == k3){
        bigwin.play();
        var colorswitch = 0;
        tlacitko.style.borderColor = '#096e00';
        tlacitko.style.boxShadow = '0px 10px #053800';
        tlacitkotext.style.color = '#096e00';
        setInterval(() => {
            switch(colorswitch){
                case 0:
                    colorswitch = 1
                    obr1.style.borderColor = '#15ff00'
                    obr2.style.borderColor = '#15ff00'
                    obr3.style.borderColor = '#15ff00'
                    tlacitko.style.borderColor = '#15ff00';
                    tlacitko.style.boxShadow = '0px 10px #10ba00';
                    tlacitkotext.style.color = '#15ff00';
                break;
                case 1:
                    colorswitch = 0
                    obr1.style.borderColor = '#096e00'
                    obr2.style.borderColor = '#096e00'
                    obr3.style.borderColor = '#096e00'
                    tlacitko.style.borderColor = '#096e00';
                    tlacitko.style.boxShadow = '0px 10px #053800';
                    tlacitkotext.style.color = '#096e00';
                break;
            }
        }, 1000);
        tlacitko.classList.remove('animatepress');
        tlacitkotext.innerHTML = 'BIG WIN';

        
    }
    else if(k1 == k2 || k2 == k3 || k3 == k1){
        win.play();
        obr1.style.borderColor = '#03fcf4'
        obr2.style.borderColor = '#03fcf4'
        obr3.style.borderColor = '#03fcf4'
        tlacitko.style.borderColor = '#03fcf4';
        tlacitko.style.boxShadow = ' 0px 10px #00c9c3';
        tlacitko.classList.remove('animatepress');
        tlacitkotext.innerHTML = 'SMALL WIN';
        tlacitkotext.style.color = '#03fcf4';
    }
    else{
        tlacitko.style.borderColor = '#ffaa00';
        tlacitko.style.boxShadow = ' 0px 10px #a16b00';
        tlacitko.classList.remove('animatepress');
        tlacitkotext.innerHTML = 'ROLL AGAIN';
        tlacitkotext.style.color = '#ffaa00';
    }
    setTimeout(rolling = 0, 1000)
}

tlacitko.addEventListener("click",function(){
    if(rolling != 0) return;
    rolling = 1;
    this.style.borderColor = 'gray';
    this.style.boxShadow = ' 0px 10px #333333';
    this.classList.add('animatepress');
    tlacitkotext.innerHTML = 'Rolling...';
    tlacitkotext.style.color = '#333333';
    obr1.style.borderColor = '#2b3c45'
    obr2.style.borderColor = '#2b3c45'
    obr3.style.borderColor = '#2b3c45'
    presss.play();
    rolls.play();
    timer1 = setInterval(rollone,100)
    timer2 = setInterval(rolltwo,130)
    timer3 = setInterval(rollthree,175)
    setTimeout(() => {
        clearInterval(timer1);
        obr1.style.borderColor = 'white'
        roll1.play();
    }, (1 + (Math.random()*1))*1000);
    setTimeout(() => {
        clearInterval(timer2);
        obr2.style.borderColor = 'white'
        roll2.play();
    }, (2.5 + (Math.random()*1.5))*1000);
    setTimeout(() => {
        clearInterval(timer3);
        obr3.style.borderColor = 'white'
        roll3.play();
        rolls.pause();
        rolls.currentTime = 0
        kontrolaVyhry()
    }, (4.5 + (Math.random()*1.5))*1000);
});

