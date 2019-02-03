class Clock{
	constructor(){
		let date = new Date();
	  this.hours = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
	  this.minutes = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
	  this.seconds = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds();
	};
}