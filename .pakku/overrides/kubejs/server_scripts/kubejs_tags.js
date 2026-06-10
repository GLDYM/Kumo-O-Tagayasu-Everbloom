// 木材
ServerEvents.tags('item', event => {
  event.add('minecraft:oak_logs', ['atmospheric:laurel_log', 'atmospheric:laurel_wood'])
  event.add('minecraft:jungle_logs', ['atmospheric:morado_log', 'atmospheric:morado_wood', 'atmospheric:rosewood_log', 'atmospheric:yucca_log', 'atmospheric:yucca_wood', 'quark:blossom_log', 'quark:blossom_wood'])
  event.add('minecraft:dark_oak_logs', ['atmospheric:grimwood_log'])
//   event.add('create:modded_stripped_logs', ['atmospheric:stripped_laurel_log', 'autumnity:sappy_maple_log', 'autumnity:stripped_maple_log', 'caverns_and_chasms:stripped_azalea_log', 'endergetic:stripped_poise_stem', 'immortalers_delight:stripped_ancient_wood_log', 'immortalers_delight:stripped_himekaido_log', 'sakura:stripped_maple_log', 'sakura:stripped_sakura_log', 'upgrade_aquatic:stripped_driftwood_log', 'upgrade_aquatic:stripped_river_log', 'vintagedelight:stripped_magic_vine'])
//   event.add('create:modded_stripped_wood', ['atmospheric:stripped_laurel_wood', 'autumnity:sappy_maple_wood', 'autumnity:stripped_maple_wood', 'caverns_and_chasms:stripped_azalea_wood', 'endergetic:stripped_poise_wood', 'immortalers_delight:stripped_ancient_wood', 'immortalers_delight:stripped_himekaido_wood', 'sakura:stripped_maple_wood', 'sakura:stripped_sakura_wood', 'upgrade_aquatic:stripped_driftwood', 'upgrade_aquatic:stripped_river_wood', 'vintagedelight:stripped_magic_vine_block'])
  event.add('c:stripped_logs', ['#c:stripped_wood', 'atmospheric:stripped_laurel_log', 'immortalers_delight:stripped_ancient_wood_log', 'immortalers_delight:stripped_himekaido_log', 'vintagedelight:stripped_magic_vine'])
  event.add('c:stripped_wood', ['atmospheric:stripped_laurel_wood', 'immortalers_delight:stripped_ancient_wood', 'immortalers_delight:stripped_himekaido_wood', 'vintagedelight:stripped_magic_vine_block'])
})

ServerEvents.tags('block', event => {
  event.add('c:stripped_logs', ['#c:stripped_wood', 'atmospheric:stripped_laurel_log', 'immortalers_delight:stripped_ancient_wood_log', 'immortalers_delight:stripped_himekaido_log', 'vintagedelight:stripped_magic_vine'])
  event.add('c:stripped_wood', ['atmospheric:stripped_laurel_wood', 'immortalers_delight:stripped_ancient_wood', 'immortalers_delight:stripped_himekaido_wood', 'vintagedelight:stripped_magic_vine_block'])
})

// 蘑菇
ServerEvents.tags('item', event => {
  event.add('c:mushrooms', ['quark:glow_shroom', 'tofucraft:zundatofu_mushroom'])
})

// 热源
ServerEvents.tags('block', event => {
  event.add('minecraft:campfires', ['supplementaries:fire_pit'])
  event.add('farmersdelight:heat_sources', ['supplementaries:fire_pit'])
  event.add('farmersdelight:tray_heat_sources', ['supplementaries:fire_pit'])
  event.add('create:passive_boiler_heaters', ['supplementaries:fire_pit'])
  event.add('amendments:cauldron_heat_source', ['supplementaries:fire_pit'])
  event.add('create:fan_heaters', ['supplementaries:fire_pit'])
  event.add('mynethersdelight:letios_flames', ['supplementaries:fire_pit'])
  event.add('c:allows_cooking', ['supplementaries:fire_pit'])
  event.add('candlelight:allows_cooking', ['supplementaries:fire_pit'])
})

// 肉类
ServerEvents.tags('item', event => {
  event.add('c:raw_meat', ['immortalers_delight:raw_sniffer_steak', 'mynethersdelight:hoglin_loin'])
  event.add('c:raw_meat', ['immortalers_delight:raw_sniffer_steak', 'mynethersdelight:hoglin_loin'])
  event.add('c:raw_meats', ['immortalers_delight:raw_sniffer_steak', 'mynethersdelight:hoglin_loin'])
  event.add('c:meats', ['immortalers_delight:cooked_sniffer_steak', 'immortalers_delight:raw_sniffer_steak', 'mynethersdelight:cooked_loin', 'mynethersdelight:hoglin_loin'])
  event.add('c:rawmeats', ['immortalers_delight:raw_sniffer_steak', 'mynethersdelight:hoglin_loin'])
  event.add('c:cooked_meat', ['immortalers_delight:cooked_sniffer_steak', 'mynethersdelight:cooked_loin'])
  event.add('c:cooked_meat', ['immortalers_delight:cooked_sniffer_steak', 'mynethersdelight:cooked_loin'])
  event.add('c:cooked_meats', ['immortalers_delight:cooked_sniffer_steak', 'mynethersdelight:cooked_loin'])
  event.add('c:cookedmeats', ['immortalers_delight:cooked_sniffer_steak', 'mynethersdelight:cooked_loin'])
  event.add('c:raw_pork', ['mynethersdelight:hoglin_loin'])
  event.add('c:cooked_pork', ['mynethersdelight:cooked_loin'])
  event.add('farmersdelight:cabbage_roll_ingredients', ['mynethersdelight:cooked_loin', 'mynethersdelight:hoglin_loin'])
})

// 水果
ServerEvents.tags('item', event => {
  event.add('c:fruits', ['atmospheric:blood_orange', 'atmospheric:yucca_fruit', 'fruitsdelight:blueberry', 'fruitsdelight:cranberry', 'fruitsdelight:durian_flesh', 'fruitsdelight:hamimelon_slice', 'fruitsdelight:hawberry', 'fruitsdelight:lemon', 'fruitsdelight:lemon_slice', 'fruitsdelight:lychee', 'fruitsdelight:mango', 'fruitsdelight:orange', 'fruitsdelight:peach', 'fruitsdelight:pear', 'fruitsdelight:persimmon', 'fruitsdelight:pineapple', 'immortalers_delight:himekaido', 'minecraft:apple', 'minecraft:glow_berries', 'minecraft:melon_slice', 'minecraft:sweet_berries', 'tofucraft:apricot', 'youkaishomecoming:black_grape', 'youkaishomecoming:red_grape', 'youkaishomecoming:white_grape'])
  event.add('c:crops', ['atmospheric:blood_orange', 'atmospheric:currant', 'atmospheric:dragon_fruit', 'atmospheric:orange', 'atmospheric:passion_fruit', 'atmospheric:yucca_fruit', 'fruitsdelight:blueberry', 'fruitsdelight:cranberry', 'fruitsdelight:hamimelon_slice', 'fruitsdelight:hawberry', 'fruitsdelight:lemon', 'fruitsdelight:lychee', 'fruitsdelight:mango', 'fruitsdelight:orange', 'fruitsdelight:peach', 'fruitsdelight:pear', 'fruitsdelight:persimmon', 'fruitsdelight:pineapple', 'immortalers_delight:himekaido', 'minecraft:apple', 'minecraft:glow_berries', 'minecraft:melon_slice', 'minecraft:sweet_berries', 'tofucraft:apricot', 'trailandtales_delight:lantern_fruit', 'youkaishomecoming:black_grape', 'youkaishomecoming:red_grape', 'youkaishomecoming:white_grape'])
  event.add('c:berries', ['atmospheric:currant', 'fruitsdelight:blueberry', 'fruitsdelight:cranberry', 'immortalers_delight:himekaido', 'minecraft:glow_berries', 'minecraft:sweet_berries', 'youkaishomecoming:black_grape', 'youkaishomecoming:red_grape', 'youkaishomecoming:white_grape'])
  event.add('c:fruits/apricot', ['tofucraft:apricot'])
  event.add('c:crops/apricot', ['tofucraft:apricot'])
  event.add('c:crops/strawberries', ['farm_and_charm:strawberry'])
  event.add('c:crops/strawberry', ['farm_and_charm:strawberry'])
  event.add('c:fruits/strawberries', ['farm_and_charm:strawberry'])
  event.add('c:fruits/strawberry', ['farm_and_charm:strawberry'])
  event.add('c:berries/strawberries', ['farm_and_charm:strawberry'])
  event.add('c:berries/strawberry', ['farm_and_charm:strawberry'])
  event.add('c:crops/blueberry', ['fruitsdelight:blueberry'])
  event.add('c:crops/blueberries', ['fruitsdelight:blueberry'])
  event.add('c:fruits/blueberry', ['fruitsdelight:blueberry'])
  event.add('c:fruits/blueberries', ['fruitsdelight:blueberry'])
  event.add('c:berries/blueberry', ['fruitsdelight:blueberry'])
  event.add('c:berries/blueberries', ['fruitsdelight:blueberry'])
  event.add('c:crops/hawthorn', ['fruitsdelight:hawberry'])
  event.add('c:fruits/hawthorn', ['fruitsdelight:hawberry'])
  event.add('c:crops/hawberry', ['fruitsdelight:hawberry'])
  event.add('c:fruits/hawberry', ['fruitsdelight:hawberry'])
  event.add('c:crops/lychee', ['fruitsdelight:lychee'])
  event.add('c:fruits/lychee', ['fruitsdelight:lychee'])
  event.add('c:crops/litchi', ['fruitsdelight:lychee'])
  event.add('c:fruits/litchi', ['fruitsdelight:lychee'])
  event.add('c:crops/persimmon', ['fruitsdelight:persimmon'])
  event.add('c:fruits/persimmon', ['fruitsdelight:persimmon'])
  event.add('c:crops/mango', ['fruitsdelight:mango'])
  event.add('c:fruits/mango', ['fruitsdelight:mango'])
  event.add('c:crops/pear', ['fruitsdelight:pear'])
  event.add('c:fruits/pear', ['fruitsdelight:pear'])
  event.add('c:crops/peach', ['fruitsdelight:peach'])
  event.add('c:fruits/peach', ['fruitsdelight:peach'])
  event.add('c:crops/lemon', ['fruitsdelight:lemon'])
  event.add('c:fruits/lemon', ['fruitsdelight:lemon'])
  event.add('c:crops/orange', ['atmospheric:blood_orange', 'atmospheric:orange', 'fruitsdelight:orange'])
  event.add('c:fruits/orange', ['atmospheric:blood_orange', 'fruitsdelight:orange'])
  event.add('c:crops/hamimelon', ['fruitsdelight:hamimelon_slice'])
  event.add('c:fruits/hamimelon', ['fruitsdelight:hamimelon_slice'])
  event.add('c:crops/pineapple', ['fruitsdelight:pineapple'])
  event.add('c:fruits/pineapple', ['fruitsdelight:pineapple'])
  event.add('c:crops/cranberry', ['fruitsdelight:cranberry'])
  event.add('c:fruits/cranberry', ['fruitsdelight:cranberry'])
  event.add('c:berries/cranberry', ['fruitsdelight:cranberry'])
  event.add('c:crops/grape', ['youkaishomecoming:black_grape', 'youkaishomecoming:red_grape', 'youkaishomecoming:white_grape'])
  event.add('c:fruits/grape', ['youkaishomecoming:black_grape', 'youkaishomecoming:red_grape', 'youkaishomecoming:white_grape'])
  event.add('c:berries/grape', ['youkaishomecoming:black_grape', 'youkaishomecoming:red_grape', 'youkaishomecoming:white_grape'])
  event.add('c:crops/grapes', ['youkaishomecoming:black_grape', 'youkaishomecoming:red_grape', 'youkaishomecoming:white_grape'])
  event.add('c:fruits/grapes', ['youkaishomecoming:black_grape', 'youkaishomecoming:red_grape', 'youkaishomecoming:white_grape'])
  event.add('c:berries/grapes', ['youkaishomecoming:black_grape', 'youkaishomecoming:red_grape', 'youkaishomecoming:white_grape'])
  event.add('c:crops/apple', ['minecraft:apple'])
  event.add('c:fruits/apple', ['minecraft:apple'])
  event.add('c:crops/watermelon', ['minecraft:melon_slice'])
  event.add('c:fruits/watermelon', ['minecraft:melon_slice'])
  event.add('c:crops/melon', ['minecraft:melon_slice'])
  event.add('c:fruits/melon', ['minecraft:melon_slice'])
  event.add('c:crops/sweet_berries', ['minecraft:sweet_berries'])
  event.add('c:fruits/sweet_berries', ['minecraft:sweet_berries'])
  event.add('c:berries/sweet_berries', ['minecraft:sweet_berries'])
  event.add('c:crops/glow_berries', ['minecraft:glow_berries'])
  event.add('c:fruits/glow_berries', ['minecraft:glow_berries'])
  event.add('c:berries/glow_berries', ['minecraft:glow_berries'])
  event.add('c:crops/currant', ['atmospheric:currant'])
  event.add('c:berries/currant', ['atmospheric:currant'])
  event.add('c:crops/yucca', ['atmospheric:yucca_fruit'])
  event.add('c:fruits/yucca', ['atmospheric:yucca_fruit'])
  event.add('c:crops/dragon_fruit', ['atmospheric:dragon_fruit'])
  event.add('c:crops/citrus', ['atmospheric:blood_orange', 'atmospheric:orange'])
  event.add('c:crops/passion_fruit', ['atmospheric:passion_fruit'])
  event.add('c:crops/passionfruit', ['atmospheric:passion_fruit'])
  event.add('c:fruits/citrus', ['atmospheric:blood_orange'])
  event.add('c:fruits/durian', ['fruitsdelight:durian_flesh'])
})

// 蔬菜
ServerEvents.tags('item', event => {
  event.add('c:crops', ['atmospheric:aloe_leaves', 'bakeries:tomato', 'immortalers_delight:evolutcorn', 'mynethersdelight:bullet_pepper', 'neapolitan:mint_leaves', 'tofucraft:chili', 'tofucraft:leek', 'trailandtales_delight:pitcher_taro', 'vintagedelight:cucumber', 'vintagedelight:ghost_pepper', 'youkaishomecoming:cucumber'])
  event.add('c:vegetables', ['atmospheric:aloe_leaves', 'bakeries:tomato', 'immortalers_delight:evolutcorn', 'immortalers_delight:evolutcorn_grains', 'mynethersdelight:bullet_pepper', 'neapolitan:mint_leaves', 'tofucraft:chili', 'tofucraft:leek', 'trailandtales_delight:pitcher_taro', 'vintagedelight:cucumber', 'vintagedelight:ghost_pepper', 'youkaishomecoming:cucumber'])
  event.add('c:crops/tomato', ['bakeries:tomato'])
  event.add('c:vegetables/tomato', ['bakeries:tomato'])
  event.add('c:grain', ['immortalers_delight:evolutcorn', 'immortalers_delight:evolutcorn_grains'])
  event.add('c:crops/corn', ['immortalers_delight:evolutcorn'])
  event.add('c:grain/corn', ['immortalers_delight:evolutcorn', 'immortalers_delight:evolutcorn_grains'])
  event.add('c:crops/pepper', ['mynethersdelight:bullet_pepper', 'tofucraft:chili', 'vintagedelight:ghost_pepper'])
  event.add('c:vegetables/pepper', ['mynethersdelight:bullet_pepper', 'tofucraft:chili', 'vintagedelight:ghost_pepper'])
  event.add('c:pepper', ['mynethersdelight:bullet_pepper', 'vintagedelight:ghost_pepper'])
  event.add('c:crops/chilipepper', ['mynethersdelight:bullet_pepper', 'tofucraft:chili', 'vintagedelight:ghost_pepper'])
  event.add('c:vegetables/chilipepper', ['mynethersdelight:bullet_pepper', 'tofucraft:chili', 'vintagedelight:ghost_pepper'])
  event.add('c:crops/chili_pepper', ['mynethersdelight:bullet_pepper', 'tofucraft:chili', 'vintagedelight:ghost_pepper'])
  event.add('c:vegetables/chili_pepper', ['mynethersdelight:bullet_pepper', 'tofucraft:chili', 'vintagedelight:ghost_pepper'])
  event.add('c:chilipepper', ['mynethersdelight:bullet_pepper', 'vintagedelight:ghost_pepper'])
  event.add('c:vegetables/chili', ['tofucraft:chili'])
  event.add('c:crops/chili', ['tofucraft:chili'])
  event.add('c:vegetables/leek', ['tofucraft:leek'])
  event.add('c:crops/leek', ['tofucraft:leek'])
  event.add('c:crops/cucumber', ['vintagedelight:cucumber', 'youkaishomecoming:cucumber'])
  event.add('c:vegetables/cucumber', ['vintagedelight:cucumber', 'youkaishomecoming:cucumber'])
  event.add('c:vegetables/corn', ['immortalers_delight:evolutcorn', 'immortalers_delight:evolutcorn_grains'])
  event.add('c:seeds', ['immortalers_delight:evolutcorn_grains'])
  event.add('c:seeds/corn', ['immortalers_delight:evolutcorn_grains'])
  event.add('c:crops/aloe', ['atmospheric:aloe_leaves'])
  event.add('c:vegetables/aloe', ['atmospheric:aloe_leaves'])
  event.add('c:crops/mint', ['neapolitan:mint_leaves'])
  event.add('c:vegetables/mint', ['neapolitan:mint_leaves'])
  event.add('c:tomato', ['farmersdelight:tomato'])
  event.add('c:cabbage', ['farmersdelight:cabbage'])
  event.add('c:crops/tomato', ['farmersdelight:tomato'])
  event.add('c:crops/cabbage', ['farmersdelight:cabbage'])
})

// 种子
ServerEvents.tags('item', event => {
  event.add('c:seeds/oat', ['vintagedelight:oat_seeds'])
  event.add('c:seeds/pepper', ['vintagedelight:ghost_pepper_seeds'])
  event.add('c:seeds/chilipepper', ['vintagedelight:ghost_pepper_seeds'])
  event.add('c:seeds/cantaloupe', ['fruitsdelight:hamimelon_seeds'])
  event.add('c:seeds/hamimelon', ['fruitsdelight:hamimelon_seeds'])
})

// 坚果和谷物
ServerEvents.tags('item', event => {
  event.add('c:crops', ['immortalers_delight:kwat_wheat', 'neapolitan:adzuki_beans', 'vintagedelight:oat', 'vintagedelight:peanut', 'youkaishomecoming:redbean'])
  event.add('c:crops/nut', ['vintagedelight:peanut'])
  event.add('c:crops/peanut', ['vintagedelight:peanut'])
  event.add('c:nut', ['vintagedelight:peanut'])
  event.add('c:nuts', ['vintagedelight:peanut'])
  event.add('c:nut/peanut', ['vintagedelight:peanut'])
  event.add('c:nuts/peanut', ['vintagedelight:peanut'])
  event.add('c:crops/oat', ['vintagedelight:oat'])
  event.add('c:grain', ['immortalers_delight:kwat_wheat', 'vintagedelight:oat'])
  event.add('c:grain/oat', ['vintagedelight:oat'])
  event.add('c:crops/wheat', ['immortalers_delight:kwat_wheat', 'vintagedelight:oat'])
  event.add('c:grain/wheat', ['immortalers_delight:kwat_wheat', 'vintagedelight:oat'])
  event.add('c:wheat', ['immortalers_delight:kwat_wheat', 'vintagedelight:oat'])
  event.add('c:crops/barley', ['immortalers_delight:kwat_wheat'])
  event.add('c:grain/barley', ['immortalers_delight:kwat_wheat'])
  event.add('c:crops/adzuki', ['neapolitan:adzuki_beans', 'youkaishomecoming:redbean'])
  event.add('c:seeds', ['neapolitan:adzuki_beans', 'youkaishomecoming:redbean'])
  event.add('c:seeds/adzuki', ['neapolitan:adzuki_beans', 'youkaishomecoming:redbean'])
})

// 水产
ServerEvents.tags('item', event => {
  event.add('c:crab_meat', ['quark:crab_leg'])
  event.add('minecraft:fishes', ['youkaishomecoming:raw_lamprey_fillet', 'youkaishomecoming:roasted_lamprey_fillet'])
  event.add('c:raw_fishes', ['youkaishomecoming:raw_lamprey_fillet'])
  event.add('c:raw_fish', ['youkaishomecoming:raw_lamprey_fillet'])
  event.add('c:meats', ['youkaishomecoming:raw_lamprey_fillet', 'youkaishomecoming:roasted_lamprey_fillet'])
  event.add('minecraft:is_meat', ['youkaishomecoming:raw_lamprey_fillet', 'youkaishomecoming:roasted_lamprey_fillet'])
  event.add('c:cooked_fishes', ['youkaishomecoming:roasted_lamprey_fillet'])
  event.add('c:cooked_fish', ['youkaishomecoming:roasted_lamprey_fillet'])
})

// 巧克力
ServerEvents.tags('item', event => {
  event.add('c:bars/chocolate', ['#c:chocolate'])
  event.add('c:chocolate', ['#c:bars/chocolate'])
})

// 切片
ServerEvents.tags('item', event => {
  event.add('c:fruits', ['fruitsdelight:pineapple_slice'])
})

// 工具
ServerEvents.tags('item', event => {
  event.add('farmersdelight:tools/knives', ['#c:tools/knives'])
  event.add('c:tools/rollingpin', ['tofucraft:rollingpin'])
  event.add('c:tools/rolling_pin', ['tofucraft:rollingpin'])
  event.add('bakeries:bread_knife', ['#c:tools/knives'])
  event.add('minecraft:hoes', ['create_sa:brass_hoe', 'create_sa:copper_hoe', 'create_sa:zinc_hoe', 'tofucraft:tofu_diamond_hoe', 'tofucraft:tofu_kinu_hoe', 'tofucraft:tofu_metal_hoe', 'tofucraft:tofu_momen_hoe', 'tofucraft:tofu_solid_hoe'])
  event.add('minecraft:tools', ['caverns_and_chasms:tuning_fork', 'create_sa:blazing_axe', 'create_sa:blazing_cleaver', 'create_sa:blazing_pickaxe', 'create_sa:blazing_shovel', 'create_sa:brass_axe', 'create_sa:brass_hoe', 'create_sa:brass_pickaxe', 'create_sa:brass_shovel', 'create_sa:brass_sword', 'create_sa:copper_axe', 'create_sa:copper_hoe', 'create_sa:copper_pickaxe', 'create_sa:copper_shovel', 'create_sa:copper_sword', 'create_sa:experience_axe', 'create_sa:experience_pickaxe', 'create_sa:experience_shovel', 'create_sa:experience_sword', 'create_sa:rose_quartz_axe', 'create_sa:rose_quartz_pickaxe', 'create_sa:rose_quartz_shovel', 'create_sa:rose_quartz_sword', 'create_sa:zinc_axe', 'create_sa:zinc_hoe', 'create_sa:zinc_pickaxe', 'create_sa:zinc_shovel', 'create_sa:zinc_sword', 'tofucraft:rollingpin', 'tofucraft:tofu_diamond_hoe', 'tofucraft:tofu_kinu_hoe', 'tofucraft:tofu_metal_hoe', 'tofucraft:tofu_momen_hoe', 'tofucraft:tofu_solid_hoe'])
  event.add('minecraft:shovels', ['create_sa:blazing_shovel', 'create_sa:brass_shovel', 'create_sa:copper_shovel', 'create_sa:experience_shovel', 'create_sa:rose_quartz_shovel', 'create_sa:zinc_shovel'])
  event.add('minecraft:axes', ['create_sa:blazing_axe', 'create_sa:brass_axe', 'create_sa:copper_axe', 'create_sa:experience_axe', 'create_sa:rose_quartz_axe', 'create_sa:zinc_axe'])
  event.add('minecraft:pickaxes', ['create_sa:blazing_pickaxe', 'create_sa:brass_pickaxe', 'create_sa:copper_pickaxe', 'create_sa:experience_pickaxe', 'create_sa:rose_quartz_pickaxe', 'create_sa:zinc_pickaxe'])
  event.add('minecraft:swords', ['create_sa:blazing_cleaver', 'create_sa:brass_sword', 'create_sa:copper_sword', 'create_sa:experience_sword', 'create_sa:rose_quartz_sword', 'create_sa:zinc_sword'])
  event.add('c:tools', ['another_furniture:furniture_hammer'])
  event.add('c:tools/hammer', ['another_furniture:furniture_hammer'])
  event.add('c:tools/hammers', ['another_furniture:furniture_hammer'])
})

// INGOTS AND MATERIALS
ServerEvents.tags('item', event => {
  event.add('c:bowls', ['tofucraft:glassbowl'])
  event.add('c:bamboo', ['minecraft:bamboo'])
})

// 调味品
ServerEvents.tags('item', event => {
  event.add('c:salt', ['tofucraft:salt', 'vintagedelight:salt_dust'])
  event.add('c:salts', ['tofucraft:salt', 'vintagedelight:salt_dust'])
  event.add('c:salt_dust', ['tofucraft:salt', 'vintagedelight:salt_dust'])
  event.add('c:salt', ['tofucraft:salt', 'vintagedelight:salt_dust'])
  event.add('c:salts', ['tofucraft:salt', 'vintagedelight:salt_dust'])
  event.add('c:bottles/soy_sauce', ['tofucraft:bottle_soysause', 'youkaishomecoming:soy_sauce_bottle'])
  event.add('c:soysauce', ['youkaishomecoming:soy_sauce_bottle'])
  event.add('c:soysauce/soysauce', ['youkaishomecoming:soy_sauce_bottle'])
})

// 黄油与奶酪
ServerEvents.tags('item', event => {
  event.add('c:butter', ['bakeries:butter_cube', 'youkaishomecoming:butter'])
  event.add('c:butter', ['bakeries:butter_cube', 'youkaishomecoming:butter'])
  event.add('c:cheese', ['bakeries:cheese_cube', 'trailandtales_delight:cheese_slice', 'trailandtales_delight:cherry_cheese_slice', 'tofucraft:soy_cheese', 'tofucraft:soy_nether_cheese', 'tofucraft:soy_soul_cheese'])
  event.add('c:cheese/sweet', ['#c:cheese'])
  event.add('c:sugar', ['bakeries:brown_sugar_cube'])
})

// 蛋糕
ServerEvents.tags('item', event => {
  event.add('c:cake', ['atmospheric:yucca_gateau', 'minecraft:cake', 'neapolitan:adzuki_cake', 'neapolitan:banana_cake', 'neapolitan:chocolate_cake', 'neapolitan:mint_cake', 'neapolitan:strawberry_cake', 'neapolitan:vanilla_cake', 'tofucraft:tofucake', 'tofucraft:zundatofucake'])
})

// SLICES
ServerEvents.tags('item', event => {
  event.add('c:bread_slices', ['bakeries:country_bread_slice', 'bakeries:sliced_cheese_cocoa_toast', 'bakeries:sliced_toast', 'immortalers_delight:kwat_wheat_toast_slice'])
  event.add('c:bread_slices/wheat', ['bakeries:country_bread_slice', 'bakeries:sliced_cheese_cocoa_toast', 'bakeries:sliced_toast', 'immortalers_delight:kwat_wheat_toast_slice'])
  event.add('some_assembly_required:sandwich_bread', ['bakeries:country_bread_slice', 'bakeries:sliced_cheese_cocoa_toast', 'bakeries:sliced_toast', 'immortalers_delight:kwat_wheat_toast_slice'])
  event.add('c:bread', ['autumnity:pumpkin_bread', 'bakeries:cheese_cocoa_toast', 'bakeries:ciabatta', 'bakeries:country_bread', 'bakeries:toast', 'immortalers_delight:kwat_wheat_toast', 'neapolitan:banana_bread'])
})

// 法术材料
ServerEvents.tags('item', event => {
  event.add('irons_spellbooks:nature_focus', ['tofucraft:zundaruby'])
  event.add('irons_spellbooks:school_focus', ['tofucraft:zundaruby'])
})

// OTHERS
ServerEvents.tags('item', event => {
  event.add('another_furniture:furniture_hammers', ['handcrafted:hammer'])
  event.add('c:tools', ['handcrafted:hammer'])
  event.add('c:tools/hammer', ['handcrafted:hammer'])
  event.add('c:tools/hammers', ['handcrafted:hammer'])
})

// UNIFY
ServerEvents.tags('item', event => {
//   event.add('c:tools/pickaxes', ['#minecraft:pickaxes'])
//   event.add('c:tools/axes', ['#minecraft:axes'])
//   event.add('c:tools/shovels', ['#minecraft:shovels'])
//   event.add('c:tools/swords', ['#minecraft:swords'])
//   event.add('c:tools/hoes', ['#minecraft:hoes'])
  event.add('c:tools', ['#minecraft:tools'])
  event.add('c:seeds/coffeebean', ['bakeries:raw_coffee_bean', 'youkaishomecoming:green_coffee_bean'])
  event.add('c:coffee_beans', ['bakeries:coffee_bean', 'youkaishomecoming:coffee_beans'])
  event.add('c:coffee_powder', ['bakeries:ground_coffee', 'youkaishomecoming:coffee_powder'])
  event.add('minecraft:completes_find_tree_tutorial', ['#minecraft:logs'])
  event.add('c:fruits', ['#c:berries'])
  event.add('minecraft:fox_food', ['#c:berries'])
   event.add('farmersdelight:cabbage_roll_ingredients', ['#c:raw_fishes', '#c:raw_meats'])
  event.add('c:raw_meat', ['#c:raw_meats'])
  event.add('c:cooked_meat', ['#c:cooked_meats'])
  event.add('c:meats', ['#c:cooked_meats', '#c:raw_meats'])
  event.add('minecraft:is_meat', ['#c:meats'])
  event.add('c:raw_fish', ['#c:raw_fishes'])
  event.add('c:cooked_fish', ['#c:cooked_fishes'])
  event.add('c:fermentation', ['#c:crops/grape'])
  event.add('c:crops/cantaloupe', ['#c:crops/hamimelon'])
  event.add('c:crops/hamimelon', ['#c:crops/cantaloupe'])
  event.add('c:fruits/cantaloupe', ['#c:fruits/hamimelon'])
  event.add('c:fruits/hamimelon', ['#c:fruits/cantaloupe'])
  event.add('c:wheat', ['#c:crops/wheat', '#c:grain/wheat'])
  event.add('c:crops/wheat', ['#c:wheat'])
  event.add('c:grain/wheat', ['#c:wheat'])
  event.add('c:food/raw_pasta', ['farmersdelight:raw_pasta', 'vintagedelight:cucumber_noodles'])
  event.add('supplementaries:shulker_blacklist', ['#create:toolboxes', '#curios:spellbook', '#functionalstorage:drawer', '#l2backpack:backpacks', '#l2backpack:bags', '#l2backpack:dimensional_storages', '#l2backpack:drawers', '#l2backpack:swaps', 'caverns_and_chasms:tether_potion', 'cuisinedelight:cuisine_skillet', 'cuisinedelight:fried_meat_and_melon', 'cuisinedelight:fried_mushroom', 'cuisinedelight:fried_pasta', 'cuisinedelight:fried_rice', 'cuisinedelight:ham_fried_rice', 'cuisinedelight:meat_fried_rice', 'cuisinedelight:meat_pasta', 'cuisinedelight:meat_platter', 'cuisinedelight:meat_with_seafood', 'cuisinedelight:meat_with_vegetables', 'cuisinedelight:mixed_fried_rice', 'cuisinedelight:mixed_pasta', 'cuisinedelight:scrambled_egg_and_tomato', 'cuisinedelight:seafood_fried_rice', 'cuisinedelight:seafood_pasta', 'cuisinedelight:seafood_platter', 'cuisinedelight:seafood_with_vegetables', 'cuisinedelight:suspicious_mix', 'cuisinedelight:vegetable_fried_rice', 'cuisinedelight:vegetable_pasta', 'cuisinedelight:vegetable_platter', 'minecraft:bundle', 'minecraft:ender_chest', 'some_assembly_required:sandwich'])
  event.add('touhou_little_maid:maid_tamed_item', ['#c:cake'])
  event.add('c:ice_cubes', ['youkaishomecoming:ice_cube'])
})

// Knives
ServerEvents.tags('item', event => {
  event.add('c:tools/knives', ['#l2weaponry:dagger'])
  event.add('c:tools', ['#l2weaponry:dagger'])
  event.add('farmersdelight:tools/knives', ['#l2weaponry:dagger'])
  event.add('farmersdelight:straw_harvesters', ['#l2weaponry:dagger'])
  event.add('immortalers_delight:tools/immortal_knives', ['#c:tools/knives'])
})

//oei
ServerEvents.tags('item', event => {
  event.add('c:ingots/iron', ['minecraft:iron_ingot'])
  event.add('c:ingots/zinc', ['create:zinc_ingot'])
  event.add('c:stones', ['minecraft:stone'])
  event.add('c:soybean', ['tofucraft:seeds_soybeans'])
  event.add('c:redbean', ['neapolitan:adzuki_beans'])
  event.add('c:strawberry', ['neapolitan:strawberries'])
  event.add('c:rawchicken', ['minecraft:chicken'])
  event.add('c:cooked_rice', ['farmersdelight:cooked_rice'])
  event.add('c:crops/redbean', ['neapolitan:adzuki_beans'])
  event.add('c:crops/lettuce', ['farm_and_charm:lettuce'])
  event.add('c:bottles/milk', ['farmersdelight:milk_bottle'])
  event.add('c:dusts/salt', ['vintagedelight:salt_dust'])
  event.add('youkaishomecoming:farmland_redbean', ['minecraft:dirt'])
  //event.add('c:coffee_grounds', ['youkaishomecoming:coffee_powder'])
})

//修补
ServerEvents.tags('block', event => {
  event.add('youkaishomecoming:farmland_redbean', ['minecraft:dirt']) //成就
})
