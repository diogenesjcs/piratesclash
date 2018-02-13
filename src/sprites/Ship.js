import 'phaser'
import { constrainVelocity } from '../utils'
export default class extends Phaser.Sprite {
    constructor({ game, x, y, asset, index, cursors }) {
        super(game, x, y, asset, index)
        this.anchor.setTo(0.5, 0.5)
        this.scale.setTo(-1, -1)

        this.game.physics.p2.enable(this);
        this.body.setRectangle(50, 100)
        this.cursors = cursors;
        this.body.debug = true;
        this.body.damping = 0.5;
        this.body.angularDamping = 0.9;
        constrainVelocity(this, 200)

        this.key = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.key.onDown.add(() => {
            console.log(this.body.x, this.body.y);
        }, game);
    }

    update() {
        if (this.cursors.left.isDown) {
            this.body.rotateLeft(10)
        } else if (this.cursors.right.isDown) {
            this.body.rotateRight(10)
        }

        if (this.cursors.up.isDown) {
            this.body.thrust(100);
        }

    }
}