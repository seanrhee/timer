// Implement an alarm clock / timer which will beep after a specified amount of time has passed.
// The user can specify an unlimited number of alarms using command line arguments

const argArray = process.argv.slice(2);


const timer = function(args) {
  if (args.length === 0) {
    console.log("No time specified.");
    return;
  }
  
  for (const arg of args) {
    if (Number.isInteger(Number(arg))){
      if (Number(arg) < 0) {
        continue;
      }
      setTimeout(() => {
        process.stdout.write('\x07');
      }, Number(arg) * 1000)
    }
  };
};

// timer(argArray);