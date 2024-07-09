let timeText = document.querySelector('#date');
let helper = document.querySelector('#helper');
let tester = document.querySelector('#tester');

const aboutContent = `
<h1>About</h1>
<p>My name is Amund Dahlmo Berge, and I'm a 20-year-old Norwegian CS student. My interests include
programming, piano, sports, and chess. BergeOS is my personal website, intended both as an archive 
of various aspects of my life, as well as displaying these to the rest of the world.</p>`

const toDoContent = `
<h1>To-Do:</h1>
<ul>
    <li>Style windows properly</li>
    <li>Write and implement the content for all the icons</li>
    <li>Create taskbar functionality</li>
    <li>Find better icons</li>
    <li>Implement choosing fonts and backgrounds</li>
    <li>Create guestbook</li>
</ul> 
`

function getCurrentDateTime(){
    return new Date().toLocaleString('de-DE');
}

function updateTime(){
    timeText.innerText = getCurrentDateTime();
}

setInterval(updateTime, 1000);

let music = document.querySelector('#music');
music.addEventListener('dblclick', function(){
    window.location.href = 'https://youtu.be/-_Nu2cDYvUQ?si=5Hez3nMlwxe1D6pl';
})

let about = document.querySelector('#about');
about.addEventListener('dblclick', function(){
    createWindow(about.id, aboutContent);
})

let toDo = document.querySelector('#to-do');
toDo.addEventListener('dblclick', function(){
    createWindow(toDo.id, toDoContent);
})

let main = document.querySelector('#main');

function createWindow(id, content){
    let div = document.createElement('div');
    let divBar = document.createElement('div');
    let divContent = document.createElement('div');
    div.id = id +'_window';
    divBar.id = id + '_window' + '_bar';
    divContent.id = id + '_window' + '_content';

    div.style.position = 'absolute'; 
    div.style.width = '30vw';
    div.style.height = '60vh';
    div.style.top = '20vh';
    div.style.left = '35vw';
    div.style.backgroundColor = '#e0e0e0';
    div.style.border = '3px solid white';
    div.style.outline = '2px solid black';
    div.style.padding = '0px';
    div.style.margin = '0px';
    div.style.display = 'flex';
    div.style.flexDirection = 'column';

    divBar.style.width = '100%';
    divBar.style.height = '3vh';
    divBar.style.padding = '0px';
    divBar.style.margin = '0px';
    divBar.style.display = 'flex';
    divBar.style.justifyContent = 'flex-end';
    divBar.style.alignItems = 'center';
    divBar.style.cursor = 'grab';
    divBar.style.borderBottom = '3px solid white';
    divBar.style.background = 'linear-gradient(to right, #000066, #33ccff)';

    divContent.style.flexGrow = '1';
    divContent.style.padding = '10px';
    divContent.style.margin = '0px';
    divContent.innerHTML = content;
    divContent.style.color = 'black';
    divContent.style.fontFamily = 'Tahoma, sans-serif';
    divContent.style.backgroundColor = '#e0e0e0';


    divBarClose = document.createElement('button');
    divBarMinimize = document.createElement('button');
    divBarMaximize = document.createElement('button');

    divBarClose.style.height = '2.5vh';
    divBarClose.style.width = '2.5vh';
    divBarClose.style.padding = '0px';
    divBarClose.style.margin = '0px';
    divBarClose.style.order = '3';
    divBarClose.style.cursor = 'pointer';
    divBarClose.style.border = '1px solid black';
    divBarClose.style.marginRight = '0.25vh';
    divBarClose.style.backgroundImage = "url('../assets/buttons/close_button.png')"
    divBarClose.style.backgroundPosition = 'center';
    divBarClose.style.backgroundSize = '80%';
    divBarClose.style.backgroundRepeat = 'no-repeat';

    divBarMinimize.style.height = '2.5vh';
    divBarMinimize.style.width = '2.5vh';
    divBarMinimize.style.padding = '0px';
    divBarMinimize.style.margin = '0px';
    divBarMinimize.style.order = '2';
    divBarMinimize.style.cursor = 'pointer';
    divBarMinimize.style.border = '1px solid black';
    divBarMinimize.style.backgroundImage = "url('../assets/buttons/minimize_button.png')";
    divBarMinimize.style.backgroundPosition = 'center bottom 10%';
    divBarMinimize.style.backgroundRepeat = 'no-repeat';
    divBarMinimize.style.backgroundSize = '80%';

    divBarMaximize.style.height = '2.5vh';
    divBarMaximize.style.width = '2.5vh';
    divBarMaximize.style.padding = '0px';
    divBarMaximize.style.margin = '0px';
    divBarMaximize.style.order = '1';
    divBarMaximize.style.cursor = 'pointer';
    divBarMaximize.style.border = '1px solid black';

    let offsetX, offsetY; 

    divBar.addEventListener('mousedown', function(e){
        if (e.target.tagName.toLowerCase() == 'button'){
            return;
        } else {
            divBar.style.cursor = 'grabbing';

            offsetX = e.clientX - div.offsetLeft; 
            offsetY = e.clientY - div.offsetTop;

            function mouseMoveHandler(e){
                div.style.left = (e.clientX - offsetX) + 'px';
                div.style.top = (e.clientY - offsetY) + 'px';
            }

            function mouseUpHandler(e){
                divBar.style.cursor = 'grab';
                document.removeEventListener('mousemove', mouseMoveHandler);
                document.removeEventListener('mouseup', mouseUpHandler);
            }

            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);

        }
    })

   

    divBarClose.addEventListener('click', function(){
        div.remove();
    })

    divBarMinimize.addEventListener('click', function(){
        div.style.width = '30vw';
        div.style.height = '60vh';
        div.style.top = '20vh';
        div.style.left = '35vw';
    })

    divBarMaximize.addEventListener('click', function(){
        div.style.width = '100%';
        div.style.height = '100%';
        div.style.top = '0vh';
        div.style.left = '0vw';
        divContent.style.height = ''
    })

    main.appendChild(div);
    div.appendChild(divBar);
    div.appendChild(divContent);
    divBar.appendChild(divBarClose);
    divBar.appendChild(divBarMinimize);
    divBar.appendChild(divBarMaximize);
}
