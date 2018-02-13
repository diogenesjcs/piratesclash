import 'phaser'

export default class {
    constructor({ game, asset }) {
        this.map = game.add.tilemap('map')
        this.tileset = this.map.addTilesetImage('tiles_sheet', asset, 64, 64)
        this.map.setCollisionBetween(1, 96);
    }
}