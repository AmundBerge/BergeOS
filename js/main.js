let timeText = document.querySelector('#time');
let helper = document.querySelector('#helper');
let tester = document.querySelector('#tester');

let rootURL = window.location.origin + '/BergeOS';

// simple fix for running project with localhost 
if (rootURL.includes('127') || rootURL.includes('localhost')){ 
    rootURL = '..'; 
}

const taskBarValues = new Map([
    ['backgrounds_window', ['Backgrounds', 'internet_explorer.png']],
    ['about_window', ['About', 'about.png']],
    ['projects_window', ['Projects', 'internet_explorer.png']],
    ['music_window', ['Music', 'music.png']],
    ['resume_window', ['Resume', 'resume.png']],
    ['video_window', ['Video', 'video.png']],
    ['piano_window', ['Piano', 'piano.png']],
    ['blog_window', ['Blog', 'internet_explorer.png']],
    ['writings_window', ['Writings', 'to-do.png']],
    ['to-do_window', ['To-do', 'to-do.png']],
    ['chess_window', ['Chess', 'cube.png']],
    ['sitemap_container', ['Sitemap', 'sitemap.png']]
])

function getCurrentDateTime(){
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    if (hours < 10){
        hours = '0' + hours;
    }
    if (minutes < 10){
        minutes = '0' + minutes;
    }
    if (seconds < 10){
        seconds = '0' + seconds;
    }
    return `${hours}:${minutes}:${seconds}`;
}

function updateTime(){
    timeText.innerText = getCurrentDateTime();
}

function changeBackground(backgroundID){
    document.body.style.backgroundColor = 'none';
    document.body.style.backgroundImage = "url('../assets/backgrounds/" + backgroundID + "')";
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
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

let projects = document.querySelector('#projects')
projects.addEventListener('dblclick', function(){
    createWindow(projects.id, projectsContent);
})

let blog = document.querySelector('#blog');
blog.addEventListener('dblclick', function(){
    createWindow(blog.id, blogContent);
    let july2024 = document.querySelector('#july2024');
    let august2024 = document.querySelector('#august2024');
    let blogWindow = document.querySelector('#blog_window_content');
    july2024.addEventListener('click', function(){
        blogWindow.innerHTML = july2024Content;
    })
    august2024.addEventListener('click', function(){
        blogWindow.innerHTML = august2024Content;
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
    let bg1 = document.querySelector('#bg1');
    bg1.addEventListener('click', function(){
        changeBackground('frutiger_aero.jpg');
    })
    document.querySelector('#bg2').addEventListener('click', function(){
        document.body.style.backgroundColor = 'orange';
    })
    document.querySelector('#bg3').addEventListener('click', function(){
        document.body.style.backgroundColor = 'yellow';
    })
    document.querySelector('#bg4').addEventListener('click', function(){
        document.body.style.backgroundColor = 'yellowgreen';
    })
    document.querySelector('#bg5').addEventListener('click', function(){
        document.body.style.backgroundColor = 'green';
    })
    document.querySelector('#bg6').addEventListener('click', function(){
        document.body.style.backgroundColor = 'cyan';
    })
    document.querySelector('#bg7').addEventListener('click', function(){
        document.body.style.backgroundColor = 'blue';
    })
    document.querySelector('#bg8').addEventListener('click', function(){
        document.body.style.backgroundColor = 'purple';
    })
    document.querySelector('#bg9').addEventListener('click', function(){
        document.body.style.backgroundColor = 'pink';
    })

})

let mail = document.querySelector('#mail');
mail.addEventListener('dblclick', function(){
    window.location.href = 'mailto:bergeos@protonmail.com';
})

let resume = document.querySelector('#resume');
resume.addEventListener('dblclick', function(){
    createWindow(resume.id, resumeContent);
})

let minimizedItems = [];

let main = document.querySelector('#main');

let taskBarCount = 0;

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
    divBarClose.style.border = '2px solid black';
    divBarClose.style.marginRight = '0.25vh';
    divBarClose.style.backgroundImage = `url('${rootURL}/assets/buttons/close_button.svg')`;
    divBarClose.style.backgroundPosition = 'bottom 47% left 60%';
    divBarClose.style.backgroundSize = '80%';
    divBarClose.style.backgroundRepeat = 'no-repeat';

    divBarMinimize.style.height = '2.5vh';
    divBarMinimize.style.width = '2.5vh';
    divBarMinimize.style.padding = '0px';
    divBarMinimize.style.margin = '0px';
    divBarMinimize.style.order = '2';
    divBarMinimize.style.cursor = 'pointer';
    divBarMinimize.style.border = '2px solid black';
    divBarMinimize.style.backgroundImage = `url('${rootURL}/assets/buttons/minimize_button.svg')`;
    divBarMinimize.style.backgroundPosition = 'center bottom -110%';
    divBarMinimize.style.backgroundRepeat = 'no-repeat';
    divBarMinimize.style.backgroundSize = '80%';
    divBarMinimize.style.marginRight = '0.125vh';

    divBarMaximize.style.height = '2.5vh';
    divBarMaximize.style.width = '2.5vh';
    divBarMaximize.style.padding = '0px';
    divBarMaximize.style.margin = '0px';
    divBarMaximize.style.order = '1';
    divBarMaximize.style.cursor = 'pointer';
    divBarMaximize.style.border = '2px solid black';
    divBarMaximize.style.marginRight = '0.125vh';
    divBarMaximize.style.backgroundImage = `url('${rootURL}/assets/buttons/maximize_button.svg')`;
    divBarMaximize.style.backgroundPosition = 'center bottom 40%';
    divBarMaximize.style.backgroundRepeat = 'no-repeat';
    divBarMaximize.style.backgroundSize = '80%';


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

    let windowIsLarge = false;

    divBarMinimize.addEventListener('click', function(){
        div.style.visibility = 'hidden';
        minimizedItems.push(div);
        let taskBarItem = document.createElement('div');
        taskBarItem.style.height = '100%';
        taskBarItem.style.width = '10vw';
        taskBarItem.style.display = 'flex';
        taskBarItem.style.borderRight = '1px solid black';
        taskBarItem.style.boxSizing = 'border-box';
        taskBarItem.style.cursor = 'pointer';  
        taskBarItem.style.alignItems = 'center';
        taskBarItem.style.justifyContent = 'start';
        taskBarItem.style.margin = '0.25vh';
        taskBarItem.id = 'task-bar-item-' + taskBarCount;
        document.querySelector('#minimized-items-container').appendChild(taskBarItem);

        let taskBarItemIcon = document.createElement('div');
        taskBarItemIcon.style.backgroundImage = `url('${rootURL}/assets/icons/${taskBarValues.get(div.id)[1]}')`;
        taskBarItemIcon.style.height = '3vh';
        taskBarItemIcon.style.width = '3vh';
        taskBarItemIcon.style.backgroundRepeat = 'no-repeat';
        taskBarItemIcon.style.backgroundSize = '80%';
        taskBarItemIcon.style.backgroundPosition = 'center';
        document.querySelector(`#task-bar-item-${taskBarCount}`).appendChild(taskBarItemIcon);

        let taskBarItemTextContainer = document.createElement('div');
        taskBarItemTextContainer.style.display = 'flex';
        taskBarItemTextContainer.style.justifyContent = 'center';
        taskBarItemTextContainer.style.alignItems = 'center';
        taskBarItemTextContainer.style.height = '3vh';
        taskBarItemTextContainer.style.width = 'auto';
        taskBarItemTextContainer.id = 'task-bar-item-container-' + taskBarCount;

        document.querySelector(`#task-bar-item-${taskBarCount}`).appendChild(taskBarItemTextContainer);

        let taskBarItemText = document.createElement('div');
        taskBarItemText.innerText = taskBarValues.get(div.id)[0];
        taskBarItemText.style.fontFamily = '"Iceland", serif';
        taskBarItemText.style.color = 'black';
        taskBarItemText.style.fontSize = '12pt';  

        document.querySelector(`#task-bar-item-container-${taskBarCount}`).appendChild(taskBarItemText);

        taskBarCount++;

        taskBarItem.addEventListener('click', () => {
            div.style.visibility = 'visible';
            div.style.zIndex = clicks;
            taskBarItem.remove();
        })
    })

    divBarMaximize.addEventListener('click', function(){
        if (!windowIsLarge){
            div.style.width = '100%';
            div.style.height = '100%';
            div.style.top = '0vh';
            div.style.left = '0vw'; 
        } else {
            div.style.left = positionX;
            div.style.top = positionY;
            div.style.width = '50vw';
            div.style.height = '60vh';
        }
        windowIsLarge = !windowIsLarge; 
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
