process.on('exit', (code) => {
	console.log("bye");
});


process.emit('exit');
process.emit('exit');

console.log("process on..");

console.log("??");
