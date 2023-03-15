//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
  const dog_sentence = dog_string.split(" ")
   for(let i = 0; i < dog_sentence.length; i++){
     for(let j = 0; j < dog_names.length; j++){
       if(i == j){
         return dog_names[j]
       }else {
         return 'No Matches'
       }
     }
    }
}
console.log(findWords())

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let blep = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(){
    for(let i = 0; i < blep.length; i++){
        if (i % 2 == 0){
            blep.splice(i,1,'even index')
        }
    }
    console.log(blep)
}
console.log(replaceEvens([]))


//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


