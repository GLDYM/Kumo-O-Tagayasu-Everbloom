// Ban items
ServerEvents.recipes(event => {
  event.remove({ output: 'l2complements:diffusion_wand' })
})

BlockEvents.rightClicked('minecraft:enchanting_table', event => {
  event.player.tell(Text.translate("kubejs.message.enchanting_table_blocked.0"))
  event.player.tell(Text.translate("kubejs.message.enchanting_table_blocked.1"))
  event.cancel()
})
