enchant();

window.onload = function () {
  var game = new Game(320, 320);
  game.onload = function () {
    var scene = new Scene();
    game.pushScene(scene);
    // node を追加する例
    scene.addChild(sprite);
  };
  game.start();
};
