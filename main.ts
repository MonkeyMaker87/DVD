controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . 2 f f 2 2 f 2 2 2 f 2 f f 2 2 
        . 2 f 2 f 2 f 2 2 2 f 2 f 2 f 2 
        . 2 f 2 f 2 2 f 2 f 2 2 f 2 f 2 
        . 2 f 2 f 2 2 f 2 f 2 2 f 2 f 2 
        . 2 f 2 f 2 2 f 2 f 2 2 f 2 f 2 
        . 2 f f 2 2 2 2 f 2 2 2 f f 2 2 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, randint(-100, 100), randint(-100, 100))
    animation.runImageAnimation(
    projectile,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        . 3 f f 3 3 f 3 3 3 f 3 f f 3 3 
        . 3 f 3 f 3 f 3 3 3 f 3 f 3 f 3 
        . 3 f 3 f 3 3 f 3 f 3 3 f 3 f 3 
        . 3 f 3 f 3 3 f 3 f 3 3 f 3 f 3 
        . 3 f 3 f 3 3 f 3 f 3 3 f 3 f 3 
        . 3 f f 3 3 3 3 f 3 3 3 f f 3 3 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        . 8 f f 8 8 f 8 8 8 f 8 f f 8 8 
        . 8 f 8 f 8 f 8 8 8 f 8 f 8 f 8 
        . 8 f 8 f 8 8 f 8 f 8 8 f 8 f 8 
        . 8 f 8 f 8 8 f 8 f 8 8 f 8 f 8 
        . 8 f 8 f 8 8 f 8 f 8 8 f 8 f 8 
        . 8 f f 8 8 8 8 f 8 8 8 f f 8 8 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . 2 f f 2 2 f 2 2 2 f 2 f f 2 2 
        . 2 f 2 f 2 f 2 2 2 f 2 f 2 f 2 
        . 2 f 2 f 2 2 f 2 f 2 2 f 2 f 2 
        . 2 f 2 f 2 2 f 2 f 2 2 f 2 f 2 
        . 2 f 2 f 2 2 f 2 f 2 2 f 2 f 2 
        . 2 f f 2 2 2 2 f 2 2 2 f f 2 2 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    projectile.setStayInScreen(true)
    projectile.setBounceOnWall(true)
    scaling.scaleByPercent(projectile, 50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
})
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . 2 f f 2 2 f 2 2 2 f 2 f f 2 2 
    . 2 f 2 f 2 f 2 2 2 f 2 f 2 f 2 
    . 2 f 2 f 2 2 f 2 f 2 2 f 2 f 2 
    . 2 f 2 f 2 2 f 2 f 2 2 f 2 f 2 
    . 2 f 2 f 2 2 f 2 f 2 2 f 2 f 2 
    . 2 f f 2 2 2 2 f 2 2 2 f f 2 2 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setVelocity(50, -50)
mySprite.setStayInScreen(true)
mySprite.setBounceOnWall(true)
scaling.scaleByPercent(mySprite, 50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . 3 f f 3 3 f 3 3 3 f 3 f f 3 3 
    . 3 f 3 f 3 f 3 3 3 f 3 f 3 f 3 
    . 3 f 3 f 3 3 f 3 f 3 3 f 3 f 3 
    . 3 f 3 f 3 3 f 3 f 3 3 f 3 f 3 
    . 3 f 3 f 3 3 f 3 f 3 3 f 3 f 3 
    . 3 f f 3 3 3 3 f 3 3 3 f f 3 3 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    . 8 f f 8 8 f 8 8 8 f 8 f f 8 8 
    . 8 f 8 f 8 f 8 8 8 f 8 f 8 f 8 
    . 8 f 8 f 8 8 f 8 f 8 8 f 8 f 8 
    . 8 f 8 f 8 8 f 8 f 8 8 f 8 f 8 
    . 8 f 8 f 8 8 f 8 f 8 8 f 8 f 8 
    . 8 f f 8 8 8 8 f 8 8 8 f f 8 8 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . 2 f f 2 2 f 2 2 2 f 2 f f 2 2 
    . 2 f 2 f 2 f 2 2 2 f 2 f 2 f 2 
    . 2 f 2 f 2 2 f 2 f 2 2 f 2 f 2 
    . 2 f 2 f 2 2 f 2 f 2 2 f 2 f 2 
    . 2 f 2 f 2 2 f 2 f 2 2 f 2 f 2 
    . 2 f f 2 2 2 2 f 2 2 2 f f 2 2 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
