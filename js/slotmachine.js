let rolling = 0;
var bigwinflash
let gcoins = 30;
let pokusy = 0;
let mvyhry = 0;
let vvyhry = 0;
//VAROVÁNÍ !! SPAGHETTI CODE !! VAROVÁNÍ

//-------------AUDIO-----------
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
//-------------------------------

const tlacitko = document.getElementById('button');
const tlacitkotext = document.getElementById('buttontext');
const spaceru = document.getElementById('spaceru');
const spacerd = document.getElementById('spacerd');
const statistiky = document.getElementById('statistiky');
const nadpis = document.querySelector('h1');
const obr1 = document.getElementById("k1");
const obr2 = document.getElementById("k2");
const obr3 = document.getElementById("k3");


tlacitko.addEventListener("click",function(){
    if(rolling != 0 || gcoins == 0) return;
    gcoins--;
    pokusy++;
    refreshstats()
    rolling = 1;
    clearInterval(bigwinflash)
    this.style.borderColor = 'gray';
    this.style.boxShadow = ' 0px 10px #333333';
    this.classList.add('animatepress');
    tlacitkotext.innerHTML = 'Rolling';
    tlacitkotext.style.color = '#333333';
    spacerd.style.borderColor = '#2b3c45';
    spaceru.style.borderColor = '#2b3c45';
    obr1.style.borderColor = '#2b3c45';
    obr2.style.borderColor = '#2b3c45';
    obr3.style.borderColor = '#2b3c45';
    presss.play();
    rolls.play();
    timer1 = setInterval(rollone,100 + (Math.random()*50))
    timer2 = setInterval(rolltwo,130 + (Math.random()*40))
    timer3 = setInterval(rollthree,145 + (Math.random()*15))
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

// Math.ceil(Math.random()*7) 
function rollone() {
    k1 = Math.ceil(Math.random()*7) 
    obr1.src = `../kostky/kostka${k1}.png`;
}

function rolltwo() {
    k2 = Math.ceil(Math.random()*7) 
    obr2.src = `../kostky/kostka${k2}.png`;
}

function rollthree() {
    k3 = Math.ceil(Math.random()*7) 
    obr3.src = `../kostky/kostka${k3}.png`;
}

function refreshstats() {
    statistiky.innerHTML = `<p>Godocoins: ${gcoins}</p>`
    statistiky.innerHTML += `<p>Počet pokusů: ${pokusy}</p>`
    statistiky.innerHTML += `<p>Malých výher: ${mvyhry}</p>`
    statistiky.innerHTML += `<p>Velkých výher: ${vvyhry}</p>`
}

function reset() {
    rolling = 0
}
function resetj() {
    rolling = 0
    tlacitko.classList.remove('animatepress');
    tlacitkotext.innerHTML = 'ROLL';
    tlacitkotext.style.color = '#ffaa00';
    tlacitko.style.borderColor = '#ffaa00';
    tlacitko.style.boxShadow = ' 0px 10px #a16b00';
}
function rainbow() {
    gcoins = 9999999999999999;
    tlacitkotext.classList.add('rainbow');
    tlacitko.classList.add('rainbow2');
    spaceru.classList.add('rainbow');
    spacerd.classList.add('rainbow');
    nadpis.classList.add('rainbow');
    obr1.classList.add('rainbow');
    obr2.classList.add('rainbow');
    obr3.classList.add('rainbow');
    statistiky.classList.add('rainbow');
    refreshstats();
}

function kontrolaVyhry() {
    if(k1 == 7 && k2 == 7 && k3 == 7 ){
        jackpot.play();
        tlacitko.classList.remove('animatepress');
        tlacitkotext.innerHTML = 'JACKPOT';
        tlacitkotext.style.color = '#ff0000';
        tlacitko.style.borderColor = '#ff0000';
        tlacitko.style.boxShadow = ' 0px 10px #ff0000';
        spacerd.style.borderColor = '#ff0000';
        spaceru.style.borderColor = '#ff0000';
        obr1.style.borderColor = '#ff0000'
        obr2.style.borderColor = '#ff0000'
        obr3.style.borderColor = '#ff0000'
        setTimeout(rainbow, 2300);
        setTimeout(resetj, 15000);
    }
    else if(k1 == k2 && k1 == k3){
        bigwin.play();
        gcoins += 10;
        vvyhry++;
        refreshstats()
        setTimeout(reset, 1000)
        var colorswitch = 0;
        spacerd.style.borderColor = '#15ff00';
        spaceru.style.borderColor = '#15ff00';
        obr1.style.borderColor = '#15ff00'
        obr2.style.borderColor = '#15ff00'
        obr3.style.borderColor = '#15ff00'
        tlacitko.style.borderColor = '#15ff00';
        tlacitko.style.boxShadow = '0px 10px #10ba00';
        tlacitkotext.style.color = '#15ff00';
        bigwinflash = setInterval(() => {
            switch(colorswitch){
                case 0:
                    colorswitch = 1
                    spacerd.style.borderColor = '#096e00';
                    spaceru.style.borderColor = '#096e00';
                    obr1.style.borderColor = '#096e00'
                    obr2.style.borderColor = '#096e00'
                    obr3.style.borderColor = '#096e00'
                    tlacitko.style.borderColor = '#096e00';
                    tlacitko.style.boxShadow = '0px 10px #053800';
                    tlacitkotext.style.color = '#096e00';
                break;
                case 1:
                    colorswitch = 0
                    spacerd.style.borderColor = '#15ff00';
                    spaceru.style.borderColor = '#15ff00';
                    obr1.style.borderColor = '#15ff00'
                    obr2.style.borderColor = '#15ff00'
                    obr3.style.borderColor = '#15ff00'
                    tlacitko.style.borderColor = '#15ff00';
                    tlacitko.style.boxShadow = '0px 10px #10ba00';
                    tlacitkotext.style.color = '#15ff00';
                break;
            }
        }, 500);
        tlacitko.classList.remove('animatepress');
        tlacitkotext.innerHTML = 'BIG WIN';
    }
    else if(k1 == k2 || k2 == k3 || k3 == k1){
        win.play();
        mvyhry++;
        gcoins += 3;
        refreshstats()
        setTimeout(reset, 1000)
        spacerd.style.borderColor = '#03fcf4';
        spaceru.style.borderColor = '#03fcf4';
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
        setTimeout(reset, 1000)
    }
}
