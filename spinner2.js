const TOTAL = 20;
const chars = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
for(let i = 0; i< TOTAL; i++){
  setTimeout(() => {
    process.stdout.write(`\r ${chars[i % chars.length]}`);
  }, 100 * i);
}
