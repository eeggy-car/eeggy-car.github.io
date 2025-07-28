// Use the games array from your HTML, with image and url
const games = [
  { name: "18 Wheeler Cargo Simulator", image: "/sarkar/18-wheeler-cargo-simulator.jpg", url: "/detail/18-wheeler-cargo-simulator.html" },
  { name: "18 Wheeler Cargo Simulator 2", image: "/sarkar/18-wheeler-cargo-simulator-2.jpg", url: "/detail/18-wheeler-cargo-simulator-2.html" },
  { name: "18 Wheeler Driving Sim", image: "/sarkar/18-wheeler-driving-sim.jpg", url: "/detail/18-wheeler-driving-sim.html" },
  { name: "18 Wheeler Truck Parking", image: "/sarkar/18-wheeler-truck-parking.jpg", url: "/detail/18-wheeler-truck-parking.html" },
  { name: "18 Wheeler Truck Parking 2", image: "/sarkar/18-wheeler-truck-parking-2.jpg", url: "/detail/18-wheeler-truck-parking-2.html" },
  { name: "1v1 Lol", image: "/sarkar/1v1-lol.jpg", url: "/detail/1v1-lol.html" },
  { name: "2048", image: "/sarkar/2048.jpg", url: "/detail/2048.html" },
  { name: "3d Arena Racing", image: "/sarkar/3d-arena-racing.jpg", url: "/detail/3d-arena-racing.html" },
  { name: "3d Car Simulator", image: "/sarkar/3d-car-simulator.jpg", url: "/detail/3d-car-simulator.html" },
  { name: "3d Moto Simulator 2", image: "/sarkar/3d-moto-simulator-2.jpg", url: "/detail/3d-moto-simulator-2.html" },
  { name: "4wd Off Road Driving Sim", image: "/sarkar/4wd-off-road-driving-sim.jpg", url: "/detail/4wd-off-road-driving-sim.html" },
  { name: "Fnf", image: "/sarkar/fnf.jpg", url: "/detail/Fnf.html" },
  { name: "Adventure Drivers", image: "/sarkar/adventure-drivers.jpg", url: "/detail/adventure-drivers.html" },
  { name: "Among Us", image: "/sarkar/among-us.jpg", url: "/detail/among-us.html" },
  { name: "Angry Gran Run", image: "/sarkar/angry-gran-run.jpg", url: "/detail/angry-gran-run.html" },
  { name: "B Cubed", image: "/sarkar/b-cubed.jpg", url: "/detail/b-cubed.html" },
  { name: "Basket Ball", image: "/sarkar/basket-ball.jpg", url: "/detail/basket-ball.html" },
  { name: "Basketball Legends", image: "/sarkar/basketball-legends.jpg", url: "/detail/basketball-legends.html" },
  { name: "Basketball Stars", image: "/sarkar/basketball-stars.jpg", url: "/detail/basketball-stars.html" },
  { name: "Bicycle Stunts 3d", image: "/sarkar/bicycle-stunts-3d.jpg", url: "/detail/bicycle-stunts-3d.html" },
  { name: "Bike Trials Winter 2", image: "/sarkar/bike-trials-winter-2.jpg", url: "/detail/bike-trials-winter-2.html" },
  { name: "Bitlife", image: "/sarkar/bitlife.jpg", url: "/detail/bitlife.html" },
  { name: "Block The Pig", image: "/sarkar/block-the-pig.jpg", url: "/detail/block-the-pig.html" },
  { name: "Blumgi Rocket", image: "/sarkar/blumgi-rocket.jpg", url: "/detail/blumgi-rocket.html" },
  { name: "Bob The Robber 4", image: "/sarkar/bob-the-robber-4.jpg", url: "/detail/bob-the-robber-4.html" },
  { name: "Bottle Flip 3d", image: "/sarkar/bottle-flip-3d.jpg", url: "/detail/bottle-flip-3d.html" },
  { name: "Boxrob", image: "/sarkar/boxrob.jpg", url: "/detail/boxrob.html" },
  { name: "Boxrob2", image: "/sarkar/boxrob2.jpg", url: "/detail/boxrob2.html" },
  { name: "Boxrob3", image: "/sarkar/boxrob3.jpg", url: "/detail/boxrob3.html" },
  { name: "Burnin Rubber 5 Xs", image: "/sarkar/burnin-rubber-5-xs.jpg", url: "/detail/burnin-rubber-5-xs.html" },
  { name: "Burnout Drift Hilltop", image: "/sarkar/burnout-drift-hillto.jpg", url: "/detail/burnout-drift-hilltop.html" },
  { name: "Candy Jump", image: "/sarkar/candy-jump.jpg", url: "/detail/candy-jump.html" },
  { name: "Car Drift Racers 2", image: "/sarkar/car-drift-racers-2.jpg", url: "/detail/car-drift-racers-2.html" },
  { name: "Car Rush", image: "/sarkar/car-rush.jpg", url: "/detail/car-rush.html" },
  { name: "Car Simulator Arena", image: "/sarkar/car-simulator-arena.jpg", url: "/detail/car-simulator-arena.html" },
  { name: "Cars Thief", image: "/sarkar/cars-thief.jpg", url: "/detail/cars-thief.html" },
  { name: "Cars Thief Tank Edition", image: "/sarkar/cars-thief-tank-edition.jpg", url: "/detail/cars-thief-tank-edition.html" },
  { name: "Cartoon Mini Racing", image: "/sarkar/cartoon-mini-racing.jpg", url: "/detail/cartoon-mini-racing.html" },
  { name: "City Car Driving Stunt Master", image: "/sarkar/city-car-driving-stunt-master.jpg", url: "/detail/city-car-driving-stunt-master.html" },
  { name: "City Rider", image: "/sarkar/city-rider.jpg", url: "/detail/city-rider.html" },
  { name: "Color Road", image: "/sarkar/color-road.jpg", url: "/detail/color-road.html" },
  { name: "Color Road 2", image: "/sarkar/color-road-2.jpg", url: "/detail/color-road-2.html" },
  { name: "Cookie Clicker", image: "/sarkar/cookie-clicker.jpg", url: "/detail/cookie-clicker.html" },
  { name: "Crazy Cars", image: "/sarkar/crazy-cars.jpg", url: "/detail/crazy-cars.html" },
  { name: "Crossy Road", image: "/sarkar/crossy-road.jpg", url: "/detail/crossy-road.html" },
  { name: "Crowd Run 3d", image: "/sarkar/crowd-run-3d.jpg", url: "/detail/crowd-run-3d.html" },
  { name: "Cubito", image: "/sarkar/cubito.jpg", url: "/detail/cubito.html" },
  { name: "Cyber Cars Punk Racing", image: "/sarkar/cyber-cars-punk-racing.jpg", url: "/detail/cyber-cars-punk-racing.html" },
  { name: "Dark Runner", image: "/sarkar/dark-runner.jpg", url: "/detail/dark-runner.html" },
  { name: "Death Chase 3", image: "/sarkar/death-chase-3.jpg", url: "/detail/death-chase-3.html" },
  { name: "Demolition Derby Crash Racing", image: "/sarkar/demolition-derby-crash-racing.jpg", url: "/detail/demolition-derby-crash-racing.html" },
  { name: "Desert Car Racing 1", image: "/sarkar/desert-car-racing-1.jpg", url: "/detail/desert-car-racing-1.html" },
  { name: "Doll Designer", image: "/sarkar/doll-designer.jpg", url: "/detail/doll-designer.html" },
  { name: "Doodle Jump", image: "/sarkar/doodle-jump.jpg", url: "/detail/doodle-jump.html" },
  { name: "Drift Boss", image: "/sarkar/drift-boss.jpg", url: "/detail/drift-boss.html" },
  { name: "Drift Dudes", image: "/sarkar/drift-dudes.jpg", url: "/detail/drift-dudes.html" },
  { name: "Drift Hunters", image: "/sarkar/drift-hunters.jpg", url: "/detail/drift-hunters.html" },
  { name: "Drive Mad", image: "/sarkar/drive-mad.jpg", url: "/detail/drive-mad.html" },
  { name: "Ducklife 4", image: "/sarkar/ducklife-4.jpg", url: "/detail/ducklife-4.html" },
  { name: "Dunkbrush", image: "/sarkar/dunkbrush.jpg", url: "/detail/dunkbrush.html" },
  { name: "Eagle Ride", image: "/sarkar/eagle-ride.jpg", url: "/detail/eagle-ride.html" },
  { name: "Elasticman", image: "/sarkar/elasticman.jpg", url: "/detail/elasticman.html" },
  { name: "Endless Truck", image: "/sarkar/endless-truck.jpg", url: "/detail/endless-truck.html" },
  { name: "Extreme Car Parking", image: "/sarkar/extreme-car-parking.jpg", url: "/detail/extreme-car-parking.html" },
  { name: "Extreme Off Road Cars", image: "/sarkar/extreme-off-road-cars.jpg", url: "/detail/extreme-off-road-cars.html" },
  { name: "Extreme Off Road Cars 3 Cargo", image: "/sarkar/placeholder.jpg", url: "/detail/extreme-off-road-cars-3-cargo.html" },
  { name: "Extremeoffroadcars2", image: "/sarkar/extremeoffroadcars2.jpg", url: "/detail/extremeoffroadcars2.html" },
  { name: "Fireboy And Watergirl 1", image: "/sarkar/placeholder.jpg", url: "/detail/fireboy-and-watergirl-1.html" },
  { name: "Flying Car Simulator", image: "/sarkar/flying-car-simulator.jpg", url: "/detail/flying-car-simulator.html" },
  { name: "Fnaf1", image: "/sarkar/fnaf1.jpg", url: "/detail/fnaf1.html" },
  { name: "Fnaf2", image: "/sarkar/fnaf2.jpg", url: "/detail/fnaf2.html" },
  { name: "Fnaf3", image: "/sarkar/fnaf3.jpg", url: "/detail/fnaf3.html" },
  { name: "Fnaf4", image: "/sarkar/fnaf4.jpg", url: "/detail/fnaf4.html" },
  { name: "Fnafsl", image: "/sarkar/fnafsl.jpg", url: "/detail/fnafsl.html" },
  { name: "Football Legends", image: "/sarkar/football-legends.jpg", url: "/detail/football-legends.html" },
  { name: "Fortride Open World", image: "/sarkar/fortride-open-world.jpg", url: "/detail/fortride-open-world.html" },
  { name: "Furious Racing 3d", image: "/sarkar/furious-racing-3d.jpg", url: "/detail/furious-racing-3d.html" },
  { name: "Geometry Dash", image: "/sarkar/placeholder.jpg", url: "/detail/geometry-dash.html" },
  { name: "Getaway Shootout", image: "/sarkar/getaway-shootout.jpg", url: "/detail/getaway-shootout.html" },
  { name: "Getting Over It", image: "/sarkar/getting-over-it.jpg", url: "/detail/getting-over-it.html" },
  { name: "Go Kart Go Ultra", image: "/sarkar/go-kart-go-ultra.jpg", url: "/detail/go-kart-go-ultra.html" },
  { name: "Gold Digger Frvr", image: "/sarkar/gold-digger-frvr.jpg", url: "/detail/gold-digger-frvr.html" },
  { name: "Golfinity", image: "/sarkar/golfinity.jpg", url: "/detail/golfinity.html" },
  { name: "Gp Moto Racing", image: "/sarkar/gp-moto-racing.jpg", url: "/detail/gp-moto-racing.html" },
  { name: "Gp Moto Racing 3", image: "/sarkar/gp-moto-racing-3.jpg", url: "/detail/gp-moto-racing-3.html" },
  { name: "Grand Prix Hero", image: "/sarkar/grand-prix-hero.jpg", url: "/detail/grand-prix-hero.html" },
  { name: "Gswitch", image: "/sarkar/gswitch.jpg", url: "/detail/gswitch.html" },
  { name: "Guess The Kitty", image: "/sarkar/guess-the-kitty.jpg", url: "/detail/guess-the-kitty.html" },
  { name: "Gun Fest", image: "/sarkar/gun-fest.jpg", url: "/detail/gun-fest.html" },
  { name: "Halloween Lonely Road Racing", image: "/sarkar/halloween-lonely-road-racing.jpg", url: "/detail/halloween-lonely-road-racing.html" },
  { name: "Halloween Skeleton Smash", image: "/sarkar/halloween-skeleton-smash.jpg", url: "/detail/halloween-skeleton-smash.html" },
  { name: "Highway Bike Simulator", image: "/sarkar/highway-bike-simulator.jpg", url: "/detail/highway-bike-simulator.html" },
  { name: "Highway Racer 3d", image: "/sarkar/highway-racer-3d.jpg", url: "/detail/highway-racer-3d.html" },
  { name: "House Of Hazards", image: "/sarkar/house-of-hazards.jpg", url: "/detail/house-of-hazards.html" },
  { name: "Icy Purple Head 2", image: "/sarkar/icy-purple-head-2.jpg", url: "/detail/icy-purple-head-2.html" },
  { name: "Icy Purple Head 3", image: "/sarkar/icy-purple-head-3.jpg", url: "/detail/icy-purple-head-3.html" },
  { name: "Icy Purple Head Superslide", image: "/sarkar/icy-purple-head-superslide.jpg", url: "/detail/icy-purple-head-superslide.html" },
  { name: "Idle Dice", image: "/sarkar/idle-dice.jpg", url: "/detail/idle-dice.html" },
  { name: "Idle Miner", image: "/sarkar/idle-miner.jpg", url: "/detail/idle-miner.html" },
  { name: "Idle Mining Empire", image: "/sarkar/idle-mining-empire.jpg", url: "/detail/idle-mining-empire.html" },
  { name: "Idle Startup Tycoon", image: "/sarkar/idle-startup-tycoon.jpg", url: "/detail/idle-startup-tycoon.html" },
  { name: "Imposter Between Us", image: "/sarkar/imposter-between-us.jpg", url: "/detail/imposter-between-us.html" },
  { name: "Indian Truck Simulator 3d", image: "/sarkar/indian-truck-simulator-3d.jpg", url: "/detail/indian-truck-simulator-3d.html" },
  { name: "Indian Uphill Bus Simulator 3d", image: "/sarkar/indian-uphill-bus-simulator-3d.jpg", url: "/detail/indian-uphill-bus-simulator-3d.html" },
  { name: "Iron Snout", image: "/sarkar/iron-snout.jpg", url: "/detail/iron-snout.html" },
  { name: "Iron Snout 2", image: "/sarkar/iron-snout-2.jpg", url: "/detail/iron-snout-2.html" },
  { name: "Jelly Truck", image: "/sarkar/jelly-truck.jpg", url: "/detail/jelly-truck.html" },
  { name: "Jetpack Joyride", image: "/sarkar/jetpack-joyride.jpg", url: "/detail/jetpack-joyride.html" },
  { name: "Jewel Shuffle", image: "/sarkar/jewel-shuffle.jpg", url: "/detail/jewel-shuffle.html" },
  { name: "Kart Race 3d", image: "/sarkar/kart-race-3d.jpg", url: "/detail/kart-race-3d.html" },
  { name: "Kart Wars", image: "/sarkar/kart-wars.jpg", url: "/detail/kart-wars.html" },
  { name: "Lines To Fill", image: "/sarkar/lines-to-fill.jpg", url: "/detail/lines-to-fill.html" },
  { name: "Ludo Hero", image: "/sarkar/ludo-hero.jpg", url: "/detail/ludo-hero.html" },
  { name: "Mad Gunz", image: "/sarkar/mad-gunz.jpg", url: "/detail/mad-gunz.html" },
  { name: "Mad Truck Challenge Special", image: "/sarkar/mad-truck-challenge-special.jpg", url: "/detail/mad-truck-challenge-special.html" },
  { name: "Madalin Stunt Cars 2", image: "/sarkar/madalin-stunt-cars-2.jpg", url: "/detail/madalin-stunt-cars-2.html" },
  { name: "Madalin Stunt Cars 3", image: "/sarkar/madalin-stunt-cars-3.jpg", url: "/detail/madalin-stunt-cars-3.html" },
  { name: "Magikmon", image: "/sarkar/magikmon.jpg", url: "/detail/magikmon.html" },
  { name: "Make Up Runner", image: "/sarkar/make-up-runner.jpg", url: "/detail/make-up-runner.html" },
  { name: "Mega Ramp Car Stunts", image: "/sarkar/mega-ramp-car-stunts.jpg", url: "/detail/mega-ramp-car-stunts.html" },
  { name: "Merge Alphabet", image: "/sarkar/merge-alphabet.jpg", url: "/detail/merge-alphabet.html" },
  { name: "Merge Cakes", image: "/sarkar/merge-cakes.jpg", url: "/detail/merge-cakes.html" },
  { name: "Merge Cyber Racers", image: "/sarkar/merge-cyber-racers.jpg", url: "/detail/merge-cyber-racers.html" },
  { name: "Merge Master", image: "/sarkar/merge-master.jpg", url: "/detail/merge-master.html" },
  { name: "Merge Rainbow", image: "/sarkar/merge-rainbow.jpg", url: "/detail/merge-rainbow.html" },
  { name: "Merge Round Racers", image: "/sarkar/merge-round-racers.jpg", url: "/detail/merge-round-racers.html" },
  { name: "Microwars", image: "/sarkar/microwars.jpg", url: "/detail/microwars.html" },
  { name: "Monkey Mart", image: "/sarkar/monkey-mart.jpg", url: "/detail/monkey-mart.html" },
  { name: "Monster Tracks", image: "/sarkar/monster-tracks.jpg", url: "/detail/monster-tracks.html" },
  { name: "Moto X3m", image: "/sarkar/moto-x3m.jpg", url: "/detail/moto-x3m.html" },
  { name: "Moto X3m 2", image: "/sarkar/motox3m-2.jpg", url: "/detail/motox3m-2.html" },
  { name: "Moto X3m 3", image: "/sarkar/motox3m-3.jpg", url: "/detail/motox3m-3.html" },
  { name: "Moto X3m 4 Winter", image: "/sarkar/moto-x3m-4-winter.jpg", url: "/detail/moto-x3m-4-winter.html" },
  { name: "Moto X3m 5 Pool Party", image: "/sarkar/moto-x3m-5-pool-party.jpg", url: "/detail/moto-x3m-5-pool-party.html" },
  { name: "Moto X3m Spooky Land", image: "/sarkar/moto-x3m-spooky-land.jpg", url: "/detail/moto-x3m-spooky-land.html" },
  { name: "Motoroadrash3d", image: "/sarkar/motoroadrash3d.jpg", url: "/detail/motoroadrash3d.html" },
  { name: "Mr Bullet", image: "/sarkar/mr-bullet.jpg", url: "/detail/mr-bullet.html" },
  { name: "Murder", image: "/sarkar/murder.jpg", url: "/detail/murder.html" },
  { name: "Nail Stack", image: "/sarkar/nail-stack.jpg", url: "/detail/nail-stack.html" },
  { name: "Off Road Rain Cargo Simulator", image: "/sarkar/off-road-rain-cargo-simulator.jpg", url: "/detail/off-road-rain-cargo-simulator.html" },
  { name: "Offroad Forest Racing", image: "/sarkar/offroad-forest-racing.jpg", url: "/detail/offroad-forest-racing.html" },
  { name: "Offroader V5", image: "/sarkar/offroader-v5.jpg", url: "/detail/offroader-v5.html" },
  { name: "Ovo", image: "/sarkar/ovo.jpg", url: "/detail/ovo.html" },
  { name: "Parking Fury", image: "/sarkar/parking-fury.jpg", url: "/detail/parking-fury.html" },
  { name: "Parking Fury 2", image: "/sarkar/parking-fury-2.jpg", url: "/detail/parking-fury-2.html" },
  { name: "Parking Fury 3", image: "/sarkar/parking-fury-3.jpg", url: "/detail/parking-fury-3.html" },
  { name: "Parking Fury 3d", image: "/sarkar/parking-fury-3d.jpg", url: "/detail/parking-fury-3d.html" },
  { name: "Parking Fury 3d Beach City", image: "/sarkar/parking-fury-3d-beach-city.jpg", url: "/detail/parking-fury-3d-beach-city.html" },
  { name: "Parking Fury 3d Bounty Hunter", image: "/sarkar/parking-fury-3d-bounty-hunter.jpg", url: "/detail/parking-fury-3d-bounty-hunter.html" },
  { name: "Parking Fury 3d Night Thief", image: "/sarkar/parking-fury-3d-night-thief.jpg", url: "/detail/parking-fury-3d-night-thief.html" },
  { name: "Parkour Race", image: "/sarkar/parkour-race.jpg", url: "/detail/parkour-race.html" },
  { name: "Penalty Kick Online", image: "/sarkar/penalty-kick-online.jpg", url: "/detail/penalty-kick-online.html" },
  { name: "Penalty Shooters 2", image: "/sarkar/penalty-shooters-2.jpg", url: "/detail/penalty-shooters-2.html" },
  { name: "Poppy Glamrock", image: "/sarkar/poppy-glamrock.jpg", url: "/detail/poppy-glamrock.html" },
  { name: "Queen Bee", image: "/sarkar/queen-bee.jpg", url: "/detail/queen-bee.html" },
  { name: "Raft Wars", image: "/sarkar/raft-wars.jpg", url: "/detail/raft-wars.html" },
  { name: "Raft Wars 2", image: "/sarkar/raft-wars-2.jpg", url: "/detail/raft-wars-2.html" },
  { name: "Rainbow Stacker", image: "/sarkar/rainbow-stacker.jpg", url: "/detail/rainbow-stacker.html" },
  { name: "Rambling Racer", image: "/sarkar/rambling-racer.jpg", url: "/detail/rambling-racer.html" },
  { name: "Realconstructionexcavatorsimulator", image: "/sarkar/realconstructionexcavatorsimulator.jpg", url: "/detail/realconstructionexcavatorsimulator.html" },
  { name: "Retro Bowl", image: "/sarkar/retro-bowl.jpg", url: "/detail/retro-bowl.html" },
  { name: "Rocket Soccer Derby", image: "/sarkar/rocket-soccer-derby.jpg", url: "/detail/rocket-soccer-derby.html" },
  { name: "Rodeo Stampede Savannah", image: "/sarkar/rodeo-stampede-savannah.jpg", url: "/detail/rodeo-stampede-savannah.html" },
  { name: "Rolling Ball 3d", image: "/sarkar/rolling-ball-3d.jpg", url: "/detail/rolling-ball-3d.html" },
  { name: "Rolling Sky", image: "/sarkar/rolling-sky.jpg", url: "/detail/rolling-sky.html" },
  { name: "Rolly Vortex", image: "/sarkar/rolly-vortex.jpg", url: "/detail/rolly-vortex.html" },
  { name: "Rooftop Snipers", image: "/sarkar/rooftop-snipers.jpg", url: "/detail/rooftop-snipers.html" },
  { name: "Run 3", image: "/sarkar/run-3.jpg", url: "/detail/run-3.html" },
  { name: "Run Rich 3d", image: "/sarkar/run-rich-3d.jpg", url: "/detail/run-rich-3d.html" },
  { name: "Running Fred", image: "/sarkar/running-fred.jpg", url: "/detail/running-fred.html" },
  { name: "Skiing Fred", image: "/sarkar/skiing-fred.jpg", url: "/detail/skiing-fred.html" },
  { name: "Sling Drift", image: "/sarkar/sling-drift.jpg", url: "/detail/sling-drift.html" },
  { name: "Slope", image: "/sarkar/slope.jpg", url: "/detail/slope.html" },
  { name: "Slope 3", image: "/sarkar/slope3.jpg", url: "/detail/slope3.html" },
  { name: "Slope Ball", image: "/sarkar/slope-ball.jpg", url: "/detail/slope-ball.html" },
  { name: "Slope City", image: "/sarkar/slope-city.jpg", url: "/detail/slope-city.html" },
  { name: "Slope Racing 3d", image: "/sarkar/slope-racing-3d.jpg", url: "/detail/slope-racing-3d.html" },
  { name: "Slope Tunnel", image: "/sarkar/slope-tunnel.jpg", url: "/detail/slope-tunnel.html" },
  { name: "Smash Karts", image: "/sarkar/smash-karts.jpg", url: "/detail/smash-karts.html" },
  { name: "Snake", image: "/sarkar/snake.jpg", url: "/detail/snake.html" },
  { name: "Snowcross Stunts X3m", image: "/sarkar/snowcross-stunts-x3m.jpg", url: "/detail/snowcross-stunts-x3m.html" },
  { name: "Soccar", image: "/sarkar/soccar.jpg", url: "/detail/soccar.html" },
  { name: "Spin Master", image: "/sarkar/spin-master.jpg", url: "/detail/spin-master.html" },
  { name: "Sports Bike Racing", image: "/sarkar/sports-bike-racing.jpg", url: "/detail/sports-bike-racing.html" },
  { name: "Stackbounce", image: "/sarkar/stackbounce.jpg", url: "/detail/stackbounce.html" },
  { name: "Stacky Maze", image: "/sarkar/stacky-maze.jpg", url: "/detail/stacky-maze.html" },
  { name: "Stacky Maze 2", image: "/sarkar/stacky-maze-2.jpg", url: "/detail/stacky-maze-2.html" },
  { name: "Stair Race 3d", image: "/sarkar/stair-race-3d.jpg", url: "/detail/stair-race-3d.html" },
  { name: "Stick Merge Halloween", image: "/sarkar/stick-merge-halloween.jpg", url: "/detail/stick-merge-halloween.html" },
  { name: "Stickman Fighter Epic Battle", image: "/sarkar/stickman-fighter-epic-battle.jpg", url: "/detail/stickman-fighter-epic-battle.html" },
  { name: "Stickman Fighter Epic Battle 2", image: "/sarkar/stickman-fighter-epic-battle-2.jpg", url: "/detail/stickman-fighter-epic-battle-2.html" },
  { name: "Stickmanhook", image: "/sarkar/stickmanhook.jpg", url: "/detail/stickmanhook.html" },
  { name: "Stickmerge", image: "/sarkar/stickmerge.jpg", url: "/detail/stickmerge.html" },
  { name: "Stock Car Hero", image: "/sarkar/stock-car-hero.jpg", url: "/detail/stock-car-hero.html" },
  { name: "Stunt Biker 3d", image: "/sarkar/stunt-biker-3d.jpg", url: "/detail/stunt-biker-3d.html" },
  { name: "Stunt Car Challenge 3", image: "/sarkar/stunt-car-challenge-3.jpg", url: "/detail/stunt-car-challenge-3.html" },
  { name: "Subway Surfers", image: "/sarkar/subway-surfers.jpg", url: "/detail/subway-surfers.html" },
  { name: "Subway Surfers Bali", image: "/sarkar/subway-surfers-bali.jpg", url: "/detail/subway-surfers-bali.html" },
  { name: "Subway Surfers Havana", image: "/sarkar/subway-surfers-havana.jpg", url: "/detail/subway-surfers-havana.html" },
  { name: "Subway Surfers Hongkong", image: "/sarkar/subway-surfers-hongkong.jpg", url: "/detail/subway-surfers-hongkong.html" },
  { name: "Subway Surfers Mumbai", image: "/sarkar/subway-surfers-mumbai.jpg", url: "/detail/subway-surfers-mumbai.html" },
  { name: "Subway Surfers New Orleans", image: "/sarkar/subway-surfers-new-orleans.jpg", url: "/detail/subway-surfers-new-orleans.html" },
  { name: "Subway Surfers Nyc", image: "/sarkar/subway-surfers-nyc.jpg", url: "/detail/subway-surfers-nyc.html" },
  { name: "Subway Surfers Singapore", image: "/sarkar/subway-surfers-singapore.jpg", url: "/detail/subway-surfers-singapore.html" },
  { name: "Subway Surfers Venice", image: "/sarkar/subway-surfers-venice.jpg", url: "/detail/subway-surfers-venice.html" },
  { name: "Subway Surfers Winter Holiday", image: "/sarkar/subway-surfers-winter-holiday.jpg", url: "/detail/subway-surfers-winter-holiday.html" },
  { name: "Super Bike The Champion", image: "/sarkar/super-bike-the-champion.jpg", url: "/detail/super-bike-the-champion.html" },
  { name: "Super Mx The Champion", image: "/sarkar/super-mx-the-champion.jpg", url: "/detail/super-mx-the-champion.html" },
  { name: "Super Star Car", image: "/sarkar/super-star-car.jpg", url: "/detail/super-star-car.html" },
  { name: "Superbike Hero", image: "/sarkar/superbike-hero.jpg", url: "/detail/superbike-hero.html" },
  { name: "Survival Race", image: "/sarkar/survival-race.jpg", url: "/detail/survival-race.html" },
  { name: "Swipe Fighter Heroes", image: "/sarkar/swipe-fighter-heroes.jpg", url: "/detail/swipe-fighter-heroes.html" },
  { name: "Tap Tap Shots", image: "/sarkar/tap-tap-shots.jpg", url: "/detail/tap-tap-shots.html" },
  { name: "Temple Of Boom", image: "/sarkar/temple-of-boom.jpg", url: "/detail/temple-of-boom.html" },
  { name: "Temple Run 2", image: "/sarkar/temple-run-2.jpg", url: "/detail/temple-run-2.html" },
  { name: "The Impossible Quiz", image: "/sarkar/the-impossible-quiz.jpg", url: "/detail/the-impossible-quiz.html" },
  { name: "The Impossible Quiz 2", image: "/sarkar/the-impossible-quiz-2.jpg", url: "/detail/the-impossible-quiz-2.html" },
  { name: "The Spear Stickman", image: "/sarkar/the-spear-stickman.jpg", url: "/detail/the-spear-stickman.html" },
  { name: "The Speed Ninja", image: "/sarkar/the-speed-ninja.jpg", url: "/detail/the-speed-ninja.html" },
  { name: "There Is No Game", image: "/sarkar/there-is-no-game.jpg", url: "/detail/there-is-no-game.html" },
  { name: "Thumb Fighter", image: "/sarkar/thumb-fighter.jpg", url: "/detail/thumb-fighter.html" },
  { name: "Tiny Cars", image: "/sarkar/tiny-cars.jpg", url: "/detail/tiny-cars.html" },
  { name: "Tiny Fishing", image: "/sarkar/tiny-fishing.jpg", url: "/detail/tiny-fishing.html" },
  { name: "Top Speed 3d", image: "/sarkar/top-speed-3d.jpg", url: "/detail/top-speed-3d.html" },
  { name: "Traffic Jam 3d", image: "/sarkar/traffic-jam-3d.jpg", url: "/detail/traffic-jam-3d.html" },
  { name: "Traffic Mania", image: "/sarkar/traffic-mania.jpg", url: "/detail/traffic-mania.html" },
  { name: "Traffic Rush", image: "/sarkar/traffic-rush.jpg", url: "/detail/traffic-rush.html" },
  { name: "Tricks", image: "/sarkar/tricks.jpg", url: "/detail/tricks.html" },
  { name: "Tunnel Rush", image: "/sarkar/tunnel-rush.jpg", url: "/detail/tunnel-rush.html" },
  { name: "Tunnel Rush 2", image: "/sarkar/tunnel-rush-2.jpg", url: "/detail/tunnel-rush-2.html" },
  { name: "Two Ball 3d", image: "/sarkar/two-ball-3d.jpg", url: "/detail/two-ball-3d.html" },
  { name: "Two Ball 3d Dark", image: "/sarkar/two-ball-3d-dark.jpg", url: "/detail/two-ball-3d-dark.html" },
  { name: "Two Tunnel 3d", image: "/sarkar/two-tunnel-3d.jpg", url: "/detail/two-tunnel-3d.html" },
  { name: "Ultimate Car Arena", image: "/sarkar/ultimate-car-arena.jpg", url: "/detail/ultimate-car-arena.html" },
  { name: "Ultimate Offroad Cars 2", image: "/sarkar/ultimate-offroad-cars-2.jpg", url: "/detail/ultimate-offroad-cars-2.html" },
  { name: "Vex3", image: "/sarkar/vex3.jpg", url: "/detail/vex3.html" },
  { name: "Vex4", image: "/sarkar/vex4.jpg", url: "/detail/vex4.html" },
  { name: "Vex5", image: "/sarkar/vex5.jpg", url: "/detail/vex5.html" },
  { name: "Vex6", image: "/sarkar/vex6.jpg", url: "/detail/vex6.html" },
  { name: "Vex7", image: "/sarkar/vex7.jpg", url: "/detail/vex7.html" },
  { name: "Weapon", image: "/sarkar/weapon.jpg", url: "/detail/weapon.html" },
  { name: "Worlds Hardest Game", image: "/sarkar/worlds-hardest-game.jpg", url: "/detail/worlds-hardest-game.html" },
  { name: "Worlds Hardest Game 2", image: "/sarkar/worlds-hardest-game-2.jpg", url: "/detail/worlds-hardest-game-2.html" },
  { name: "Worlds Hardest Game 3", image: "/sarkar/worlds-hardest-game-3.jpg", url: "/detail/worlds-hardest-game-3.html" },
  { name: "Wrassling", image: "/sarkar/wrassling.jpg", url: "/detail/wrassling.html" }
];

// ...rest of your search logic (no changes needed)s
// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    if (!searchInput || !searchResults) {
        console.error('Search elements not found!');
        return;
    }

    // Search functionality
    searchInput.addEventListener('input', function () {
        const query = this.value.trim().toLowerCase();
        searchResults.innerHTML = '';
        
        if (query.length === 0) {
            searchResults.style.display = 'none';
            return;
        }

        // Filter games
        const filtered = games.filter(game =>
            game.name.toLowerCase().includes(query)
        );

        if (filtered.length === 0) {
            searchResults.innerHTML = '<div style="padding:15px;text-align:center;color:#666;">No results found</div>';
        } else {
            // Show up to 6 results
            filtered.slice(0, 6).forEach(game => {
                const a = document.createElement('a');
                a.href = game.url;
                a.style.cssText = `
                    display: flex;
                    align-items: center;
                    padding: 10px 15px;
                    text-decoration: none;
                    color: #333;
                    border-bottom: 1px solid #eee;
                    transition: background-color 0.2s;
                `;
                
                a.onmouseover = () => a.style.backgroundColor = '#f8f9fa';
                a.onmouseout = () => a.style.backgroundColor = 'transparent';
                
                a.innerHTML = `
                    <div style="
                        width: 30px;
                        height: 30px;
                        background: linear-gradient(45deg, #4f46e5, #7c3aed);
                        border-radius: 6px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                        font-weight: bold;
                        margin-right: 12px;
                        font-size: 12px;
                    ">${game.name.charAt(0)}</div>
                    <span>${game.name}</span>
                `;
                
                searchResults.appendChild(a);
            });
        }
        
        searchResults.style.display = 'block';
    });

    // Hide results when clicking outside
    document.addEventListener('click', function (e) {
        if (!searchResults.contains(e.target) && e.target !== searchInput) {
            searchResults.style.display = 'none';
        }
    });

    console.log('✅ Search functionality loaded with', games.length, 'games');
});
// Support both desktop and mobile search bars
document.addEventListener('DOMContentLoaded', function() {
  function setupSearch(inputId, resultsId) {
    const searchInput = document.getElementById(inputId);
    const searchResults = document.getElementById(resultsId);
    if (!searchInput || !searchResults) return;

    searchInput.addEventListener('input', function () {
      const query = this.value.trim().toLowerCase();
      searchResults.innerHTML = '';
      if (query.length === 0) {
        searchResults.style.display = 'none';
        return;
      }
      const filtered = games.filter(game =>
        game.name.toLowerCase().includes(query)
      );
      if (filtered.length === 0) {
        searchResults.innerHTML = '<div style="padding:15px;text-align:center;color:#666;">No results found</div>';
      } else {
        filtered.slice(0, 6).forEach(game => {
          const a = document.createElement('a');
          a.href = game.url;
          a.style.cssText = `
            display: flex;
            align-items: center;
            padding: 10px 15px;
            text-decoration: none;
            color: #333;
            border-bottom: 1px solid #eee;
            transition: background-color 0.2s;
          `;
          a.onmouseover = () => a.style.backgroundColor = '#f8f9fa';
          a.onmouseout = () => a.style.backgroundColor = 'transparent';
          a.innerHTML = `<img src="${game.image}" alt="${game.name}" style="width:32px;height:32px;margin-right:12px;border-radius:8px;">${game.name}`;
          searchResults.appendChild(a);
        });
      }
      searchResults.style.display = 'block';
    });

    // Hide results when clicking outside
    document.addEventListener('click', function (e) {
      if (!searchResults.contains(e.target) && e.target !== searchInput) {
        searchResults.style.display = 'none';
      }
    });
  }

  setupSearch('search-input', 'search-results');
  setupSearch('search-input-mobile', 'search-results-mobile');
});