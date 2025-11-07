// T### *ask: Movie Ratings Manager*
// *Step 1: Create an array*
// Create an array of at least 5 movie objects. Each object should have:
// jsx
// {
//   title: "Movie Name",
//   rating: number (1-10),
//   year: number
// }
// *Step 2: Array Methods*
// 1. *Sort* movies by rating (highest to lowest) using a comparing function.
// 2. *Filter* movies with a rating greater than 7.
// 3. *Map* to get an array of movie titles only.
// 4. *Reduce* to calculate the average rating.
// 5. Use *forEach* to print a formatted string for each movie, e.g., "Movie: Avengers, Rating: 9, Year: 2019".
// *Step 3: Loops*
// - Use *for…in* to list each property of the first movie object.
// - Use *for…of* to iterate through the array and log the title of each movie.
// *Step 4: Functions*
// 1. Write a *function declaration* addMovie(movie) that adds a new movie to the array.
// 2. The function should *return* the new total number of movies.
// 3. Demonstrate calling the function with *parameters* (new movie object) and log the *argument* values.

let MovieName=[
        {title:"Drishyam",rating:8,year:2013,},
        {title:"Bangalore Days",rating:6,year:2013,},
        {title:"Premam",rating:9,year:2014,},
        {title:"Kumbalangi Nights",rating:8,year:2020,},
        {title:"Lucifer",rating:10,year:2017,},
        {title:"Charlie ",rating:7,year:2013,},
        {title:"Maheshinte Prathikaaram",rating:6,year:2019,},
        {title:"Uyare",rating:8,year:201,},
        {title:"Ee. Ma. Yau",rating:5,year:2018,},
        {title:"Thondimuthalum Driksakshiyum",rating:4,year:2016,},
        
    ]
// 1.
    let sortTheRating=MovieName.sort((a,b)=>b.rating-a.rating)
    console.log(sortTheRating)

// 2.
    let graterThan7=MovieName.filter((a)=>a.rating>7)
    console.log(graterThan7);

 // 3.
 let title2=MovieName.map(a=>a.title)
 console.log(title2)

//  4.

let averageRating=MovieName.reduce((a,b)=>a+b.rating,0)/MovieName.length
console.log(averageRating)

// 5. 
MovieName.forEach(a =>{
    console.log(`Movie:${a.title} Rating: ${a.rating} Year: ${a.year}`)
})
// 6.

let firstMovie=[]
for (x in MovieName){

    
}


    

