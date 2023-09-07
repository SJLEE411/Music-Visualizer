# Audio Visualizer

## Overview

This project is a simple music visualization program that contains three separate visualizations. It utilizes p5.js and the Fast Fourier Transform (FFT) object to transform sound into visual representations.

## Getting Started

To get started with this project, follow these steps:

1. Download the music visualizer project template from the provided link.

2. Review the code and project structure to familiarize yourself with the components.

3. Ensure you have the necessary dependencies installed, including p5.js.

## Features

### Playback and Fullscreen

In the `ControlsAndInput` constructor function (in the `controlsAndInput.js` file), we have a task to complete the `this.mousePressed()` method:

- Clicking the playback button (`playbackButton`) will start the music and display a visualization.

- If the click isn't on the playback button, it will toggle the display between windowed and fullscreen modes.

### Visualization Menu

In the `ControlsAndInput` constructor function, there's a task to complete `this.menu()`:

- This function will iterate over the array stored in the `visuals` property of the `Visualisations` object, displaying each visualization's name on the screen.

### Spectrum Analyzer

To modify the Spectrum Analyzer:

- The visualizations should be horizontal instead of vertical, with bars emerging from the left-hand side of the screen.

- The color of each bar should change gradually from green to red based on the amplitude value. For example, at an amplitude value of 0, the color values are R:0, G:255, B:0, and at an amplitude value of 255, the color values are R:255, G:0, B:0.

### Needle Plots

The `Needles` constructor function displays volume values for 4 frequency bands: bass, mid-low, mid-high, and treble.

- Complete the nested for loop in the `this.draw()` function to assign values to `x`, `y`, `w`, and `h` variables for the plot's location and size.

- Call the `this.ticks(centreX, bottomY, freqLabel)` function on line 49 with the correct arguments to add ticks to the graph.

- Call the `this.needle(energy, centreX, bottomY)` function on line 54 with the correct parameters to draw the needle plots.

## How to Use

To use this audio visualizer, follow these steps:

1. Run the application.

2. Use the playback button to start the music and display visualizations.

3. Press the space bar to access the visualization menu.

4. Enjoy the visual representations of the audio.

## Credits

This project is based on p5.js and utilizes the Fast Fourier Transform object for audio visualization.


## Contact

For any questions or feedback, please contact the project developer:

- Name: Sangjune Lee
- Email: csjune411@gmail.com

Feel free to reach out with any inquiries or suggestions.
