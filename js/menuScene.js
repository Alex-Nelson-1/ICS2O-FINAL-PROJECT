/* Global Phaser */
//
//Created by: Alex Nelson
//Created on: Nov 2022
//This is the Menu Scenes file

/**
 * This class is the Menu scene
 */
class MenuScene extends Phaser.Scene {
  /**
   * Method for constructor
   */
  constructor() {
    super({ key: "menuScene" });

    this.menuSceneBackgroundImage = null;
    this.startButton = null;
  }

  init(data) {
    this.cameras.main.setBackgroundColor("ffffff");
  }
  //Displays "Menu Scene" in the console
  preload() {
    console.log("Menu Scene");
    this.load.image("menuSceneBackground", "./assets/aliens_screen_image2.jpg");
    this.load.image("startButton", "./assets/start.png");
  }
  create(data) {
    //Displays the same background image as title scene
    this.menuSceneBackgroundImage = this.add.sprite(
      0,
      0,
      "menuSceneBackground"
    );
    this.menuSceneBackgroundImage.x = 1920 / 2;
    this.menuSceneBackgroundImage.y = 1080 / 2;

    this.startButton = this.add.sprite(1920 / 2, 1080 / 2 + 100, "startButton");
    this.startButton.setInteractive({ useHandCursor: true });
    this.startButton.on("pointerdown", () => this.clickButton());
  }
  update(time, delta) {
    //pass
  }
  //funtion. When the button is clicked it will start the game scene
  clickButton() {
    this.scene.start("gameScene");
  }
}

export default MenuScene;
