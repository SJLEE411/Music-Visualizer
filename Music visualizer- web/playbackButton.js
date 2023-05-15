//displays and handles clicks on the playback button.
function PlaybackButton(){
	
	this.x = 20;
	this.y = 20;
	this.width = 20;
	this.height = 20;

	//flag to determine whether to play or pause after button click and
	//to determine which icon to draw
	this.playing = false;

	this.draw = function(playbackButton){
		if(this.playing){
			rect(this.x, this.y, this.width/2 - 2, this.height);
			rect(this.x + (this.width/2 + 2), this.y, this.width/2 - 2, this.height);
		}
		else{	
			triangle(this.x, this.y, this.x + this.width, this.y + this.height/2, this.x, this.y+this.height);

		}
	};

	//checks for clicks on the button, starts or pauses playabck.
	//@returns true if clicked false otherwise.
	this.hitCheck = function(){
		if(mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height){
			if (sound.isPlaying()) {
    			sound.pause();
  			} else {
    			sound.loop();
  			}
  			this.playing = !this.playing;
  			return true;
		}
			return false;
	};

}

//#### Playback and fullscreen [2 marks]

//In the `ControlsAndInput` constructor function (in the
//controlsAndInput.js file) complete `this.mousePressed()`.

//- Using the `playbackButton` object check if the mouse click is on the
//  play button (check out the `PlaybackButton` constructor function and
//  find the method which does this). When you have called this method
//  clicking the playback button should start the music and display a
//  visualisation.
//- If the click isn’t on the playback button toggle the display between
// window and fullscreen (check out the p5.js documentation on how to
//do this.)

//Music Vismaster template was already having a features on play back button and full screen mode