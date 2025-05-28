const args = process.argv.slice(2);

if (args.length === 0) { 
console.log("No argument");
} else if (args.length === 1){
    console.log("Argument found");
} else {
    console.log("Arguments found");
}
// alternate to using .length is if (args[0] === undefined) {
 // console.log("No argument");
//} else {
 // console.log(args[0]);