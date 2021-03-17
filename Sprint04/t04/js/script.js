var active_film = -1;
class film{
    constructor(name,date,actors,text) {
        this.name = name;
        this.date = date;
        this.actors = actors;
        this.text = text;
    }
}

function load_films_list(array) {
    for (let index = 0; index < array.length; index++) {

        let new_div = document.createElement('div');
        new_div.innerHTML = array[index].name;
        new_div.classList.add("film_name");
        if (index == active_film) 
            new_div.classList.add("film_name_active");
        list.appendChild(new_div);
        new_div.onclick = function() {
            load_new_films(array,index);
        }
    }
    load_new_films(array,0);
}

function load_new_films(array, new_index) {
    if (new_index == active_film) {
        return;
    }
    let temp = document.getElementsByClassName('film_name');
    if (active_film != -1)
        temp[active_film].classList.remove('film_name_active')
    temp[new_index].classList.add('film_name_active')
    active_film = new_index;

    header.innerHTML = array[new_index].name;
    date.innerHTML = array[new_index].date;


    actror_list.innerHTML = '';
    for (let index = 0; index < array[new_index].actors.length; index++) {
        let temp = document.createElement('div');//actors_list
        temp.classList.add('actors_list');
        temp.innerHTML = array[new_index].actors[index];
        actror_list.appendChild(temp);
    }
    text.innerHTML = array[new_index].text;
    switch (active_film) {
        case 0:
            image.innerHTML = '<img src="assets/image/1.png">';
        break;
        case 1:
            image.innerHTML = '<img src="assets/image/2.jpeg">';
        break;
        case 2:
            image.innerHTML = '<img src="assets/image/3.jpeg">';
        break;
    }
    
}
let films_array = new Array(3);
films_array[0] = new film("The Wolf of Wall Street", "December 17, 2013",["Leonardo<br>DiCaprio", "Jonah Hill", "Margot Robbie", "Matthew<br>McConaughey"], "The Wolf of Wall Street is a 2013 American epic biographical black comedy crime film directed by Martin Scorsese and written by Terence Winter, based on the 2007 memoir of the same name by Jordan Belfort. It recounts Belfort's perspective on his career as a stockbroker in New York City and how his firm, Stratton Oakmont, engaged in rampant corruption and fraud on Wall Street, which ultimately led to his downfall.");
films_array[1] = new film("Avengers: Infinity War", "April 23, 2018",["Robert<br>Downey<br>Jr.", "Chris<br>Hemsworth", "Mark<br>Ruffalo","Chris<br>Evans", "Scarlett<br>Johansson"], "Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to The Avengers (2012) and Avengers: Age of Ultron (2015), and the 19th film in the Marvel Cinematic Universe (MCU). Directed by Anthony and Joe Russo and written by Christopher Markus and Stephen McFeely, the film features an ensemble cast including Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Scarlett Johansson, Benedict Cumberbatch, Don Cheadle, Tom Holland, Chadwick Boseman, Paul Bettany, Elizabeth Olsen, Anthony Mackie, Sebastian Stan, Danai Gurira, Letitia Wright, Dave Bautista, Zoe Saldana, Josh Brolin, and Chris Pratt. In the film, the Avengers and the Guardians of the Galaxy attempt to prevent Thanos from collecting the six all-powerful Infinity Stones as part of his quest to kill half of all life in the universe.");
films_array[2] = new film("The Judge", "September 4, 2014",["Robert<br>Downey<br>Jr.", "Robert<br>Duvall", "Vera<br>Farmiga"], "The Judge is a 2014 American legal drama film directed by David Dobkin.[4] The film stars Robert Downey Jr., Robert Duvall, Vera Farmiga, Vincent D'Onofrio, Jeremy Strong, Dax Shepard and Billy Bob Thornton.[4] The film was released in the United States on October 10, 2014. It received mixed reviews but critics praised the performances of Duvall and Downey as well as Thomas Newman's score while criticizing the formulaic nature of its script and the lack of development for its supporting characters.");

load_films_list(films_array);
