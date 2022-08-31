// Implement an alarm clock / timer which will beep after a specified amount of time has passed.
// The user can specify an unlimited number of alarms using command line arguments

// take process.argv into an array
const argArray = process.argv.slice(2);

// function declared
const timer = function(args) {
  // if no input on argv, exit
  if (args.length === 0) {
    console.log("No time specified.");
    return;
  }
  
  // loop through array
  for (const arg of args) {
    // check for int
    if (Number.isInteger(Number(arg))){
      // if it's negative, continue loop
      if (Number(arg) < 0) {
        continue;
      }
      // otherwise, set delay for alarm
      setTimeout(() => {
        process.stdout.write('\x07');
      }, Number(arg) * 1000)
    }
  };
};

// timer(argArray);