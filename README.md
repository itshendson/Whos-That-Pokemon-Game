# Who's That Pokemon?
[Link to Application](https://who-s-that-pokemon-2bb45.web.app/)

## Description
Who's That Pokemon is a web application game based on the popular television series Pokemon. In the television series right before commercial break a random Pokemon is shown on screen and viewers are invited to guess which Pokemon it is. This game is a multiple choice version of that. A random Pokemon is shown on the browser with 4 choices. Players must pick the correct choice.

## Technologies
- JavaScript
- React
- JSX
- PokiAPI
- Firebase

## How It Works
Every Pokemon in the Pokemon universe has a unique ID associated with it. For instance, Pikachu is 025, Charmander is 004, and Mew is 151. The application works by generating 4 random Pokemon IDs between 1 and 151. In order to setup the correct image/name options, an API call is made to the PokiAPI service to grab a random Pokemon image. Four more API calls are made to grab four Pokemon names (including one for the correct option and three others for the incorrect options). The Pokemon names are then randomly shuffled using the Sally Yates Shuffle and set to each multiple choice options. If the player picks the correct name for the given image, they score a point.

## Challenges and Unique Elements
The hardest challenge was how to fetch 4 Pokemon names and then randomly set it as one of the multiple choice options that players can pick. There were 3 main ideas on how I would accomplish this:

1. Create a helper function that would fetch API, convert to JSON, grab JSON name, and set state before handing it back to the handleClick function to shuffle and cast to multiple choice.
2. Create a helper function that would fetch API, convert to JSON, grab JSON name, put the results in an array, shuffle array, then set state to the elements of the array, then cast state to multiple choice.
3. Don't use a helper function at all. Just put the fetch directly inside the handleClick, then use a series of .then statements to convert to json, grab name, shuffle, then finally set state for multiple choice.

Ultimately, I chose option 3 because it produced the cleanest and most elegant code. The other 2 options were convoluted and had a larger code base. This took several days to accomplish. I only wish I kept some of the old ideas/code base to see how my code evolved. I had so many questions that required attention to details like should I setState in the helper or main function?

## Conclusion and Future Plans
There were many choices that I had to make in making this seemingly simple game. For instance, how should I populate the multiple choice options for the correct/incorrect guesses? Should I have: 

    1. Made my own JSON file containing all 151 Pokemon images/names/IDs or,
    2. Used the PokiAPI service to populate in the multiple choices
    
There are good reasons to have gone with my own JSON file. If PokiAPI ever shuts down or there is a service interruption, then my application would simply break. However, I ultimately went with the PokiAPI service. Setting up my own JSON file with 151 Pokemon images/names/IDs would have taken way too much time. But perhaps more importantly, although my application only displays the first 151 Pokemon, in reality there are nearly 900 Pokemon with more added each year. For my web application to be robust and account for the fact that more Pokemon may be added in the future, I should be relying on a service, like PokiAPI, to manage all that. My application, as implemented the way it is, would not need to be adjusted in any ways to accomodate for more new Pokemon.

My Future plans are to add expand options for users to select which generation of Pokemon they want included in the game. As I mentioned, although I only included 151 Pokemon (ie. the first generation of Pokemon), there are actually nearly 900 Pokemon spanning eight generations as of this writing. I intend for users to select the generation they wish to appear in my game.

## Other Notes to Remember:
- "setState() does not immediately mutate this.state but creates a pending state transition. Accessing this.state after calling this method can potentially return the existing value. There is no guarantee of synchronous operation of calls to setState and calls may be batched for performance gains."

- Hence, you should pass a callback function as the second paramter of setState. (Don't just put in console.log() as the second parameter, make it a function this.setState({blah blah blah}, function() {console.log("hi")}))

- await can be put in front of any async promise-based function to pause your code on that line until the promise fulfills, then return the resulting value.

- fetch() returns a promise

- Promise.all() returns a single Promise that resolves to an array

