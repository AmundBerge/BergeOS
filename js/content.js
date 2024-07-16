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
    <li>Embed the music playlist here instead of linking to YouTube</li>
    <li>Spend some time fixing stuff rather than writing an endless to-do list</li>
</ul> 
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
<p>Though the list is brief for now, my planned projects are not limited to programming.
I also want to do some lifestyle experiments, such as: </p>
<ul>
    <li>To go some period without listening to music</li>
    <li>To go some period using my phone and computer only for basic communication, school, other essentials, and nothing else</li>
</ul>
`
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
and even albums that I consume.</p><p>Stay tuned for more!</p>
`

const guestbookContent = `
<h1>Guestbook</h1>
<p>Once implemented, you will be able to leave your own remarks on the site.</p>
<p>Stay tuned!</p>
`

const blogContent = `
<h1>Blog</h1>
<p>On my blog, I will give monthly updates where I share what I did, what I consumed,
and what I learned.</p>
<p>Coming soon!</p>
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

<p>Here you will find some of my favorite pieces of music. I try not to include too many pieces from the same genre.</p>

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