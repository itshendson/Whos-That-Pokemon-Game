React, create-react-app, Functional component, class-based component, ES6, Javascript, JSX, CSS, API, PokiAPI, npm, Firebase, fetch ,promise.all, asynchronous programming

Notes:
• "setState() does not immediately mutate this.state but creates a pending state transition. Accessing this.state after calling this method can potentially return the existing value. There is no guarantee of synchronous operation of calls to setState and calls may be batched for performance gains."

• Hence, you should pass a callback function as the second paramter of setState. (Don't just put in console.log() as the second parameter, make it a function this.setState({blah blah blah}, function() {console.log("hi")}))

• An Async function returns a promise. await is always used with the Async function. 

• await can be put in front of any async promise-based function to pause your code on that line until the promise fulfills, then return the resulting value.

• fetch() returns a promise

• Promise.all() returns a single Promise that resolves to an array


HARDEST PROBLEM:
The hardest challenge was how to fetch API and then randomly assign it to the multiple choice options. I tried many different approaches including the 3 listed below before ultimately doing number 3 because it was the cleanest and most elegant code. The other 2 options were convoluted and had a larger code base. This was so incredibly hard and took days to figure out how to do it. I wish I kept some of the old ideas/code base I had just to see the evolution. I had so many questions that required attention to details like would I setState in the helper or main function?

OPTIONS:
1. Create a helper function that would fetch API, convert to JSON, grab JSON name, and set state before handing it back to the handleClick function to shuffle and cast to multiple choice.
2. Create a helper function that would fetch API, convert to JSON, grab JSON name, put the results in an array, shuffle array, then set state to the elements of the array, then cast state to multiple choice.
3. Don't use a helper function at all. Just put the fetch directly inside the handleClick, then use a series of .then statements to convert to json, grab name, shuffle, then finally set state for multiple choice.


Next Problem:
• Create a new module with 4 buttons (Do CSS)
