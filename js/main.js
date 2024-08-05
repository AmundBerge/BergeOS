let timeText = document.querySelector('#date');
let helper = document.querySelector('#helper');
let tester = document.querySelector('#tester');

let rootURL = window.location.origin + '/BergeOS';
if (rootURL.includes('localhost')){    // simple fix for running the project locally
    rootURL = '..'; 
}

function getCurrentDateTime(){
    return new Date().toLocaleString('de-DE');
}

function updateTime(){
    timeText.innerText = getCurrentDateTime();
}

setInterval(updateTime, 1000);

let music = document.querySelector('#music');
music.addEventListener('dblclick', function(){
    createWindow(music.id, musicContent);
})

let about = document.querySelector('#about');
about.addEventListener('dblclick', function(){
    createWindow(about.id, aboutContent);
})

let writings = document.querySelector('#writings');
writings.addEventListener('dblclick', function(){
    createWindow(writings.id, writingsContent);
    let goals = document.querySelector('#goals');
    let writingsWindow = document.querySelector('#writings_window_content');
    goals.addEventListener('click', function(){
        writingsWindow.innerHTML = goalsContent;
    })
})

let toDo = document.querySelector('#to-do');
toDo.addEventListener('dblclick', function(){
    createWindow(toDo.id, toDoContent);
})

let chess = document.querySelector('#chess');
chess.addEventListener('dblclick', function(){
    createWindow(chess.id, chessContent);
})

let guestbook = document.querySelector('#guestbook');
guestbook.addEventListener('dblclick', function(){
    createWindow(guestbook.id, guestbookContent);
})

let projects = document.querySelector('#projects')
projects.addEventListener('dblclick', function(){
    createWindow(projects.id, projectsContent);
})

let blog = document.querySelector('#blog');
blog.addEventListener('dblclick', function(){
    createWindow(blog.id, blogContent);
    let july2024 = document.querySelector('#july2024');
    let blogWindow = document.querySelector('#blog_window_content');
    july2024.addEventListener('click', function(){
        blogWindow.innerHTML = july2024Content;
    })
})

let piano = document.querySelector('#piano');
piano.addEventListener('dblclick', function(){
    createWindow(piano.id, pianoContent);
})

let sitemap = document.querySelector('#sitemap');
sitemap.addEventListener('dblclick', function(){
    createWindow(sitemap.id, sitemapContent);
})

let video = document.querySelector('#video');
video.addEventListener('dblclick', function(){
    createWindow(video.id, videoContent);
})

let backgrounds = document.querySelector('#backgrounds');
backgrounds.addEventListener('dblclick', function(){
    createWindow(backgrounds.id, backgroundContent);
})

let fonts = document.querySelector('#fonts');
fonts.addEventListener('dblclick', function(){
    createWindow(fonts.id, fontsContent);
})

let mail = document.querySelector('#mail');
mail.addEventListener('dblclick', function(){
    window.location.href = 'mailto:bergeos@protonmail.com';
})

let resume = document.querySelector('#resume');
resume.addEventListener('dblclick', function(){
    createWindow(resume.id, resumeContent);
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
    div.style.width = '50vw';
    div.style.height = '60vh';
    div.style.top = '20vh';
    div.style.left = '25vw';
    div.style.backgroundColor = '#e0e0e0';
    div.style.border = '3px solid white';
    div.style.outline = '2px solid black';
    div.style.padding = '0px';
    div.style.margin = '0px';
    div.style.boxSizing = 'border-box';
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.zIndex = clicks + '';
   
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

    divContent.style.padding = '20px';
    divContent.style.margin = '0px';
    divContent.innerHTML = content;
    divContent.style.color = 'black';
    divContent.style.fontFamily = 'Tahoma, sans-serif';
    divContent.style.backgroundColor = '#e0e0e0';
    divContent.style.overflowY = 'auto';
    divContent.style.flex = '1';

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
    divBarClose.style.backgroundImage = `url('${rootURL}/assets/buttons/close_button.png')`;
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
    divBarMinimize.style.backgroundImage = `url('${rootURL}/assets/buttons/minimize_button.png')`;
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

    div.addEventListener('mousedown', function(){
        div.style.zIndex = clicks + '';
    })

    let offsetX, offsetY; 
    let positionX, positionY;
    positionX = '25vw';
    positionY = '20vh';

    divBar.addEventListener('mousedown', function(e){
        if (e.target.tagName.toLowerCase() == 'button'){
            return;
        } else {
            divBar.style.cursor = 'grabbing';
            offsetX = e.clientX - div.offsetLeft; 
            offsetY = e.clientY - div.offsetTop;
            positonX = div.offsetLeft;
            positionY = div.offsetTop;

            function mouseMoveHandler(e){
                positionX = (e.clientX - offsetX) + 'px';
                positionY = (e.clientY - offsetY) + 'px';
                div.style.left = positionX;
                div.style.top = positionY;
            }

            function mouseUpHandler(){
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
        div.style.left = positionX;
        div.style.top = positionY;
        div.style.width = '50vw';
        div.style.height = '60vh';
    })

    divBarMaximize.addEventListener('click', function(){
        div.style.width = '100%';
        div.style.height = '100%';
        div.style.top = '0vh';
        div.style.left = '0vw';
    })

    main.appendChild(div);
    div.appendChild(divBar);
    div.appendChild(divContent);
    divBar.appendChild(divBarClose);
    divBar.appendChild(divBarMinimize);
    divBar.appendChild(divBarMaximize);
}

let clicks = 0; 
document.addEventListener('click', function(){
    clicks++;
})