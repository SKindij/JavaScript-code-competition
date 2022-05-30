// Let's imagine that we want to write a flashlight application.
// It will have two states: on and off. It will also have day and night light buttons.
// In the model, we will hold the state of the flashlight.
const flashLightModel = {
  isOn: false, // When the user turns on the flashlight, this field should be set to true.
  color: "blue", // This field contains the color of the flashlight.
};

// The controller accepts commands from the user and transforms the data into models according to those commands.
const flashLightController1 = {
  toggle() {
    flashLightModel.isOn = !flashLightModel.isOn;
  },
};

// we can switch color with special buttons
const flashLightController2 = {
  selectColor(e) {
    const buttonName = e.target.name;
      const buttonColors = {
        daylight: "blue",
        nightlight: "yellow",
      };
    const preferredColor = buttonColors[buttonName];
    flashLightModel.color = preferredColor;
  },
};










