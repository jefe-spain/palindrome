/*
 * Execute an array of asynchronous functions one after the other in sequence using callbacks.
 * The asynchronous function can be simulated using setTimeout which executes the callback
 *
 * Extra Points will be given if we use Promises, Async/Await syntax
 * The array of functions execution can be managed
 * by having a function which takes care of execution of all the async functions.
 * Asynchronous functions need not be aware of the function to be executed 
 * and will take a callback as argument and execute it after completion
*/

const fn1 = () => {}
const fn2 = () => {}
const fn3 = () => {}

const asyncManager = (asynFunctions) => {}
asyncManager([ fn1, fn2, fn3 ])
