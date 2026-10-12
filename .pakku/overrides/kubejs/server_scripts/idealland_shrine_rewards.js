const RUNE_BY_GOD = {
  earth: 'idealland_shrine:basic16rune_0',
  fire: 'idealland_shrine:basic16rune_1',
  life: 'idealland_shrine:basic16rune_2',
  soil: 'idealland_shrine:basic16rune_3',
  water: 'idealland_shrine:basic16rune_4',
  poison: 'idealland_shrine:basic16rune_5',
  male: 'idealland_shrine:basic16rune_6',
  iron: 'idealland_shrine:basic16rune_7',
  stone: 'idealland_shrine:basic16rune_8',
  female: 'idealland_shrine:basic16rune_9',
  wood: 'idealland_shrine:basic16rune_10',
  gold: 'idealland_shrine:basic16rune_11',
  wind: 'idealland_shrine:basic16rune_12',
  death: 'idealland_shrine:basic16rune_13',
  lava: 'idealland_shrine:basic16rune_14',
  sky: 'idealland_shrine:basic16rune_15'
}

IdeallandShrineEvents.prayShrine(event => {
  if (event.afterBelief < 100) return

  const rune = RUNE_BY_GOD[event.godId]
  if (rune) event.player.give(Item.of(rune))
})
