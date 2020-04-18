(this.webpackJsonpwatchito=this.webpackJsonpwatchito||[]).push([[0],{10:function(e,t,a){e.exports=a(22)},15:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(7),o=a.n(i),c=(a(15),a(3)),m=a(1);var l=function(){return n.a.createElement("nav",{className:"flex flex-col md:flex-row items-center justify-center shadow-md py-3 fixed min-w-full bg-white top-0 md:px-5"},n.a.createElement("a",{href:"/watchito/",className:"text-3xl mb-2 hidden md:block"},"Watchito"),n.a.createElement("ul",{className:"grid grid-cols-3 gap-4 md:ml-auto"},n.a.createElement("li",null,n.a.createElement(m.a,{to:"/watchito/watched"},"Watched")),n.a.createElement("li",null,n.a.createElement(m.a,{to:"/watchito/towatch"},"To Watch")),n.a.createElement("li",null,n.a.createElement(m.a,{to:"/watchito/search"},"Search"))))},s=function(){return n.a.createElement("div",{className:"flex content-center justify-center   items-center min-h-screen"},n.a.createElement("h1",{className:"text-center text-6xl mb-8"},"Welcome To ",n.a.createElement("span",{className:"font-bold text-blue-600"},"Watchito")," ",n.a.createElement("br",null),"Organize your Watching Lists in Easy and Fun way"))},d=a(2);var u=function(e){var t=e.movie,a=e.toggleFavorite,r=e.toggleWatch,i=e.watched;return n.a.createElement("div",{className:"flex justify-between px-2 content-center border border-solid border-gray-100 py-2 md:max-w-3xl mx-auto"},n.a.createElement("h2",null,n.a.createElement(m.a,{to:"/watchito/movie/"+t.imdbID},t.Title),n.a.createElement("span",{className:"text-gray-600 mx-2 md:inline hidden"},"(",t.Year,")")),n.a.createElement("div",{className:"options flex content-center justify-center"},i?n.a.createElement("button",{onClick:function(){return a(t.imdbID)},className:"text-red-700 mx-1 flex items-center text-3xl"},t.favorite?n.a.createElement(d.c,null):n.a.createElement(d.d,null)):n.a.createElement("button",{onClick:function(){return r(t.imdbID)},className:"text-green-700 mx-1 flex items-center text-3xl"},n.a.createElement(d.b,null)),n.a.createElement("button",{onClick:function(){return r(t.imdbID)},className:"text-red-700 mx-1 flex items-center text-3xl"},n.a.createElement(d.a,null))))},h=function(e){var t=e.movies,a=e.toggleFavorite,r=e.toggleWatch;return n.a.createElement("div",{className:"md:mt-24 mt-16"},n.a.createElement("h1",{className:"text-center text-2xl mb-8"},"Watched Movies"),t.length?t.map((function(e){return e.watched?n.a.createElement(u,{key:e.imdbID,movie:e,toggleFavorite:a,toggleWatch:r,watched:!0}):null})):null)},y=function(e){var t=e.movies,a=e.toggleWatch;return n.a.createElement("div",{className:"md:mt-24 mt-16"},n.a.createElement("h1",{className:"text-center text-2xl mb-8"},"To Watch Movies"),t.length?t.map((function(e){return!1===e.watched?n.a.createElement(u,{key:e.imdbID,movie:e,toggleWatch:a,watched:!1}):null})):null)};var b=function(e){var t=e.movie,a=e.addFilm;return n.a.createElement("div",{className:"p-5 w-4/5 mx-auto shadow-xl my-2 md:w-1/3 md:p-1 md:max-w-md md:mx-0 md:border rounded"},n.a.createElement("img",{src:t.Poster,alt:t.Title+"Poster",className:" mx-auto md:w-full"}),n.a.createElement("button",{to:"/movie/"+t.imdbID,className:"text-center text-xl mt-1 block cursor-pointer mx-auto md:my-4 md:text-2xl",onClick:function(){return e=t.imdbID,fetch("https://www.omdbapi.com/?i=".concat(e,"&apikey=4f078e44")).then((function(e){return e.json()})).then((function(t){t.watched=!1,t.favorite=!1,a(t),Object(m.c)("/watchito/movie/".concat(e))})),void console.log(e);var e}},t.Title," (",t.Year,")"))};var f=function(e){var t=e.addFilm,a=Object(r.useState)(""),i=Object(c.a)(a,2),o=i[0],m=i[1],l=Object(r.useState)([{Title:"Batman v Superman: Dawn of Justice",Year:"2016",imdbID:"tt2975590",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{Title:"Batman Begins",Year:"2005",imdbID:"tt0372784",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"},{Title:"Batman",Year:"1989",imdbID:"tt0096895",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg"},{Title:"Batman Returns",Year:"1992",imdbID:"tt0103776",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg"},{Title:"Batman Forever",Year:"1995",imdbID:"tt0112462",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"}]),s=Object(c.a)(l,2),u=s[0],h=s[1],y=u.filter((function(e){return"movie"===e.Type}));return n.a.createElement("div",{className:"md:mt-24 mt-16"},n.a.createElement("form",{className:"flex flex-col justify-center md:flex-row",onSubmit:function(e){e.preventDefault(),console.log(o,"Searching..."),fetch("https://www.omdbapi.com//?s="+o+"&apikey=4f078e44").then((function(e){return e.json()})).then((function(e){return h(e.Search)}))}},n.a.createElement("input",{type:"text",placeholder:"EX: joker",className:"border p-2 mx-2 rounded md:w-3/5",value:o,onChange:function(e){m(e.target.value)}}),n.a.createElement("button",{className:"bg-blue-500 mx-2 text-white mt-2 p-2 rounded md:mt-0 md:w-1/5 md:p-4"},"Search ",n.a.createElement(d.f,{className:"inline text-xl"}))),n.a.createElement("div",{className:"results mt-10 flex flex-col justity-center md:flex-row md:flex-wrap"},y.length?y.map((function(e){return n.a.createElement(b,{movie:e,addFilm:t})})):null))};var g=function(e){var t=e.name;return n.a.createElement("span",{className:"text-xs bg-gray-200 p-1 m-1 rounded mt-1"},t," ")};var p=function(e){var t=e.movieId,a=e.movies,r=e.film,i=a.filter((function(e){return e.imdbID===t})),o=Object(c.a)(i,1)[0];o||(o=r);var m=o.Genre.split(", "),l=o.Actors.split(", "),s=o.Director.split(", ");return n.a.createElement("div",{className:"md:mt-24 mt-16 flex flex-col justify-center md:flex-row"},n.a.createElement("div",{className:"row md:mr-5"},n.a.createElement("img",{src:o.Poster,alt:"movie poster",className:"mx-auto"}),n.a.createElement("a",{href:"https://www.imdb.com/title/".concat(o.imdbID,"/"),target:"_blank",rel:"noopener noreferrer",className:"text-xl font-semibold mt-2 text-center mx-auto block",style:{maxWidth:"90%"}},o.Title," (",o.Year,")")),n.a.createElement("div",{className:"row mt-5 text-center md:text-left"},n.a.createElement("p",{className:"text-xl mb-3"},"Rated: ",o.Rated),n.a.createElement("div",{className:"flex flex-wrap justify-center md:justify-start"},n.a.createElement("span",{className:"text-xl"},"Director: "),s.length?s.map((function(e,t){return n.a.createElement(g,{name:e,key:t})})):null),n.a.createElement("div",{className:"my-2 flex flex-wrap justify-center md:justify-start"},n.a.createElement("span",{className:"text-xl"},"Genre: "),m.length?m.map((function(e,t){return n.a.createElement(g,{name:e,key:t})})):null),n.a.createElement("div",{className:"my-2 flex flex-wrap justify-center md:justify-start"},n.a.createElement("span",{className:"text-xl"},"Actors: "),l.length?l.map((function(e,t){return n.a.createElement(g,{name:e,key:t})})):null),n.a.createElement("div",{className:"my-2 flex flex-wrap justify-center md:justify-start"},n.a.createElement("p",{className:"p-3 bg-gray-100 rounded max-w-screen-md"},n.a.createElement(d.e,null),o.Plot," ",n.a.createElement(d.e,{className:"ml-auto"}))),n.a.createElement("div",{className:"my-2 flex flex-wrap justify-center text-xl"},n.a.createElement("span",{className:"mr-3"},"IMDB: "),o.Ratings[0].Value)))},v=a(9);var x=function(){var e=Object(r.useState)(v),t=Object(c.a)(e,2),a=t[0],i=t[1],o=Object(r.useState)({}),d=Object(c.a)(o,2),u=d[0],b=d[1],g=function(e){console.log("clicked");var t;t=a.map((function(t){return t.imdbID===e&&(t.watched=!t.watched,t.favorite=!1),t})),i(t)};return n.a.createElement("div",{className:"App"},n.a.createElement(l,null),n.a.createElement("div",{className:"container mx-auto px-4"},n.a.createElement(m.b,null,n.a.createElement(s,{path:"/watchito"}),n.a.createElement(h,{path:"/watchito/watched",movies:a,toggleFavorite:function(e){var t;t=a.map((function(t){return t.imdbID===e&&(t.favorite=!t.favorite),t})),i(t)},toggleWatch:g}),n.a.createElement(y,{path:"/watchito/towatch",movies:a,toggleWatch:g}),n.a.createElement(p,{path:"/watchito/movie/:movieId",movies:a,film:u}),n.a.createElement(f,{path:"/watchito/search",movies:a,addFilm:function(e){b(e)}}))))};o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(x,null)),document.getElementById("root"))},9:function(e){e.exports=JSON.parse('[{"Title":"Guardians of the Galaxy Vol. 2","Year":"2017","Rated":"PG-13","Released":"05 May 2017","Runtime":"136 min","Genre":"Action, Adventure, Comedy, Sci-Fi","Director":"James Gunn","Writer":"James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)","Actors":"Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel","Plot":"The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord\'s encounter with his father the ambitious celestial being Ego.","Language":"English","Country":"USA","Awards":"Nominated for 1 Oscar. Another 14 wins & 52 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.6/10"},{"Source":"Rotten Tomatoes","Value":"85%"},{"Source":"Metacritic","Value":"67/100"}],"Metascore":"67","imdbRating":"7.6","imdbVotes":"531,435","imdbID":"tt3896198","Type":"movie","DVD":"22 Aug 2017","BoxOffice":"$389,804,217","Production":"Walt Disney Pictures","Website":"N/A","Response":"True","watched":true,"favorite":true},{"Title":"1917","Year":"2019","Rated":"R","Released":"10 Jan 2020","Runtime":"119 min","Genre":"Drama, War","Director":"Sam Mendes","Writer":"Sam Mendes, Krysty Wilson-Cairns","Actors":"Dean-Charles Chapman, George MacKay, Daniel Mays, Colin Firth","Plot":"April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.","Language":"English, French, German","Country":"USA, UK, India, Spain, Canada","Awards":"Won 3 Oscars. Another 110 wins & 161 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.4/10"},{"Source":"Rotten Tomatoes","Value":"89%"},{"Source":"Metacritic","Value":"78/100"}],"Metascore":"78","imdbRating":"8.4","imdbVotes":"272,841","imdbID":"tt8579674","Type":"movie","DVD":"10 Mar 2020","BoxOffice":"N/A","Production":"Universal Pictures","Website":"N/A","Response":"True","watched":false,"favorite":false},{"Title":"Sonic the Hedgehog","Year":"2020","Rated":"PG","Released":"14 Feb 2020","Runtime":"99 min","Genre":"Action, Adventure, Comedy, Family, Sci-Fi","Director":"Jeff Fowler","Writer":"Patrick Casey, Josh Miller","Actors":"Ben Schwartz, James Marsden, Jim Carrey, Tika Sumpter","Plot":"After discovering a small, blue, fast hedgehog, a small-town police officer must help it defeat an evil genius who wants to do experiments on it.","Language":"English","Country":"USA, Japan, Canada","Awards":"N/A","Poster":"https://m.media-amazon.com/images/M/MV5BNDc1ZTlmOWUtNDY2YS00OGU5LTg2MTYtYTk2MmQzMGE2NzUwXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.7/10"},{"Source":"Rotten Tomatoes","Value":"64%"},{"Source":"Metacritic","Value":"47/100"}],"Metascore":"47","imdbRating":"6.7","imdbVotes":"35,496","imdbID":"tt3794354","Type":"movie","DVD":"31 Mar 2020","BoxOffice":"N/A","Production":"Paramount Pictures","Website":"N/A","Response":"True","watched":true,"favorite":true},{"Title":"Big Hero 6","Year":"2014","Rated":"PG","Released":"07 Nov 2014","Runtime":"102 min","Genre":"Animation, Action, Adventure, Family, Sci-Fi","Director":"Don Hall, Chris Williams","Writer":"Jordan Roberts (screenplay by), Robert L. Baird (screenplay by), Daniel Gerson (screenplay by), Man of Action (Big Hero 6 team and characters created by), Steven T. Seagle (characters), Duncan Rouleau (characters)","Actors":"Scott Adsit, Ryan Potter, Daniel Henney, T.J. Miller","Plot":"The special bond that develops between plus-sized inflatable robot Baymax, and prodigy Hiro Hamada, who team up with a group of friends to form a band of high-tech heroes.","Language":"English","Country":"USA","Awards":"Won 1 Oscar. Another 16 wins & 58 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMDliOTIzNmUtOTllOC00NDU3LWFiNjYtMGM0NDc1YTMxNjYxXkEyXkFqcGdeQXVyNTM3NzExMDQ@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.8/10"},{"Source":"Rotten Tomatoes","Value":"89%"},{"Source":"Metacritic","Value":"74/100"}],"Metascore":"74","imdbRating":"7.8","imdbVotes":"390,120","imdbID":"tt2245084","Type":"movie","DVD":"24 Feb 2015","BoxOffice":"N/A","Production":"Walt Disney Pictures","Website":"N/A","Response":"True","watched":true,"favorite":true},{"Title":"Avengers: Infinity War","Year":"2018","Rated":"PG-13","Released":"27 Apr 2018","Runtime":"149 min","Genre":"Action, Adventure, Sci-Fi","Director":"Anthony Russo, Joe Russo","Writer":"Christopher Markus (screenplay by), Stephen McFeely (screenplay by), Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Joe Simon (Captain America created by), Jack Kirby (Captain America created by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Jim Starlin (Thanos,  Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Steve Englehart (Mantis created by), Don Heck (Mantis created by)","Actors":"Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans","Plot":"The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.","Language":"English","Country":"USA","Awards":"Nominated for 1 Oscar. Another 44 wins & 71 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.5/10"},{"Source":"Rotten Tomatoes","Value":"85%"},{"Source":"Metacritic","Value":"68/100"}],"Metascore":"68","imdbRating":"8.5","imdbVotes":"754,875","imdbID":"tt4154756","Type":"movie","DVD":"14 Aug 2018","BoxOffice":"$664,987,816","Production":"Walt Disney Pictures","Website":"N/A","Response":"True","watched":true,"favorite":true},{"Title":"Alita: Battle Angel","Year":"2019","Rated":"PG-13","Released":"14 Feb 2019","Runtime":"122 min","Genre":"Action, Adventure, Sci-Fi, Thriller","Director":"Robert Rodriguez","Writer":"James Cameron (screenplay by), Laeta Kalogridis (screenplay by), Yukito Kishiro (based on the graphic novel series \\"Gunnm\\" by)","Actors":"Rosa Salazar, Christoph Waltz, Jennifer Connelly, Mahershala Ali","Plot":"A deactivated cyborg is revived, but cannot remember anything of her past life and goes on a quest to find out who she is.","Language":"English, Spanish","Country":"USA","Awards":"8 wins & 25 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNzVhMjcxYjYtOTVhOS00MzQ1LWFiNTAtZmY2ZmJjNjIxMjllXkEyXkFqcGdeQXVyNTc5OTMwOTQ@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.3/10"},{"Source":"Rotten Tomatoes","Value":"61%"},{"Source":"Metacritic","Value":"53/100"}],"Metascore":"53","imdbRating":"7.3","imdbVotes":"196,748","imdbID":"tt0437086","Type":"movie","DVD":"09 Jul 2019","BoxOffice":"N/A","Production":"20th Century Fox","Website":"N/A","Response":"True","watched":true,"favorite":false}]')}},[[10,1,2]]]);
//# sourceMappingURL=main.37d475bd.chunk.js.map