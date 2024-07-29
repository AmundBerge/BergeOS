const aboutContent = `
<h1>About</h1>
<p>My name is Amund Dahlmo Berge, and I'm a 20-year-old Norwegian CS student. My interests include
programming, piano, sports, and chess. BergeOS is my personal website, intended both as an archive 
of various aspects of my life, as well as displaying these to the rest of the world.</p>
<p>As life goes on, I want to post monthly life updates here, review various 
media I consume, as well as include my writings on various topics.</p>
`

const toDoContent = `
<h1>To-Do:</h1>
<ul>
    <li>Style windows properly</li>
    <li>Write and implement the content for all the icons</li>
    <li>Create taskbar functionality</li>
    <li>Find better icons</li>
    <li>Implement choosing fonts and backgrounds</li>
    <li>Create guestbook</li>
    <li>Improve and finalize window functionality</li>
    <li>Create custom thumbnails and loading methods for the music playlist</li>
    <li>Spend some time fixing stuff rather than writing an endless to-do list</li>
    <li>Implement the sitemap</li>
    <li>Add back and forwards buttons</li>
</ul> 
`

const resumeContent = `
<h1>Résumé</h1>
<p>Coming soon!</p>
`

const projectsContent = `
<h1>Projects</h1>
<p>Well, I currently don't have any real projects to show for. 
Except for this site, I suppose. Some projects I plan to do in the near future are: </p>
<ul>
    <li>Chess engine</li>
    <li>HTTP messaging server</li>
    <li>Piano cover of "Killing My Love"</li>
</ul>
`
/*<p>Though the list is brief for now, my planned projects are not limited to programming.
I also want to do some lifestyle experiments, such as: </p>
<ul>
    <li>To go some period without listening to music</li>
    <li>To go some period using my phone and computer only for basic communication, school, other essentials, and nothing else</li>
</ul>*/
const chessContent = `
<h1>Play me in chess!</h1>
<p>This window will be used for playing against my chess engine once it has been made.</p> 
<p>If you would like to play chess with me instead, you can send me a challenge here:
<a href="https://lichess.org/@/Mr_Berge" target="_blank">MyLichessAccount</a></p>
`

const writingsContent = `
<h1>Writings</h1>
<p>My future writings will be found here. Some topics I want to explore are music, literature,
philosophy and religion, and lifestyle. I also want to write reviews of books, movies, series, 
and even albums that I consume.</p>
<h3>Goals for the 2024/25 academic year</h3>
<p>As summer break is nearing its end, I have written some goals for the incoming schoolyear. My goals are related to school, programming, fitness, music, personal finance, and more. You can read about my goals <span id="goals" class="fake_link">here</span>.</p> 
`

const guestbookContent = `
<h1>Guestbook</h1>
<p>Once implemented, you will be able to leave your own remarks on the site.</p>
<p>Stay tuned!</p>
`

const blogContent = `
<h1>Blog</h1>
<p>On my blog, I will give monthly updates where I share what I did, what I consumed,
and what I learned. Take a look through the archives!</p>
<ul>
    <li><span id="july2024" class="fake_link">July 2024</span></li>
</ul>
`

const sitemapContent = `
<h1>Sitemap</h1>
<p>Coming soon!</p>
`

const pianoContent = `
<h1>Piano</h1>
<p>Playing the piano is my primary hobby and one of my greatest passions. After having
no proper access to a piano during my first year at university, my skills have tanked 
a bit. This will hopefully change soon, as I will bring my electric piano to my student
apartment. To celebrate this, I want to upload some piano videos to YouTube. It will be 
a mix of me freshening up old pieces, playing various piano covers, as well as making my 
own one day. For now, though, we will have to wait.</p>
`
const videoContent = `
<h1>Videos</h1>
<p>I want to make a YouTube channel where I plan to upload piano videos, funny videos to 
troll my friends, and whatever else I deem worthy. Though I have no plans of becoming a
youtuber, uploading some videos coincides with my goal of documenting more of my life and 
it is going to be fun, too (hopefully).</p>
<p>Stay tuned!</p>
`

const backgroundContent = `
<h1>Backgrounds</h1>
<p>Choose your background from the ones below!</p>
<p>Coming soon!</p>
`

const fontsContent = `
<h1>Fonts</h1>
<p>Pick your favorite font from the ones below!</p>
<p>Coming soon! Or, maybe never, as I will probably scrap this...</p>
`

const musicContent = `
<h1>My Favorite Music</h1>

<p>Here you will find some of my favorite pieces of music. I try not to include too many pieces from the same genre.
You can find the whole playlist <a href="https://youtube.com/playlist?list=PLKGBTAaGeW4hmTYiWRsSZAOuk8d4hMJvO&si=8n2kVido5raYj7CN" target="_blank">here</a>.
</p>

<h3>Bach - Pièce d'Orgue BWV 572</h3>
<div class="iframe_container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/-_Nu2cDYvUQ?si=mYi2T9d07rqwLa-H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<p>My favorite piece of all time. Played here by Leo van Doeselaar.<p>

<h3>Portwave - Shadow Lady</h3>
<div class="iframe_container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/LQArLobRrt8?si=7uvmbHIbsmBBKFwc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<p>An electronic piece. It fits well under the synthwave subgenre.</p>

<h3>Sienna Sleep - I Can't Sleep 2</h3>
<div class="iframe_container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/H1GrFHrwaMY?si=W9EjkolVbs1W5kdd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<p>Another electronic piece. Trance music of this style is sometimes referred to as "sextrance". A goofy name for a genre, but at least the music is good...</p>

<h3>Still - Divinity</h3>
<div class="iframe_container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/mULhXNLh25k?si=aR-viUIGiAn9Q-7z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<p>Post-punk. The band has a very small following, so I am happy to have discovered them. </p>

<h3>Toshiki Kadomatsu - 52nd Street</h3>
<div class="iframe_container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/OIFASfPkw9g?si=sjblzQ3GzPgvZNFx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<p>Instrumental city pop music. I especially like the part that starts at 2:08. </p>

<h3>Fire and Ice - Souvenir De Chine</h3>
<div class="iframe_container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/pbiWENuqo10?si=tfofv65Bky0d-S7b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<p>Another trance piece. This time it is vanilla trance. </p>

<h3>Kino - Song Without Words</h3>
<div class="iframe_container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/s6ksxfWx6zE?si=3lh5mL3hSvoPMoKD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<p>Russian alternative rock music (I do not know any Russian). What I love the most about this song is how it concludes with repeating the same sequence over and over again. </p>

<h3>Bach - Fantasia and fugue in G minor BWV 542</h3>
<div class="iframe_container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/tgDE3klkmtQ?si=5MSC4XfdGKom-svN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<p>Had this been an authentic "my favorite music" list, at least half of the pieces would have been organ works by Bach. I therefore had the need to include at least one more piece by Bach. Played by Leo van Doeselaar, once again. </p>

<h3>Demetori - Eastern Dream</h3>
<div class="iframe_container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/t3sm6RcBpXU?si=0RymcOzRCk22G3Y1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<p>I discovered Demetori through various gaming videos, where their music is sometimes used as background music. Eastern Dream is an emotional 10-minute long rock ballad. </p>

<h3>Leslie Parrish - Killing My Love</h3>
<div class="iframe_container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/YdYwICNPDwI?si=wXBxTmfdzsY68MWL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<p>My favorite Eurobeat song. I have a goal of writing a piano cover of this song one day. </p>

<h3>Animenz - Unravel</h3>
<div class="iframe_container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/sEQf5lcnj_o?si=GbElyYu9RT-aj-Zb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<p>Animenz is one of my greatest musical idols. His cover of Unravel is his most popular video, and for good reason. </p>

<h3>Ryuichi Sakamoto - Merry Christmas Mr. Lawrence</h3>
<div class="iframe_container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/1OZDaRhHHyM?si=60Xnk1t2lgmOVS2D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<p>One of my favorite pieces from my favorite modern-era composer. I have played this piece myself on numerous occasions and gatherings. </p>
`

const july2024Content = `
<h1>July 2024</h1>
<p>Welcome to my first ever monthly update! This month I mostly spent just enjoying summer break in my home town of Bergen. I reconnected with old friends, and made some new ones as well. I also spent a week in Sopot/Gdansk with my family. Though the beaches of Sopot were nice and all, the walks through the streets of the cultural Gdansk is what I enjoyed the most. The WWII museum there was impressive, too. </p>
<p>With respect to BergeOS, the most important event of this month was just setting up the site and working on the most important aspects of it. I am currently simply GitHub Pages to host the site, but I might host it myself in the future, especially when I start implementing some backend stuff (like the guestbook). </p>
<p>In terms of what I consumed, the most interesting thing I watched was “Dead Poets Society”, a 1989 drama movie about a group of boys who pick up an interest in poetry. That the movie was interesting is really all that I can say for now. I watched the movie while on a date, so naturally, we were a little busy talking and all that… Anyways, I will certainly rewatch the film in the near future. Hopefully i can include my thoughts about it in the August update!</p>
<p>I have also made some progress in my reading of “Runaway Horses”, Yukio Mishima's second work in his “Sea of Fertility” tetralogy. I am loving the book, though I haven’t always been the most consistent in reading it. If I can start reading just a little bit before bed every night, I should be able to finish it in the coming days. Looks like this one, too, will be included in August. </p>
<p>Lastly, I have written some goals for the 2024/25 academic year. I have not been the best at setting goals in the past, and when I did, they were mostly generic, like “get stronger” or “read more books”. This time, however, I have decided to set a handful of specific goals that I will aim to reach before the summer break of 2024. You can take a look at them in the "Writings" section.</p>

`

const goalsContent = `
<h1>Goals for the 2024/25 schoolyear</h1>
<p>In here you can find the goals I have set for the 2024/25 schoolyear. They encompass academics, programming, fitness, mental health and cognition, literature and philosophy, and piano. I give monthly updates on how it's going in my blog. I will write a full overview of how the project went after the schoolyear. </p>
<h3>School</h3>
<ul>
    <li>Achieve grades equivalent of at least 75% As and 25% Bs</li>
</ul>
<p>Not much to say about this. Getting good grades is good, right? Though a bit tricky, this goal should be doable if I stay consistent. </p>
<h3>Programming</h3>
<ul>
    <li>Write a chess engine in C++</li>
    <li>Make a server for handling guestbooks entries on BergeOS (likely with Node.js)</li>
    <li>Do a serious fullstack project</li>
    <li>Boot up linux on my old Macbook once I buy a new one</li>
</ul>
<p>I think these goals are solid and will help broaden my programming skills. </p>
<h3>Physical fitness</h3>
<ul>
    <li>100kg bench press 1RM</li>
    <li>140kg squat 1RM</li>
    <li>Do a muscle-up</li>
    <li>Learn how to handstand</li>
    <li>50kg dips 1RM</li>
    <li>30kg pull-up 1RM</li>
    <li>Sub 13:00 3000m run</li>
    <li>Sub 1:10 400m run</li>
    <li>10-minute plank</li>
</ul>
<p>I love working out, and I love to move my body around. The benchmarks above are a mix of strength, cardio, and functional exercises. The two running goals are likely going to be the easiest. </p>
<h3>Mental fitness</h3>
<ul>
    <li>Lower my phone screen time to under an hour a day</li>
    <li>Develop a proper morning routine and turn it into a habit</li>
    <li>Start learning Mandarin Chinese; work through HSK 1 and 2</li>
</ul>
<p>Like most people my age, I am addicted to screens. I hope to turn this around. I also think the quality of the digital content we consume is important to consider. I believe it's much better to watch a movie for two hours than scroll through TikTok for the same period. A decent morning routine (that I'm consistent at) is something I've been wanting to develop for quite some time now. As for Mandarin, there is a chance I do my exchange semester in places like Taiwan or Singapore, so it would be nice to know some Mandarin before that, and to learn more while I'm there. </p>
<h3>Piano</h3>
<ul>
    <li>Play through and practice the Hanon exercises</li>
    <li>Make a piano cover of "Killing My Love" by Leslie Parrish</li>
    <li>Learn "City of Tears" from the Hollow Knight Piano Collections</li>
    <li>Relearn Beethoven Piano Sonata in C minor, No. 8, 3rd movement</li>
    <li>Relearn Rachmaninoff Prelude in C# minor, Op. 3 No. 2</li>
    <li>Relearn Chopin Nocturne in C minor, Op. 48 No. 1</li>
    <li>Upload videos to YouTube of myself playing these</li>
</ul>
<p>A mix of things I want to do and things I want to redo. Uploading videos to YouTube is meant to be a quality check, since I'm not going to upload anything I'm not proud of. </p>
<h3>Reading list</h3>
<ul>
    <li>Mishima - The Temple of Dawn</li>
    <li>Mishima - The Decay of the Angel</li>
    <li>Mishima - Sun and Steel</li>
    <li>Dostoevsky - Crime and Punsishment</li>
    <li>Dostoevsky - The Brothers Karamazov</li>
    <li>Tolstoy - War and Peace</li>
    <li>Tolstoy - Anna Karenina</li>
    <li>Nietzsche - Thus Spake Zarathustra</li>
    <li>Orwell - 1984</li>
    <li>Melwill - Moby-Dick</li>
    <li>Joyce - Ulysses</li>
    <li>Huxley - Brave New World</li>
    <li>Camus - The Stranger</li>
    <li>Sartre - Nausea</li>
</ul>
<p>I want to get into both literature and philosophy. I think reading this list of some major works will be a good start. The list is perhaps a bit too ambitious, so my goal really is to just read the majority of these. </p>
<h3>Various</h3>
<ul>
    <li>Secure a summer job for 2025</li>
    <li>Invest around 50% of my savings</li>
    <li>Get a part-time job</li>
    <li>Visit a new country</li>
</ul>
<p>A CS-related summer job would be amazing, and it is perhaps the most important goal on this whole list. </p>
<p>I hope it all goes well!</p>
`