import 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
    init() {}

    preload() {
        this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
        this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
        centerGameObjects([this.loaderBg, this.loaderBar])

        this.load.setPreloadSprite(this.loaderBar)
            //
            // load your assets
            //
        this.load.atlasXML('ships', 'assets/images/shipsMiscellaneous_sheet.png', 'assets/images/shipsMiscellaneous_sheet.xml')
        this.load.image('tiles_sheet', 'assets/images/tiles_sheet.png')
        this.load.image('mushroom', 'assets/images/mushroom2.png')
        this.load.tilemap('map', 'assets/map.json', null, Phaser.Tilemap.TILED_JSON);
    }

    create() {
        this.state.start('Game')
    }
}