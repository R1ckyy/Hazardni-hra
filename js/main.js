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

function rollone() {
    k1 = Math.ceil(Math.random() * 7)
    document.getElementById("k1").src = `../kostky/kostka${k1}.png`;
}

function rolltwo() {
    k2 = Math.ceil(Math.random() * 7)
    document.getElementById("k2").src = `../kostky/kostka${k2}.png`;
}

function rollthree() {
    k3 = Math.ceil(Math.random() * 7)
    document.getElementById("k3").src = `../kostky/kostka${k3}.png`;
}


tlacitko.addEventListener("click",function(){
    if(rolling != 0) return;
    rolling = 1;
    this.style.borderColor = 'gray';
    this.style.boxShadow = ' 0px 10px #333333';
    this.classList.add('animatepress');
    tlacitkotext.innerHTML = 'Rolling...';
    tlacitkotext.style.color = '#333333';
    presss.play();
    rolls.play();
    timer1 = setInterval(rollone,100)
    timer2 = setInterval(rolltwo,130)
    timer3 = setInterval(rollthree,175)
    setTimeout(() => {
        clearInterval(timer1);
        roll1.play();
    }, 2000);
    setTimeout(() => {
        clearInterval(timer2);
        roll2.play();
    }, (2.5 + (Math.random()*1.5))*1000);
    setTimeout(() => {
        clearInterval(timer3);
        roll3.play();
        rolls.pause();
        rolls.currentTime = 0
        resetbutton();
        kontrolaVyhry()
    }, (4.5 + (Math.random()*1.5))*1000);
});

function resetbutton() {
    tlacitko.style.borderColor = '#ffaa00';
    tlacitko.style.boxShadow = ' 0px 10px #a16b00';
    tlacitko.classList.remove('animatepress');
    tlacitkotext.innerHTML = '🚨🚨 SPIN 🚨🚨';
    tlacitkotext.style.color = '#ffaa00';
    setTimeout(rolling = 0, 1000)
}

function kontrolaVyhry() {
    if(k1 == 7 && k2 == 7 && k3 == 7 ){
        jackpot.play();
    }
    else if(k1 == k2 && k1 == k3){
        bigwin.play();
    }
    else if(k1 == k2){
        win.play();
    }
    else if(k2 == k3){
        win.play();
    }
    else if(k3 == k1){
        win.play();
    }
}