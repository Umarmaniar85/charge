namespace SpriteKind {
    export const Coin = SpriteKind.create()
    export const Flower = SpriteKind.create()
    export const Fireball = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.over(false, effects.splatter)
})
function StartLevel () {
    if (currentlevel == 0) {
        tiles.setTilemap(tilemap`level1`)
    }
    Charge.ay = 350
    scene.cameraFollowSprite(Charge)
    info.setLife(5)
    for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
        Coin = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . f 5 5 5 4 4 5 5 5 5 f . . . 
            . f 5 5 5 4 5 4 5 5 5 5 5 f . . 
            . f 5 5 4 5 5 4 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 4 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 4 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 4 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 4 5 5 5 5 5 f . . 
            . f 5 5 4 4 4 4 4 4 4 5 5 f . . 
            . . f 5 5 5 5 5 5 5 5 5 f . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Coin)
        animation.runImageAnimation(
        Coin,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . f 5 5 5 4 4 5 5 5 5 f . . 
            . . f 5 5 5 4 5 4 5 5 5 5 5 f . 
            . . f 5 5 4 5 5 4 5 5 5 5 5 f . 
            . . f 5 5 5 5 5 4 5 5 5 5 5 f . 
            . . f 5 5 5 5 5 4 5 5 5 5 5 f . 
            . . f 5 5 5 5 5 4 5 5 5 5 5 f . 
            . . f 5 5 5 5 5 4 5 5 5 5 5 f . 
            . . f 5 5 4 4 4 4 4 4 4 5 5 f . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . f 5 5 5 5 5 5 f . . . 
            . . . . f 5 5 4 4 5 5 5 5 f . . 
            . . . f 5 5 4 5 4 5 5 5 5 5 f . 
            . . . f 5 5 5 5 4 5 5 5 5 5 f . 
            . . . f 5 5 5 5 4 5 5 5 5 5 f . 
            . . . f 5 5 5 5 4 5 5 5 5 5 f . 
            . . . f 5 5 5 5 4 5 5 5 5 5 f . 
            . . . f 5 5 5 5 4 5 5 5 5 5 f . 
            . . . f 5 5 4 4 4 4 4 4 5 5 f . 
            . . . . f 5 5 5 5 5 5 5 5 f . . 
            . . . . . f 5 5 5 5 5 5 f . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . f 5 5 4 4 5 5 5 f . . . 
            . . . f 5 5 4 5 4 5 5 5 5 f . . 
            . . . f 5 5 5 5 4 5 5 5 5 f . . 
            . . . f 5 5 5 5 4 5 5 5 5 f . . 
            . . . f 5 5 5 5 4 5 5 5 5 f . . 
            . . . f 5 5 5 5 4 5 5 5 5 f . . 
            . . . f 5 5 5 5 4 5 5 5 5 f . . 
            . . . f 5 5 4 4 4 4 4 5 5 f . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . f 5 5 5 5 f . . . . 
            . . . . . f 5 4 4 5 5 5 f . . . 
            . . . . f 5 5 5 4 5 5 5 5 f . . 
            . . . . f 5 5 5 4 5 5 5 5 f . . 
            . . . . f 5 5 5 4 5 5 5 5 f . . 
            . . . . f 5 5 5 4 5 5 5 5 f . . 
            . . . . f 5 5 5 4 5 5 5 5 f . . 
            . . . . f 5 5 5 4 5 5 5 5 f . . 
            . . . . f 5 5 4 4 4 4 5 5 f . . 
            . . . . . f 5 5 5 5 5 5 f . . . 
            . . . . . . f 5 5 5 5 f . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . f 5 4 4 5 5 f . . . . 
            . . . . f 5 5 5 4 5 5 5 f . . . 
            . . . . f 5 5 5 4 5 5 5 f . . . 
            . . . . f 5 5 5 4 5 5 5 f . . . 
            . . . . f 5 5 5 4 5 5 5 f . . . 
            . . . . f 5 5 5 4 5 5 5 f . . . 
            . . . . f 5 5 5 4 5 5 5 f . . . 
            . . . . f 5 5 4 4 4 5 5 f . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . f 5 5 f . . . . . 
            . . . . . . f 5 4 5 5 f . . . . 
            . . . . . f 5 5 4 5 5 5 f . . . 
            . . . . . f 5 5 4 5 5 5 f . . . 
            . . . . . f 5 5 4 5 5 5 f . . . 
            . . . . . f 5 5 4 5 5 5 f . . . 
            . . . . . f 5 5 4 5 5 5 f . . . 
            . . . . . f 5 5 4 5 5 5 f . . . 
            . . . . . f 5 5 4 4 5 5 f . . . 
            . . . . . . f 5 5 5 5 f . . . . 
            . . . . . . . f 5 5 f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . f 5 5 4 5 5 f . . . . 
            . . . . . f 5 5 4 5 5 f . . . . 
            . . . . . f 5 5 4 5 5 f . . . . 
            . . . . . f 5 5 4 5 5 f . . . . 
            . . . . . f 5 5 4 5 5 f . . . . 
            . . . . . f 5 5 4 5 5 f . . . . 
            . . . . . f 5 5 4 5 5 f . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 4 5 f . . . . . 
            . . . . . . f 5 4 5 5 f . . . . 
            . . . . . . f 5 4 5 5 f . . . . 
            . . . . . . f 5 4 5 5 f . . . . 
            . . . . . . f 5 4 5 5 f . . . . 
            . . . . . . f 5 4 5 5 f . . . . 
            . . . . . . f 5 4 5 5 f . . . . 
            . . . . . . f 5 4 5 5 f . . . . 
            . . . . . . . f 5 5 f . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 4 f . . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 4 5 f . . . . . 
            . . . . . . f 5 4 5 5 f . . . . 
            . . . . . . f 5 4 5 5 f . . . . 
            . . . . . . f 5 4 5 5 f . . . . 
            . . . . . . f 5 4 5 5 f . . . . 
            . . . . . . f 5 4 5 5 f . . . . 
            . . . . . . f 5 4 5 5 f . . . . 
            . . . . . . f 5 4 5 5 f . . . . 
            . . . . . . . f 5 5 f . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . f 5 5 5 5 5 5 f . . . 
            . . . . f 5 5 4 4 5 5 5 5 f . . 
            . . . f 5 5 4 5 4 5 5 5 5 5 f . 
            . . . f 5 5 5 5 4 5 5 5 5 5 f . 
            . . . f 5 5 5 5 4 5 5 5 5 5 f . 
            . . . f 5 5 5 5 4 5 5 5 5 5 f . 
            . . . f 5 5 5 5 4 5 5 5 5 5 f . 
            . . . f 5 5 5 5 4 5 5 5 5 5 f . 
            . . . f 5 5 4 4 4 4 4 4 5 5 f . 
            . . . . f 5 5 5 5 5 5 5 5 f . . 
            . . . . . f 5 5 5 5 5 5 f . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 4 f . . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . f 5 5 4 5 5 f . . . . 
            . . . . . f 5 5 4 5 5 f . . . . 
            . . . . . f 5 5 4 5 5 f . . . . 
            . . . . . f 5 5 4 5 5 f . . . . 
            . . . . . f 5 5 4 5 5 f . . . . 
            . . . . . f 5 5 4 5 5 f . . . . 
            . . . . . f 5 5 4 5 5 f . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . f 5 5 f . . . . . 
            . . . . . . f 5 4 5 5 f . . . . 
            . . . . . f 5 5 4 5 5 5 f . . . 
            . . . . . f 5 5 4 5 5 5 f . . . 
            . . . . . f 5 5 4 5 5 5 f . . . 
            . . . . . f 5 5 4 5 5 5 f . . . 
            . . . . . f 5 5 4 5 5 5 f . . . 
            . . . . . f 5 5 4 5 5 5 f . . . 
            . . . . . f 5 5 4 4 5 5 f . . . 
            . . . . . . f 5 5 5 5 f . . . . 
            . . . . . . . f 5 5 f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . f 5 4 4 5 5 f . . . . 
            . . . . f 5 5 5 4 5 5 5 f . . . 
            . . . . f 5 5 5 4 5 5 5 f . . . 
            . . . . f 5 5 5 4 5 5 5 f . . . 
            . . . . f 5 5 5 4 5 5 5 f . . . 
            . . . . f 5 5 5 4 5 5 5 f . . . 
            . . . . f 5 5 5 4 5 5 5 f . . . 
            . . . . f 5 5 4 4 4 5 5 f . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        90,
        true
        )
        tiles.placeOnTile(Coin, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
            Flower = sprites.create(img`
                . . . . . . . c c . . . . . . . 
                . . . . c c c 6 5 c 6 6 . . . . 
                . . . . c 6 c 5 5 c 7 6 . . . . 
                . . . 6 c c 7 5 5 7 c 6 6 . . . 
                . . c c 7 7 7 7 7 5 7 7 c 6 . . 
                . 6 6 6 c 6 7 7 7 7 6 c c 6 6 . 
                c 7 7 7 6 c 7 c 6 7 6 7 7 7 7 6 
                c c c 6 6 6 c 6 6 6 6 7 7 6 6 6 
                . c c 7 6 6 6 6 6 7 7 7 7 c 6 . 
                . c 7 7 6 6 7 6 6 7 7 6 7 7 c . 
                . c c c c 7 7 6 f 7 7 c c c c . 
                . . . . c 7 c f f c 7 c . . . . 
                . . . . . 6 f e e e c . . . . . 
                . . . . . e e e e e e . . . . . 
                . . . . e e . e e . e e . . . . 
                . . . . . . . e e . . . . . . . 
                `, SpriteKind.Flower)
            tiles.placeOnTile(Flower, value)
            tiles.setTileAt(value, assets.tile`transparency16`)
            for (let value of tiles.getTilesByType(assets.tile`myTile9`)) {
                Fireball = sprites.create(img`
                    . . . . 2 2 2 2 2 2 2 . . . . . 
                    . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
                    . 2 2 2 2 2 2 2 2 2 2 4 2 2 . . 
                    . 2 2 2 2 2 2 2 2 2 4 2 4 2 . . 
                    2 2 2 2 2 2 2 2 2 4 2 4 2 2 2 . 
                    2 2 2 2 2 2 2 2 2 2 4 2 2 2 2 . 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
                    . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
                    . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
                    . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
                    . . . . 2 2 2 2 2 2 2 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Fireball)
                tiles.placeOnTile(Fireball, value)
                tiles.setTileAt(value, assets.tile`transparency16`)
                animation.runMovementAnimation(
                Fireball,
                "c 0 -100 0 100 0 0",
                2000,
                true
                )
                Fireball.startEffect(effects.fire)
            }
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.fountain, 500)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Charge.vy == 0) {
        Charge.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.over(true, effects.starField)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Flower, function (sprite, otherSprite) {
    otherSprite.destroy(effects.trail, 500)
    Bee = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    Bee,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f . . . . . 
        . . . f 1 1 1 1 1 1 f . . . . . 
        . . . f 1 1 1 1 1 1 f . . . . . 
        . . . f f f f f f f f . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 5 5 f f 5 5 f . . . . . 
        . . . f f 5 f f 5 f f . . . . . 
        . . . f 5 5 f f 5 5 f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 5 5 f f 5 5 f . . . . . 
        . . . f f 5 f f 5 f f . . . . . 
        . . . f 5 5 f f 5 5 f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    Bee.setPosition(Charge.x + 80, Charge.y - 80)
    Bee.follow(Charge)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Fireball, function (sprite, otherSprite) {
    info.changeLifeBy(-2)
    otherSprite.destroy(effects.ashes, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (Charge.y < otherSprite.y) {
        info.changeScoreBy(3)
    } else {
        info.changeLifeBy(-1)
    }
})
let Bee: Sprite = null
let Fireball: Sprite = null
let Flower: Sprite = null
let Coin: Sprite = null
let Charge: Sprite = null
let currentlevel = 0
effects.blizzard.startScreenEffect()
scene.setBackgroundColor(9)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999111199999999999999999999999999999999999999999999999999999999999999999999999999999911119999999999999999999999999999999999999999999999999999
    9999999999999999999991111119999999999999999999999999999999999999999999999999999999999999999999999999999111111999999999999999999999999999999999999999999999999999
    9999999999999999999991111119911999999999999999999999999999999999999999999999999999999999999999999999999111111991199999999999999999999999999999999999999999999999
    9999999999999999991111111119111119999999999999999999999999999999999999999999999999999999999999999999111111111911111999999999999999999999999999999999999999999999
    9999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111111999999999999999999999999999999999999999999999
    9999999999999999111111111111111111199999999999999999999999999999999999999999999999999999999999999911111111111111111119999999999999999999999999999999999999999999
    9999999999999999111111111111111111119999999999999999999999999999999999999999999999999999999999999911111111111111111111999999999999999999999999999999999999999999
    9999999999999999911111111111111111119991199999999999999999999999999999999999999999999999999999999991111111111111111111999119999999999999999999999999999999999999
    9999999999999111191111111111111111119911111999999999999999999999999999999999999999999999999999911119111111111111111111991111199999999999999999999999999999999999
    9999999999991111119111111111111111199911111999999999999999999999999999999999999999999999999999111111911111111111111119991111199999999999999999999999999999999999
    9999999999991111111111111111111111911111111199999999999999999999999999999999999999999999999999111111111111111111111191111111119999999999999999999999999999999999
    9999999999991111111111111111111111111111111199999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999
    9999999999999111111111111111111111111111111199999999999999999999999999999999999999999999999999911111111111111111111111111111119999999999999999999999999999999999
    9911199991111911111111111111111111111111111991199999999999991111999999999999999999991119999111191111111111111111111111111111199119999999999999111199999999999999
    9111119911111111111111111111111111111111111911119999999999911111199999999999999999911111991111111111111111111111111111111111191111999999999991111119999999999999
    9111119111111111111111111111111111111111111911119999999999911111191119999999999999911111911111111111111111111111111111111111191111999999999991111119111999999999
    9911111111111111111111111111111111111111111111119999999999999111111111999999999999991111111111111111111111111111111111111111111111999999999999911111111199999999
    9111111111111111111111111111111111111111111111199999999911119111111111999999999999911111111111111111111111111111111111111111111119999999991111911111111199999999
    1111111111111111111111111111111111111111111111119999999111111111111119999999999199111111111dd1111111111111111111111111111111111111999999911111111111111999999999
    1111111111111111111111111111111111111111111111111911199111111111111111111999999ddd111111111ddd111111111111111111111111111111111111191119911111111111111111199999
    1111111111111111111111111111111111111111111111111111111111111111111111111199991ddd111111111ddd111111111111111111111111111111111111111111111111111111111111119999
    11111111111111111111111111111111111111111111111111111111111111111111111111999ddddddd111111ddddd11111111111111111111111111111111111111111111111111111111111119999
    11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
    11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
    1111111111111111111ddd1111111111111111111d11dddddd111111111111111111111111111d11dddd11111ddddddd11111111111111111111dd1111111111111111111dd1d1ddddd1111111111111
    111111111111111111ddddd111111111111111111ddddddd1d111111111111111111111111111ddddddd11111ddddddd1111111111111111111dddd111111111111111111dddddd11dd1111111111111
    11111111111111111dddddd111111111111111111ddddddddd1111111111d11111111ddddd111d1ddddd11111ddddddd11111111111111111dddddd111111111111111111dddddddddd1111111111111
    11111111111111111ddd1d111111d111111111111ddddddddd111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111ddd1d111111dd11111111111dddd1ddddd11111111dd111
    11111111111111111dddddd11111d111111111111ddddddd1d111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111dddddd11111dd11111111111ddddddd1dd11111111dd111
    11111111ddd111111dd11d11111ddd11111111111ddddddddd11dddddd1dd11111111ddddd111ddddddd11111ddddddd111111111dd111111ddd1d11111ddd11111111111dddddddddd1ddddddddd111
    d1dd1111ddddddddddd1ddd111ddddd1111111111ddddddd1d11d11ddd1dd111111111dd1dd11ddddddd111dddddddddd1dd1111ddddddddddddd1d1111dddd1111111111dddddd11dd1d11dddddd111
    dddd11111d1dd1ddddddddd111ddddd1111111111ddddddddd11dddd1d1dd11111111dddddd11dd1dddd111ddddddddddddd1111dd1ddd1dddddddd1111dddd1111111111dddddddddd1dddd1dddd111
    dd1d11111ddd1111ddddddd111ddddd1111111111ddddddddd11dddd1dddd11111111dddddd11ddddddd111ddddddddddd1d1111dddd1d11ddddddd1111dddd1111111111dddddddddd1dddd1dddd111
    dddd1111dddddddddddddddd11dddddd11dd1dd1ddddddddddd1d11dddddd11111111dddddd11ddddddd111ddddddddddddd1111dddddddddddddddd11dddddd111d11ddddddddddddd1d11dddddd111
    dd1d1111dddddddddddddddd11dddddd11ddddddddddddddddd1ddddddddd11d11d11dddddd11ddddddd111ddddddddddd1d1111dddddddddddddddd11dddddd111dddddddddddddddd1ddddddddd111
    ddddd1dd1d1ddddddddddddd11ddddddd1dddd11ddddddddddddd11bbddddddd1ddd11dd1dd11ddddddd111ddddddddddddddd1ddd1ddddddddddddd11ddddddd111d11ddddddbddddddd11bbbddd1dd
    ddddd1dddddddddddddddddddd1dddddd1dddddddddbbbdddddddddbbbdddddd1ddd1dddddd11ddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbddd1dd
    ddddd1ddddddddddddddddddddddddddd1dddddddddbbbdddddddddbbbdddddddddddddddddddddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbdddddd
    ddddd1ddddddddddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddd1dddddddddddddddddddddddddd1d1ddddddbbbbbbbdddddbbbbbddddd
    dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
    dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
    dddddbddbbbbbbddddddddddddddddddd1dddddddbddbbbbdddddbbbbbbbdd111dddddddddddddddbbdddd1ddddddddddddddbbdbdbbbbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbb11d
    dddddbbbbbbbdbddddddddddddddddddd1dddddddbbbbbbbdddddbbbbbbbddd11ddddddddddddddbbbbddd1ddddddddddddddbbbbbbddbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbbddd
    dddddbbbbbbbbbddddddddddbddddddddbbbbbdddbdbbbbbdddddbbbbbbbddddddddddd1dddddbbbbbbddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddddbbbbddddbbbdbbbddddbbbbbbbbddd
    dddddbbbbbbbbbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd1ddddddddddddddbbbdbddddddbbdddddddddddbbbbdbbbbbddddddddbbdddddddddbbbbddddbbbdbbbddddbbbbbbbbd1d
    dddddbbbbbbbdbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd111ddddddddddddbbbbbbdddddbbdddddddddddbbbbbbbdbbddddddddbbddddddddbbbbbbdddbbbbbbbddddbbbbbbbb11d
    dddddbbbbbbbbbddbbbbbbdbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdddddddddbb1dddddbbbdbdddddbbbdddddddddddbbbbbbbbbbdbbbbbbbbbddddddddbbbbbbdddbbbdbbbddddbbbbbbbbddd
    dddddbbbbbbbdbddbddbbbdbbdddddddddbbdbbddbbbbbbbdddbbbbbbbbbbdbbddddbbbbbbbbbbbbbdbddddbbbbddddddddddbbbbbbddbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
    dddddbbbbbbbbbddbbbbdbdbbddddddddbbbbbbddbbdbbbbdddbbbbbbbbbbbbbddddbbdbbbdbbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
    dddddbbbbbbbbbddbbbbdbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbdbddbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
    dbbdbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbddbbbbbbdddbddbbbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbdbbbbbbbbbddbddbddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbbbbbbbbbbbbbddbbbbbbdddbbbbbbbbbbbbbbbbdbbbbbbbbbdddddbddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
    bbddbbbbbbbbbbbbbddddbbbbbbbdbbbddbbdbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbdbbbbbbbbbbbbbddbbbbbbbdddbddbbbbbbbbbbbbbbddbdbbbbdbbdbbbdbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbbbbbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbdbbbbbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbb
    bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7
    bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77
    bb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777b
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
currentlevel = 0
Charge = sprites.create(img`
    .....................
    .....................
    .....................
    ..88888888888888888..
    ..8ddddddd8ddddddd8..
    ..8d11111d8d11111d8..
    ..8d11111d8d11111d8..
    ..8d11111d8d11111d8..
    ..8ddddddd8ddddddd8..
    888888888888888888888
    228.....88888.....855
    228.....88888.....855
    888.fff.88888.fff.888
    ..8.f1f.88888.f1f.8..
    ....fff.......fff....
    .....................
    `, SpriteKind.Player)
controller.moveSprite(Charge, 100, 0)
StartLevel()
game.onUpdate(function () {
    Charge.setImage(img`
        .....................
        .....................
        .....................
        ..88888888888888888..
        ..8ddddddd8ddddddd8..
        ..8d11111d8d11111d8..
        ..8d11111d8d11111d8..
        ..8d11111d8d11111d8..
        ..8ddddddd8ddddddd8..
        888888888888888888888
        228.....88888.....855
        228.....88888.....855
        888.fff.88888.fff.888
        ..8.f1f.88888.f1f.8..
        ....fff.......fff....
        .....................
        `)
    if (Charge.vy < 0) {
        Charge.setImage(img`
            ....................
            ....................
            ......8888888888....
            .888888fddddddf8....
            .844448fd1111df8....
            .844448fd1111df8888.
            .844448fddddddf8228.
            .8488888888888882288
            .848...8778....82228
            .848...8778....82228
            .888fff8888ffff88888
            ....f5f....f55f.....
            ....fff....ffff.....
            ....................
            ....................
            ....................
            `)
    } else if (Charge.x % 2 == 0) {
        Charge.setImage(img`
            .....................
            .....................
            .....................
            ..88888888888888888..
            ..8ddddddd8ddddddd8..
            ..8d11111d8d11111d8..
            ..8d11111d8d11111d8..
            ..8d11111d8d11111d8..
            ..8ddddddd8ddddddd8..
            888888888888888888888
            228.....88888.....855
            228.....88888.....855
            888..f..88888..f..888
            ..8.f1f.88888.f1f.8..
            .....f.........f.....
            .....................
            `)
    }
    if (Charge.vx < 0) {
        Charge.image.flipX()
    }
})
