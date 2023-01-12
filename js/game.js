/* Global Phaser */
//
//Created by: Alex Nelson
//Created on: Nov 2022
//This is the phaser 3 configuration file

//Import Scenes
import SplashScene from "./splashScene.js";
import TitleScene from "./titleScene.js";
import MenuScene from "./menuScene.js";
import GameScene from "./gameScene.js";

//Game Scenes
const splashScene = new SplashScene();
const titleScene = new TitleScene();
const menuScene = new MenuScene();
const gameScene = new GameScene();

//Configure Game / Start Game
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
  //set background color
  backgroundColor: 0x5f6e7a,
  //Places background in the middle
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};
const game = new Phaser.Game(config);
//console.log(game)

//load scenes
//Note: Any 'key' cannot be reused
game.scene.add("splashScene", splashScene);
game.scene.add("titleScene", titleScene);
game.scene.add("menuScene", menuScene);
game.scene.add("gameScene", gameScene);

//Start scene
game.scene.start("splashScene");
