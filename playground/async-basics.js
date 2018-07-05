console.log('Starting app');

setTimeout(()=>{
	console.log("Waited");
}, 2000);

setTimeout(()=>{
	console.log("No timeout");
},0);
console.log('Ending up');