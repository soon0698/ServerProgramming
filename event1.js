const exitHandler = (code) => {
	console.log("process will be exit");
};

const exceptionHandle = (err) => {
	console.log("exception");
};

var count = 0;

const timeOut = () => {
	count = count + 1;
	console.log("count : " +  count);
	if(count > 5) { return; }
	setTimeout(timeOut, 1000);
	error.error.error();
};

process.on('exit', exitHandler);
process.on('uncaughtException', exceptionHandle);
setTimeout(timeOut, 1000);
