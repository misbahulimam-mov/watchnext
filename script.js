/* CONTENT EDITOR: homepage content is grouped near the top of this file so titles and editorial copy can be updated without changing rendering logic. */
const items=[
{name:"Interstellar",type:"Movies",genre:"Sci-Fi",rating:"8.7",year:"2014",why:"For ambitious sci-fi, emotional storytelling and unforgettable worlds.",desc:"A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival.",tags:["Sci-Fi","Drama","Adventure"]},
{name:"Severance",type:"TV Shows",genre:"Thriller",rating:"8.7",year:"2022",why:"For mysterious worlds, slow-burn tension and razor-sharp ideas.",desc:"Employees undergo a procedure that divides their work and personal memories.",tags:["Thriller","Mystery","Drama"]},
{name:"The Silent Patient",type:"Books",genre:"Thriller",rating:"4.4",year:"2019",why:"A gripping psychological mystery with twists worth chasing.",desc:"A famous painter stops speaking after a shocking crime, and a therapist becomes determined to uncover why.",tags:["Thriller","Mystery","Psychology"]},
{name:"Dune: Part Two",type:"Movies",genre:"Sci-Fi",rating:"8.5",year:"2024",why:"Epic scale, political intrigue and spectacular world-building.",desc:"Paul Atreides unites with Chani and the Fremen while seeking revenge against those who destroyed his family.",tags:["Sci-Fi","Drama","Epic"]},
{name:"Dark",type:"TV Shows",genre:"Sci-Fi",rating:"8.7",year:"2017",why:"For puzzle-box storytelling, time travel and a deeply atmospheric mystery.",desc:"A missing child sets four families on a frantic search for answers spanning generations.",tags:["Sci-Fi","Mystery","Drama"]},
{name:"Piranesi",type:"Books",genre:"Drama",rating:"4.6",year:"2020",why:"Strange, beautiful and immersive—perfect for readers who like the unexpected.",desc:"A man lives in a mysterious infinite house filled with statues, tides and secrets.",tags:["Fantasy","Mystery","Literary"]},
{name:"Arrival",type:"Movies",genre:"Sci-Fi",rating:"8.0",year:"2016",why:"Thoughtful science fiction with emotion, language and big questions.",desc:"A linguist works to communicate with mysterious visitors from another world.",tags:["Sci-Fi","Drama","Mystery"]},
{name:"Mindhunter",type:"TV Shows",genre:"Thriller",rating:"8.6",year:"2017",why:"For intelligent crime stories, unsettling psychology and brilliant dialogue.",desc:"FBI agents develop criminal profiling by studying the minds of notorious killers.",tags:["Crime","Thriller","Drama"]}
];


const indiaPicks=[
{name:"3 Idiots",type:"Movies",genre:"Hindi · Drama",rating:"8.4",year:"2009",image:"https://imdb.iamidiotareyoutoo.com/photo/tt1187043",why:"A warm, funny coming-of-age story about friendship, pressure and following your passion."},
{name:"Andhadhun",type:"Movies",genre:"Hindi · Thriller",rating:"8.2",year:"2018",image:"https://imdb.iamidiotareyoutoo.com/photo/tt8108198",why:"A darkly comic thriller full of deception, reversals and unpredictable turns."},
{name:"Tumbbad",type:"Movies",genre:"Hindi · Horror",rating:"8.2",year:"2018",image:"https://imdb.iamidiotareyoutoo.com/photo/tt8239946",why:"Atmospheric Indian folk horror with striking world-building and a haunting story."},
{name:"Drishyam",type:"Movies",genre:"Malayalam · Thriller",rating:"8.6",year:"2013",image:"https://imdb.iamidiotareyoutoo.com/photo/tt3417422",why:"A tightly constructed family thriller built around secrets, strategy and escalating tension."},
{name:"RRR",type:"Movies",genre:"Telugu · Action",rating:"7.8",year:"2022",image:"https://imdb.iamidiotareyoutoo.com/photo/tt8178634",why:"A spectacular Telugu action epic powered by friendship, ambition and larger-than-life set pieces."},
{name:"Kantara",type:"Movies",genre:"Kannada · Action",rating:"8.2",year:"2022",image:"https://imdb.iamidiotareyoutoo.com/photo/tt15327088",why:"A distinctive Kannada film blending folklore, action, mystery and powerful local culture."},
{name:"Jai Bhim",type:"Movies",genre:"Tamil · Drama",rating:"8.7",year:"2021",image:"https://imdb.iamidiotareyoutoo.com/photo/tt15097216",why:"A hard-hitting Tamil courtroom drama inspired by a fight for justice and dignity."},
{name:"Manjummel Boys",type:"Movies",genre:"Malayalam · Adventure",rating:"8.2",year:"2024",image:"https://imdb.iamidiotareyoutoo.com/photo/tt21296434",why:"A gripping Malayalam survival drama centered on friendship, courage and an extraordinary rescue."},
{name:"The Family Man",type:"TV Shows",genre:"Hindi · Thriller",rating:"8.7",year:"2019",image:"https://imdb.iamidiotareyoutoo.com/photo/tt9544034",why:"A sharp spy thriller balancing high-stakes missions with everyday family life."},
{name:"Panchayat",type:"TV Shows",genre:"Hindi · Comedy",rating:"9.0",year:"2020",image:"https://imdb.iamidiotareyoutoo.com/photo/tt12004706",why:"A charming small-town comedy-drama with memorable characters and understated humor."},
{name:"Scam 1992",type:"TV Shows",genre:"Hindi · Crime",rating:"9.2",year:"2020",image:"https://imdb.iamidiotareyoutoo.com/photo/tt12392504",why:"A gripping financial drama about ambition, markets and the consequences of risk."},
{name:"Suzhal: The Vortex",type:"TV Shows",genre:"Tamil · Mystery",rating:"8.1",year:"2022",image:"https://imdb.iamidiotareyoutoo.com/photo/tt20704272",why:"A layered Tamil mystery series rooted in a small-town investigation and local traditions."},
{name:"Kota Factory",type:"TV Shows",genre:"Hindi · Drama",rating:"9.0",year:"2019",image:"https://imdb.iamidiotareyoutoo.com/photo/tt9432978",why:"A grounded coming-of-age series about students, ambition, friendship and pressure."},
{name:"Kerala Crime Files",type:"TV Shows",genre:"Malayalam · Crime",rating:"7.6",year:"2023",image:"https://imdb.iamidiotareyoutoo.com/photo/tt27418916",why:"A Malayalam police procedural following investigators through a focused, atmospheric case."}
];

const releases=[
{name:"Dhurandhar",type:"Movie",region:"India",language:"Hindi",date:"2025",genre:"Action · Thriller",note:"Indian theatrical release",image:"https://imdb.iamidiotareyoutoo.com/photo/tt31426445"},
{name:"Lokah Chapter 1: Chandra",type:"Movie",region:"India",language:"Malayalam",date:"2025",genre:"Fantasy · Action",note:"Malayalam superhero film",image:"https://imdb.iamidiotareyoutoo.com/photo/tt31415162"},
{name:"Coolie",type:"Movie",region:"India",language:"Tamil",date:"2025",genre:"Action · Drama",note:"Tamil action entertainer",image:"https://imdb.iamidiotareyoutoo.com/photo/tt28013732"},
{name:"War 2",type:"Movie",region:"India",language:"Hindi · Telugu · Tamil",date:"2025",genre:"Action · Thriller",note:"Pan-India theatrical release",image:"https://imdb.iamidiotareyoutoo.com/photo/tt21956154"},
{name:"The Fantastic Four: First Steps",type:"Movie",region:"International",language:"English",date:"2025",genre:"Action · Sci-Fi",note:"Marvel Studios release",image:"https://imdb.iamidiotareyoutoo.com/photo/tt10676052"},
{name:"Wednesday",type:"TV Show",region:"International",language:"English",date:"2025",genre:"Mystery · Comedy",note:"New season",image:"https://imdb.iamidiotareyoutoo.com/photo/tt13443470"}
];


const comingSoon=[
{name:"Mirzapur: The Movie",date:"Sep 4, 2026",region:"India · Hindi",note:"The Mirzapur world moves to the big screen."},
{name:"Haiwaan",date:"Sep 11, 2026",region:"India · Hindi",note:"Priyadarshan's Hindi adaptation of the Malayalam thriller Oppam."},
{name:"Practical Magic 2",date:"Sep 9, 2026",region:"International · English",note:"Sandra Bullock and Nicole Kidman return for the fantasy sequel."},
{name:"Primetime",date:"Sep 25, 2026",region:"International · English",note:"A psychological crime thriller led by Robert Pattinson."},
{name:"The Vvaan: Force of the Forest",date:"Sep 2026",region:"India · Hindi",note:"A fantasy-leaning Indian theatrical title on the September radar."},
{name:"Mandaadi",date:"Sep 10, 2026",region:"India · Tamil",note:"A Tamil sports drama centered on a traditional sailboat race."},
{name:"The Revolutionaries",date:"Sep 2026",region:"India · Hindi",note:"Prime Video series based on Sanjeev Sanyal's book."},
{name:"Sardar 2",date:"Sep 2026",region:"India · Tamil",note:"Karthi returns to the spy franchise."}
];
const lists=[
{id:"sci-fi-movies",type:"Movies",title:"Top 10 Sci-Fi Movies",desc:"Mind-bending worlds, ambitious ideas and stories that stay with you.",count:10,items:["Interstellar","Arrival","Dune: Part Two","The Matrix","Blade Runner 2049","2001: A Space Odyssey","Ex Machina","Children of Men","The Martian","Her"]},
{id:"thriller-movies",type:"Movies",title:"Top 10 Thriller Movies",desc:"Tense mysteries, psychological games and unforgettable twists.",count:10,items:["Prisoners","Gone Girl","Se7en","Zodiac","Shutter Island","The Silence of the Lambs","Nightcrawler","The Invisible Man","Wind River","Nocturnal Animals"]},
{id:"crime-shows",type:"TV Shows",title:"Top 10 Crime Series",desc:"Compelling investigations, complex characters and dark stories.",count:10,items:["Mindhunter","True Detective","The Wire","Breaking Bad","Fargo","Narcos","Broadchurch","Ozark","Mare of Easttown","Bosch"]},
{id:"sci-fi-shows",type:"TV Shows",title:"Top 10 Sci-Fi Series",desc:"The series to explore when reality is not quite enough.",count:10,items:["Dark","Severance","Black Mirror","The Expanse","Stranger Things","Westworld","The Last of Us","Silo","Foundation","3 Body Problem"]},
{id:"thriller-books",type:"Books",title:"Top 10 Psychological Thrillers",desc:"Books built around secrets, unreliable minds and sharp twists.",count:10,items:["The Silent Patient","Gone Girl","The Girl on the Train","Before I Go to Sleep","The Woman in the Window","Sharp Objects","Behind Closed Doors","The Couple Next Door","Rock Paper Scissors","None of This Is True"]},
{id:"mystery-books",type:"Books",title:"Top 10 Mystery Books",desc:"Classic puzzles and modern mysteries worth getting lost in.",count:10,items:["The Murder of Roger Ackroyd","And Then There Were None","The Guest List","Magpie Murders","The Thursday Murder Club","The Big Four","The Hound of the Baskervilles","The Devotion of Suspect X","The Maid","The Paris Apartment"]},
{id:"hidden-movies",type:"Movies",title:"Top 5 Hidden Movie Gems",desc:"Less obvious picks that deserve a place on your watchlist.",count:5,items:["Coherence","The Vast of Night","The Guilty","Blue Ruin","Upgrade"]},
{id:"must-read",type:"Books",title:"5 Books Worth Reading",desc:"A compact reading list across mystery, fiction and big ideas.",count:5,items:["Piranesi","1984","The Shadow of the Wind","Project Hail Mary","The Book Thief"]}
];

const titleDetails={
"Interstellar":{director:"Christopher Nolan",cast:["Matthew McConaughey","Anne Hathaway","Jessica Chastain"],trailer:"https://www.youtube.com/results?search_query=Interstellar+official+trailer",where:"https://www.justwatch.com/in/movie/interstellar",review:"A landmark sci-fi adventure combining cosmic scale with an emotional story about family and survival.",similar:["Arrival","The Martian","Dune: Part Two"]},
"Dune: Part Two":{director:"Denis Villeneuve",cast:["Timothée Chalamet","Zendaya","Rebecca Ferguson"],trailer:"https://www.youtube.com/results?search_query=Dune+Part+Two+official+trailer",where:"https://www.justwatch.com/in/movie/dune-part-two",review:"A visually monumental sequel that deepens the characters, politics and mythology of Arrakis.",similar:["Interstellar","Blade Runner 2049","Arrival"]},
"RRR":{director:"S. S. Rajamouli",cast:["N. T. Rama Rao Jr.","Ram Charan","Alia Bhatt"],trailer:"https://www.youtube.com/results?search_query=RRR+official+trailer",where:"https://www.justwatch.com/in/movie/rrr",review:"A larger-than-life Telugu action spectacle driven by friendship, emotion and extraordinary set pieces.",similar:["Kantara","Jai Bhim","Tumbbad"]},
"Kantara":{director:"Rishab Shetty",cast:["Rishab Shetty","Sapthami Gowda","Kishore"],trailer:"https://www.youtube.com/results?search_query=Kantara+official+trailer",where:"https://www.justwatch.com/in/movie/kantara",review:"A distinctive Kannada blend of folklore, action and local tradition with a powerful atmosphere.",similar:["Tumbbad","RRR","Manjummel Boys"]},
"Jai Bhim":{director:"T. J. Gnanavel",cast:["Suriya","Lijomol Jose","Manikandan"],trailer:"https://www.youtube.com/results?search_query=Jai+Bhim+official+trailer",where:"https://www.justwatch.com/in/movie/jai-bhim",review:"A forceful Tamil courtroom drama centered on justice, dignity and a determined legal fight.",similar:["Drishyam","Kantara","Andhadhun"]},
"Manjummel Boys":{director:"Chidambaram",cast:["Soubin Shahir","Sreenath Bhasi","Deepak Parambol"],trailer:"https://www.youtube.com/results?search_query=Manjummel+Boys+official+trailer",where:"https://www.justwatch.com/in/movie/manjummel-boys",review:"A tense Malayalam survival drama where friendship becomes the engine of an extraordinary rescue.",similar:["Kantara","RRR","Drishyam"]},
"Drishyam":{director:"Jeethu Joseph",cast:["Mohanlal","Meena","Ansiba Hassan"],trailer:"https://www.youtube.com/results?search_query=Drishyam+Malayalam+official+trailer",where:"https://www.justwatch.com/in/movie/drishyam",review:"A tightly constructed Malayalam family thriller built around secrets, planning and escalating tension.",similar:["Andhadhun","Jai Bhim","Manjummel Boys"]},
"3 Idiots":{director:"Rajkumar Hirani",cast:["Aamir Khan","R. Madhavan","Sharman Joshi"],trailer:"https://www.youtube.com/results?search_query=3+Idiots+official+trailer",where:"https://www.justwatch.com/in/movie/3-idiots",review:"A warm Hindi coming-of-age comedy-drama about friendship, pressure and finding your own path.",similar:["Panchayat","Kota Factory","Dangal"]},
"Severance":{director:"Dan Erickson",cast:["Adam Scott","Britt Lower","Patricia Arquette"],trailer:"https://www.youtube.com/results?search_query=Severance+official+trailer",where:"https://www.justwatch.com/in/tv-show/severance",review:"A precise, unsettling workplace mystery that slowly turns an unusual premise into a compelling puzzle.",similar:["Dark","Black Mirror","Silo"]},
"The Family Man":{director:"Raj & D.K.",cast:["Manoj Bajpayee","Priyamani","Sharib Hashmi"],trailer:"https://www.youtube.com/results?search_query=The+Family+Man+official+trailer",where:"https://www.justwatch.com/in/tv-show/the-family-man",review:"A smart Indian spy thriller balancing high-stakes missions with family life and dry humor.",similar:["Paatal Lok","Scam 1992","Suzhal: The Vortex"]},
"Panchayat":{director:"Deepak Kumar Mishra",cast:["Jitendra Kumar","Raghubir Yadav","Neena Gupta"],trailer:"https://www.youtube.com/results?search_query=Panchayat+official+trailer",where:"https://www.justwatch.com/in/tv-show/panchayat",review:"A gentle Hindi comedy-drama built around village life, memorable characters and understated humor.",similar:["Kota Factory","The Family Man","Scam 1992"]}
};

const reviews=[
{type:"Movie Review",region:"International",title:"Dune: Part Two",score:"8.5/10",text:"A spectacular sci-fi sequel with huge scale, political intrigue and strong character drama.",verdict:"Worth Watching",date:"Featured Review",release:"Movie",headline:"A massive sequel that earns its scale.",pros:["World-building","Visual spectacle","Character drama"],cons:["Long runtime","Dense mythology"],who:"Viewers who enjoy ambitious science fiction and epic storytelling."},
{type:"TV Review",region:"International",title:"Severance",score:"8.7/10",text:"A strange workplace mystery that rewards patience with atmosphere, ideas and escalating tension.",verdict:"Worth Watching",date:"Featured Review",release:"TV Show",headline:"The kind of mystery that gets under your skin.",pros:["Atmosphere","Concept","Performances"],cons:["Slow-burn pacing"],who:"Viewers who like intelligent mysteries and patient storytelling."},
{type:"Movie Review",region:"India",title:"Manjummel Boys",score:"8.2/10",text:"A gripping survival drama where friendship and escalating danger drive an emotionally charged story.",verdict:"Worth Watching",date:"Featured Review",release:"Movie",headline:"Friendship becomes the heart of a gripping survival story.",pros:["Emotion","Tension","Ensemble"],cons:["Familiar survival beats"],who:"Viewers looking for an emotionally driven Malayalam thriller."},
{type:"TV Review",region:"India",title:"The Family Man",score:"8.7/10",text:"A smart spy thriller that balances high-stakes missions with family life and sharp humor.",verdict:"Worth Watching",date:"Featured Review",release:"TV Show",headline:"Indian spy drama with a surprisingly human center.",pros:["Manoj Bajpayee","Humor","Thriller plot"],cons:["Uneven pacing"],who:"Viewers who want espionage with family drama and comedy."},
{type:"Movie Review",region:"India",title:"Kantara",score:"8.2/10",text:"A distinctive blend of folklore, action and local culture with an atmospheric visual style.",verdict:"Worth Watching",date:"Featured Review",release:"Movie",headline:"Folklore, action and atmosphere come together.",pros:["Atmosphere","Cultural texture","Final act"],cons:["Uneven middle"],who:"Viewers interested in distinctive Indian folklore and action cinema."},
{type:"Book Review",region:"International",title:"The Silent Patient",score:"4.4/5",text:"A fast-moving psychological mystery built around a central question that keeps the pages turning.",verdict:"Worth Reading",date:"Featured Review",release:"Book",headline:"A page-turner built around one irresistible question.",pros:["Pacing","Mystery hook","Readable prose"],cons:["Some familiar genre devices"],who:"Readers who want a fast psychological mystery."}
];

let selectedType="All",selectedGenre="All",selectedList="all",selectedIndiaLanguage="All",selectedReviewFilter="All",selectedReleaseFilter="All",liveResults=[];

const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

function card(x){
 const bg=x.image?' style="background-image:linear-gradient(180deg,#0000,#000b),url(\\''+x.image+'\\');background-size:cover;background-position:center"':'';
 return '<article class="card" data-name="'+esc(x.name)+'"><div class="poster"'+bg+'><span class="type">'+esc(x.type)+'</span><span class="initial">'+esc((x.name||"?")[0])+'</span></div><div class="info"><h3>'+esc(x.name)+' <span class="rating">★ '+esc(x.rating||"—")+'</span></h3><div class="meta">'+esc(x.year||"")+' · '+esc(x.genre||"")+'</div><p class="why">'+esc(x.why||"Explore this title and discover something new.")+'</p></div></article>';
}

function render(){
 let source=liveResults.length?liveResults:items;
 let q=document.querySelector("#search").value.toLowerCase();
 let filtered=source.filter(x=>(selectedType==="All"||x.type===selectedType)&&(selectedGenre==="All"||x.genre.includes(selectedGenre))&&(!q||x.name.toLowerCase().includes(q)||x.genre.toLowerCase().includes(q)));
 document.querySelector("#recommendations").innerHTML=filtered.slice(0,8).map(card).join("")||'<p style="color:#999">No matches yet. Try another title.</p>';
 document.querySelector("#trendingGrid").innerHTML=(liveResults.length?liveResults.slice(0,4):items.slice(3,7)).map(card).join("");
 document.querySelector("#gemsGrid").innerHTML=items.slice(1,5).map(card).join("");
 renderIndia();renderReleases();renderLists();renderReviews();renderComing();bindCards();
}

function renderIndia(){
 const filtered=selectedIndiaLanguage==="All"?indiaPicks:indiaPicks.filter(x=>x.genre.toLowerCase().includes(selectedIndiaLanguage.toLowerCase()));
 document.querySelector("#indiaGrid").innerHTML=filtered.map(card).join("");
}


function releaseCard(x){
 return '<article class="releaseCard" data-release="'+esc(x.name)+'"><div class="releasePoster" style="background-image:linear-gradient(180deg,#0000,#000d),url(\''+esc(x.image||'')+'\');background-size:cover;background-position:center"><span class="releaseBadge">'+esc(x.type)+'</span><span class="releaseYear">'+esc(x.date)+'</span></div><div class="releaseInfo"><div class="releaseRegion">'+esc(x.region)+' · '+esc(x.language)+'</div><h3>'+esc(x.name)+'</h3><div class="meta">'+esc(x.genre)+'</div><p>'+esc(x.note)+'</p><button class="reviewLink" data-release-review="'+esc(x.name)+'">Read Review →</button></div></article>';
}
function renderReleases(){
 const filtered=selectedReleaseFilter==="All"?releases:releases.filter(x=>x.region===selectedReleaseFilter||x.type===selectedReleaseFilter);
 document.querySelector("#releasesGrid").innerHTML=filtered.map(releaseCard).join("");
 document.querySelectorAll(".releaseCard").forEach(c=>c.onclick=e=>{if(e.target.closest(".reviewLink"))return;openRelease(releases.find(x=>x.name===c.dataset.release))});
 document.querySelectorAll(".reviewLink").forEach(b=>b.onclick=()=>{const x=releases.find(r=>r.name===b.dataset.releaseReview);const r=reviews.find(v=>v.title===x.name);if(r)openReview(r);else openRelease(x)});
}
function openRelease(x){
 document.querySelector("#modalBody").innerHTML='<div class="eyebrow">'+esc(x.type)+' · '+esc(x.region)+'</div><h2>'+esc(x.name)+'</h2><div class="tags"><span class="tag">'+esc(x.language)+'</span><span class="tag">'+esc(x.genre)+'</span></div><p><b>Release:</b> '+esc(x.date)+'</p><p>'+esc(x.note)+'</p><p class="reviewNote">A full WatchNext review will appear here once this title has been reviewed by the editorial team.</p>';
 document.querySelector("#modal").classList.add("open");
}

function renderComing(){
 const el=document.querySelector("#comingGrid");
 if(!el)return;
 el.innerHTML=comingSoon.map(x=>'<article class="comingCard"><div class="comingDate">'+esc(x.date)+'</div><h3>'+esc(x.name)+'</h3><div class="comingRegion">'+esc(x.region)+'</div><p>'+esc(x.note)+'</p></article>').join("");
}

function renderLists(){
 const filtered=selectedList==="all"?lists:lists.filter(x=>x.type===selectedList);
 document.querySelector("#listGrid").innerHTML=filtered.map(x=>'<article class="listCard" data-list-id="'+x.id+'"><div class="listType">'+esc(x.type)+'</div><h3>'+esc(x.title)+'</h3><p>'+esc(x.desc)+'</p><div class="listCount"><b>'+x.count+'</b> curated picks · View list →</div></article>').join("");
 document.querySelectorAll(".listCard").forEach(c=>c.onclick=()=>openList(lists.find(x=>x.id===c.dataset.listId)));
}

function renderReviews(){
 const filtered=selectedReviewFilter==="All"?reviews:reviews.filter(x=>x.region===selectedReviewFilter||x.release===selectedReviewFilter);
 document.querySelector("#reviewsGrid").innerHTML=filtered.map(x=>'<article class="reviewCard" data-review="'+esc(x.title)+'"><div class="reviewTop"><span class="reviewBadge">'+esc(x.type)+'</span><span class="reviewScore">★ '+esc(x.score)+'</span></div><h3>'+esc(x.title)+'</h3><p>'+esc(x.text)+'</p><div class="reviewVerdict"><b>WatchNext: </b>'+esc(x.verdict)+' <span>· '+esc(x.region)+' · '+esc(x.date)+'</span></div></article>').join("");
}

function openList(x){
 document.querySelector("#modalBody").innerHTML='<div class="eyebrow">'+esc(x.type)+' · CURATED LIST</div><h2>'+esc(x.title)+'</h2><p>'+esc(x.desc)+'</p><ol class="rankedList">'+x.items.map((v,i)=>'<li><span>'+String(i+1).padStart(2,"0")+'</span><b>'+esc(v)+'</b></li>').join("")+'</ol>';
 document.querySelector("#modal").classList.add("open");
}

function openReview(x){
 const pros=(x.pros||[]).map(v=>'<span class="tag">'+esc(v)+'</span>').join(""); const cons=(x.cons||[]).map(v=>'<span class="tag">'+esc(v)+'</span>').join(""); document.querySelector("#modalBody").innerHTML='<div class="eyebrow">'+esc(x.type)+' · '+esc(x.region)+'</div><h2>'+esc(x.title)+'</h2><p class="reviewHeadline">'+esc(x.headline||x.text)+'</p><strong class="bigScore">★ '+esc(x.score)+'</strong><div class="detailSection"><h3>The WatchNext Take</h3><p>'+esc(x.text)+'</p></div><div class="reviewColumns"><div><h3>What works</h3><div class="tags">'+pros+'</div></div><div><h3>Things to know</h3><div class="tags">'+cons+'</div></div></div><div class="detailSection"><h3>Who is it for?</h3><p>'+esc(x.who||"Viewers and readers looking for something worth their time.")+'</p></div><div class="reviewVerdict"><b>WatchNext Verdict:</b> '+esc(x.verdict)+' · '+esc(x.score)+'</div><p class="reviewNote">Spoiler-free editorial review. No major plot reveals are included.</p>';
 document.querySelector("#modal").classList.add("open");
}

function bindCards(){
 document.querySelectorAll(".card").forEach(c=>c.onclick=()=>{let x=[...liveResults,...items,...indiaPicks].find(x=>x.name===c.dataset.name);if(x)openModal(x)});
 document.querySelectorAll(".reviewCard").forEach(c=>c.onclick=()=>{const x=reviews.find(r=>r.title===c.dataset.review);if(x)openReview(x)});
}

function openModal(x){
 const d=titleDetails[x.name]||{};
 const review=reviews.find(r=>r.title===x.name);
 const similar=(d.similar||[]).map(v=>'<span class="tag">'+esc(v)+'</span>').join("");
 const cast=(d.cast||[]).map(v=>'<span class="castName">'+esc(v)+'</span>').join("");
 document.querySelector("#modalBody").innerHTML='<div class="detailHero">'+(x.image?'<div class="detailPoster" style="background-image:linear-gradient(180deg,#0000,#000b),url(\\''+esc(x.image)+'\\')"></div>':'')+'<div class="detailMain"><div class="eyebrow">'+esc(x.type)+' · '+esc(x.year||"")+'</div><h2>'+esc(x.name)+'</h2><div class="detailRating">★ '+esc(x.rating||"—")+'</div><div class="tags">'+(x.tags||[]).map(t=>'<span class="tag">'+esc(t)+'</span>').join("")+'</div><p>'+esc(x.desc||"Explore this title and discover more about it.")+'</p><div class="detailButtons">'+(d.trailer?'<a class="detailButton primary" target="_blank" rel="noopener" href="'+esc(d.trailer)+'">▶ Watch Trailer</a>':'')+(d.where?'<a class="detailButton" target="_blank" rel="noopener" href="'+esc(d.where)+'">Where to Watch</a>':'')+'</div></div></div><div class="detailSection"><h3>WatchNext Review</h3><p>'+esc(review?.text||d.review||x.why||"Our editorial team has not reviewed this title yet.")+'</p>'+(review?'<div class="reviewVerdict"><b>WatchNext: </b>'+esc(review.verdict)+' · '+esc(review.score)+'</div>':'')+'</div>'+(cast?'<div class="detailSection"><h3>Cast</h3><div class="castList">'+cast+'</div></div>':'')+(similar?'<div class="detailSection"><h3>You may also like</h3><div class="tags">'+similar+'</div></div>':'')+'<p class="detailSource">Trailer and availability links open external services. Availability can vary by country and change over time.</p>';
 document.querySelector("#modal").classList.add("open");
}

async function liveSearch(q){
 if(!q){liveResults=[];render();return}
 const tasks=[];
 if(selectedType==="All"||selectedType==="Movies")tasks.push(fetch("https://imdb.iamidiotareyoutoo.com/search?q="+encodeURIComponent(q)+"&v=1").then(r=>r.ok?r.json():Promise.reject()).then(data=>{
  const rows=Array.isArray(data)?data:(data.results||data.data||data.searchResults||data.titles||[]);
  return rows.slice(0,8).map(v=>{const id=v.imdb_id||v.imdbId||v.id||v.tt||v.tconst||v.title_id||"";const title=v.title||v.name||v.primaryTitle||v.originalTitle||v.l||"Untitled";const year=v.year||v.release_year||v.releaseYear||v.y||v.startYear||"";const rating=v.rating||v.imdb_rating||v.imdbRating||v.averageRating||v.r||"";const poster=v.poster||v.image||v.posterUrl||v.poster_url||v.photo||"";const posterUrl=poster||((id&&String(id).startsWith("tt"))?"https://imdb.iamidiotareyoutoo.com/photo/"+id:"");return{name:title,type:"Movies",genre:Array.isArray(v.genres)?v.genres.slice(0,2).join(" · "):(v.genre||"Movie"),rating,year,image:posterUrl,desc:v.plot||v.overview||v.description||v.desc||"",tags:Array.isArray(v.genres)?v.genres:(v.genre?[v.genre]:[]),why:"A live movie result matched to your search.",imdbId:id}})}
 ).catch(()=>[]));
 if(selectedType==="All"||selectedType==="TV Shows")tasks.push(fetch("https://api.tvmaze.com/search/shows?q="+encodeURIComponent(q)).then(r=>r.json()).then(a=>a.slice(0,6).map(v=>({name:v.show.name,type:"TV Shows",genre:(v.show.genres||["TV"]).slice(0,2).join(" · "),rating:v.show.rating?.average,year:(v.show.premiered||"").slice(0,4),image:v.show.image?.original||v.show.image?.medium,desc:(v.show.summary||"").replace(/<[^>]*>/g,""),tags:v.show.genres||[],why:"A live TV result matched to your search."}))).catch(()=>[]));
 if(selectedType==="All"||selectedType==="Books")tasks.push(fetch("https://www.googleapis.com/books/v1/volumes?q="+encodeURIComponent(q)+"&maxResults=6").then(r=>r.json()).then(a=>(a.items||[]).map(v=>{const i=v.volumeInfo||{};return{name:i.title||"Untitled",type:"Books",genre:(i.categories||["Book"]).slice(0,2).join(" · "),rating:i.averageRating,year:(i.publishedDate||"").slice(0,4),image:i.imageLinks?.thumbnail?.replace("http:","https:"),desc:i.description||"",tags:i.categories||[],why:"A live book result matched to your search."}})).catch(()=>[]));
 liveResults=(await Promise.all(tasks)).flat();if(!liveResults.length&&selectedType==="Movies")liveResults=items.filter(x=>x.type==="Movies");render();
}

let timer;document.querySelector("#search").oninput=()=>{clearTimeout(timer);timer=setTimeout(()=>liveSearch(document.querySelector("#search").value.trim()),450)};
document.querySelectorAll(".chip").forEach(b=>b.onclick=()=>{document.querySelectorAll(".chip").forEach(x=>x.classList.remove("active"));b.classList.add("active");selectedType=b.dataset.type;liveSearch(document.querySelector("#search").value.trim())});
document.querySelectorAll(".filter").forEach(b=>b.onclick=()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");selectedGenre=b.textContent;render()});
document.querySelectorAll(".listTab").forEach(b=>b.onclick=()=>{document.querySelectorAll(".listTab").forEach(x=>x.classList.remove("active"));b.classList.add("active");selectedList=b.dataset.list;renderLists()});
document.querySelectorAll(".indiaTab").forEach(b=>b.onclick=()=>{document.querySelectorAll(".indiaTab").forEach(x=>x.classList.remove("active"));b.classList.add("active");selectedIndiaLanguage=b.dataset.language;renderIndia();bindCards()});
document.querySelectorAll(".reviewTab").forEach(b=>b.onclick=()=>{document.querySelectorAll(".reviewTab").forEach(x=>x.classList.remove("active"));b.classList.add("active");selectedReviewFilter=b.dataset.review;renderReviews();bindCards()});
document.querySelectorAll(".releaseTab").forEach(b=>b.onclick=()=>{document.querySelectorAll(".releaseTab").forEach(x=>x.classList.remove("active"));b.classList.add("active");selectedReleaseFilter=b.dataset.release;renderReleases()});
document.querySelector("#recommendBtn").onclick=()=>{const q=document.querySelector("#search").value.trim();if(q)liveSearch(q);document.querySelector("#discover").scrollIntoView({behavior:"smooth"})};
document.querySelector("#close").onclick=()=>document.querySelector("#modal").classList.remove("open");
document.querySelector("#modal").onclick=e=>{if(e.target.id==="modal")e.currentTarget.classList.remove("open")};
document.querySelector("#themeBtn").onclick=()=>document.body.classList.toggle("light");
render();