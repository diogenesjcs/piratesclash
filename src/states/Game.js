/* globals __DEV__ */
import 'phaser'
import Mushroom from '../sprites/Mushroom'
import Sea from '../sprites/Sea'
import Ship from '../sprites/Ship'

export default class extends Phaser.State {
    init() {}
    preload() {}

    create() {
        // const bannerText = 'Phaser + ES6 + Webpack'
        // let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText, {
        //   font: '40px Bangers',
        //   fill: '#77BFA3',
        //   smoothed: false
        // })

        // banner.padding.set(10, 16)
        // banner.anchor.setTo(0.5)

        this.game.physics.startSystem(Phaser.Physics.P2JS);

        this.sea = new Sea({
            game: this.game,
            asset: 'tiles_sheet'
        })




        this.layerSea = this.sea.map.createLayer('sea');
        this.layerLand = this.sea.map.createLayer('land');

        this.layerLand.resizeWorld();
        this.layerSea.resizeWorld();
        this.cursors = game.input.keyboard.createCursorKeys()
        this.ship = new Ship({
            game: this.game,
            asset: 'ships',
            x: this.world.centerX,
            y: this.world.centerY,
            index: 92,
            cursors: this.cursors
        })


        this.enemy = new Ship({
            game: this.game,
            asset: 'ships',
            x: this.world.centerX + 100,
            y: this.world.centerY,
            index: 90,
            cursors: this.cursors
        })



        this.game.add.existing(this.ship)
        this.game.add.existing(this.enemy)
        this.game.physics.p2.convertTilemap(this.sea.map, this.layerLand);

        //this.layerLand.debug = true;
        //this.layerSea.debug = true;

    }
    update() {

    }

    render() {
        if (__DEV__) {
            this.game.debug.spriteInfo(this.ship, 64, 64)
            this.game.debug.body(this.ship);
            this.game.debug.bodyInfo(this.ship)
        }
    }
}