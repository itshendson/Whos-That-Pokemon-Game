# Who's That Pokemon?
[Link to Application](https://who-s-that-pokemon-2bb45.web.app/)

## Description
Who's That Pokemon is a web application game based on the popular television series Pokemon. In the television series right before commercial break a random Pokemon is shown on screen and viewers are invited to guess which Pokemon it is. This game is a multiple choice version of that. A random Pokemon is shown on the browser with 4 choices. Only one of the guess is correct.

## Technologies
- JavaScript
- React
- JSX
- PokiAPI
- Firebase

## How It Works


## Challenges and Unique Elements
The hardest challenge was how to fetch 4 Pokemon names and then randomly set it as one of the multiple choice options that users can pick. There were 3 main ideas on how I would accomplish this:

1. Create a helper function that would fetch API, convert to JSON, grab JSON name, and set state before handing it back to the handleClick function to shuffle and cast to multiple choice.
2. Create a helper function that would fetch API, convert to JSON, grab JSON name, put the results in an array, shuffle array, then set state to the elements of the array, then cast state to multiple choice.
3. Don't use a helper function at all. Just put the fetch directly inside the handleClick, then use a series of .then statements to convert to json, grab name, shuffle, then finally set state for multiple choice.

Ultimately, I chose option 3 because it produced the cleanest and most elegant code. The other 2 options were convoluted and had a larger code base. This took several days to accomplish. I only wish I kept some of the old ideas/code base to see how my code evolved. I had so many questions that required attention to details like would I setState in the helper or main function?

## Other Notes to Remember:
- "setState() does not immediately mutate this.state but creates a pending state transition. Accessing this.state after calling this method can potentially return the existing value. There is no guarantee of synchronous operation of calls to setState and calls may be batched for performance gains."

- Hence, you should pass a callback function as the second paramter of setState. (Don't just put in console.log() as the second parameter, make it a function this.setState({blah blah blah}, function() {console.log("hi")}))

- await can be put in front of any async promise-based function to pause your code on that line until the promise fulfills, then return the resulting value.

- fetch() returns a promise

- Promise.all() returns a single Promise that resolves to an array

