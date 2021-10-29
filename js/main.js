const string = `
    .pikachu{
        position: relative;
        min-height: 50vh;
    }
    .skin{
    background-color:#ffe600;
   
}

    .eye {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 20%;
    margin-left: -32px;
    background-color: #2e2e2e;
}
    .eye.left{
    border: 3px solid black;
    transform: translateX(-100px);
}

    .eye.right{
    border: 3px solid black;
    transform: translateX(100px);
}

    .eye::after{
    content: '';
    display: block;
    border: 3px solid black;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    left: 8px;
}

    .nose {
    border: 16px solid red;
    width: 0;
    height: 0;
    border-color: black transparent transparent;
    position: absolute;
    left: 50%;
    top: 38%;
    margin-left: -16px;
    z-index: 10;
}
    @keyframes swing{
    0% {
        transform: rotate(0deg);
}
    33%{

    transform: rotate(8deg);
}
    66%{
    transform: rotate(-8deg);

}
    100%{
    transform: rotate(0deg);
}
}
    .nose:hover{
    animation: swing 450ms linear infinite;
}

    .nose::after{
    content: '';
    display: block;
    position: absolute;
    width: 32px;
    height: 10px;
    top: -26px;
    left: -16px;
    border-top-left-radius: 16px 9px;
    border-top-right-radius: 16px 8px;
    background-color: black;
}

    .face {
    position: absolute;
    width: 100px;
    height: 100px;
    left: 50%;
    margin-left: -50px;
    top: 60%;
    border-radius: 50%;
    background-color: #ff0000;
}

    .face.left{
    border: 3px solid black;
    transform: translateX(-138px);
}

    .face.right{
    border: 3px solid black;
    transform: translateX(138px);
}

    .mouth {
    position: absolute;
    width: 200px;
    height: 200px;
    left: 50%;
    top: 45%;
    margin-left: -100px;
}

    .mouth .up .lip {
    position: absolute;
    width: 100px;
    height: 30px;
    border: 3px solid black;
    border-top-color: transparent;
    position: relative;
    background-color: #ffe600;
    z-index: 1;
}

    .mouth .up .lip.left{
    transform: rotate(-20deg);
    border-bottom-left-radius: 40px 50px;
}

    .mouth .up .lip::after{
    content: '';
    display: block;
    width: 50px;
    height: 30px;
    position: absolute;
    top: -5px;
    left: 70px;
    background-color: #ffe600;
}

    .mouth .up .lip.right{
    top: -30px;
    left: 100px;
    border-bottom-right-radius: 40px 50px;
    transform: rotate(20deg);
}

    .mouth .up .lip.right::after{
    top: -5px;
    left: -30px;
}

    .down {
    position: relative;
    width: 200px;
    height: 200px;
    left: 50%;
    top: -50px;
    margin-left: -100px;
    overflow: hidden;
}

    .down .tongue {
    position: absolute;
    border: 4px solid black;
    width: 130px;
    height: 500px;
    left: 50%;
    top: -330px;
    margin-left: -65px;
    border-radius: 50% 50%;
    background-color: #9b000a;
    overflow: hidden;
}

    .down .tongue::after{
    position: absolute;
    content: '';
    display: block;
    border: 3px solid black;
    width: 200px;
    height: 500px;
    top: 350px;
    left: 50%;
    margin-left: -100px;
    border-radius: 50% 50%;
    background-color: #ff485f;
}`
const player = {
    id: undefined,
    setTime: 15,
    i: 1,
    ui: {
        demo1: document.querySelector('.demo1style'),
        demo2: document.querySelector('.demo2')
    },
    init: () => {
        player.bindevets();
        setTime = 15;
        i = 1;
        player.playStart();
    },
    events: {
        '.pause': 'pauseevent',
        '.play': 'playevent',
        '.replay': 'replayevent',
        '.slow': 'slowevent',
        '.middle': 'middleevent',
        '.fast': 'fastevent'
    },
    bindevets: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                document.querySelector(key).addEventListener('click', player[player.events[key]]);
            }
        }
    },
    playStart: () => {
        player.id = setInterval(() => {
            if (player.i > string.length) {
                clearInterval(player.id);
            }
            else {
                player.ui.demo2.innerText = string.substring(0, player.i);
                player.ui.demo1.innerHTML = string.substring(0, player.i);
                player.ui.demo2.scrollTop = player.ui.demo2.scrollHeight;
                player.i++;
            }
        }, player.setTime)
    },
    ruintimer: () => {
        clearInterval(player.id);
    },
    playevent: () => {
        player.ruintimer();
        player.playStart();
    },
    pauseevent: () => {
        player.ruintimer();
    },
    replayevent: () => {
        player.ruintimer();
        player.i = 1;
        player.playStart();
    },
    slowevent: () => {
        player.ruintimer();
        player.setTime = 30;
        player.playStart();
    },
    middleevent: () => {
        player.ruintimer();
        player.setTime = 15;
        player.playStart();
    },
    fastevent: () => {
        player.ruintimer();
        player.setTime = 0;
        player.playStart();
    },
}
player.init();