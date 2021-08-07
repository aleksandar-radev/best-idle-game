/* eslint-disable */
let i = 0
const newMat = (props) => {
  if (props.drop === undefined) props.drop = 1

  return {
    index: i++,
    drop: props.drop, // Could add a materials that drops 2+
    quantity: 0,
    totalDropped: 0,
    sellPrice: props.sp,
    buyPrice: props.bp,
    health: props.hp,
    xp: props.xp
  }
}

// i -> index
// hp -> health points
// xp -> experience points
// sp -> sell price
// bp -> buy price
const materials = {
  stone            : newMat({ hp: 20     , xp: 1    , sp: 1    , bp: 5       }),
  ironOre          : newMat({ hp: 50     , xp: 3    , sp: 2    , bp: 8       }),
  copper           : newMat({ hp: 40     , xp: 2    , sp: 2    , bp: 6       }),
  silver           : newMat({ hp: 100    , xp: 5    , sp: 3    , bp: 10      }),
  gold             : newMat({ hp: 200    , xp: 20   , sp: 20   , bp: 45      }),
  platinum         : newMat({ hp: 300    , xp: 50   , sp: 8    , bp: 20      }),
  lead             : newMat({ hp: 500    , xp: 100  , sp: 8    , bp: 15      }),
  titanium         : newMat({ hp: 800    , xp: 175  , sp: 15   , bp: 28      }),
  bronze           : newMat({ hp: 400    , xp: 65   , sp: 10   , bp: 25      }),
  chromite         : newMat({ hp: 500    , xp: 80   , sp: 15   , bp: 30      }),
  cobalt           : newMat({ hp: 450    , xp: 75   , sp: 12   , bp: 27      }),
  diamond          : newMat({ hp: 1000   , xp: 250  , sp: 1000 , bp: 3370    }),
  lithium          : newMat({ hp: 700    , xp: 110  , sp: 300  , bp: 1200    }),
  manganese        : newMat({ hp: 300    , xp: 40   , sp: 100  , bp: 350     }),
  nickel           : newMat({ hp: 900    , xp: 300  , sp: 700  , bp: 2300    }),
  quartz           : newMat({ hp: 400    , xp: 280  , sp: 110  , bp: 1000    }),
  zinc             : newMat({ hp: 1400   , xp: 420  , sp: 230  , bp: 880     }),
  perlite          : newMat({ hp: 2200   , xp: 450  , sp: 500  , bp: 3600    }),
  pyrite           : newMat({ hp: 3200   , xp: 640  , sp: 480  , bp: 1300    }),
  obsidian         : newMat({ hp: 6000   , xp: 200  , sp: 120  , bp: 150     }),
  azurite          : newMat({ hp: 2900   , xp: 600  , sp: 380  , bp: 1100    }),
  amethyst         : newMat({ hp: 4500   , xp: 500  , sp: 600  , bp: 2000    }),
  ruby             : newMat({ hp: 8000   , xp: 1000 , sp: 1000 , bp: 6500    }),
  sapphire         : newMat({ hp: 9500   , xp: 1200 , sp: 700  , bp: 5600    }),
  emerald          : newMat({ hp: 6700   , xp: 800  , sp: 900  , bp: 4200    }),
  amber            : newMat({ hp: 12000  , xp: 2000 , sp: 1200 , bp: 8000    }),
  citrine          : newMat({ hp: 4800   , xp: 370  , sp: 500  , bp: 1000    }),
  turquoise        : newMat({ hp: 15800  , xp: 1200 , sp: 2500 , bp: 10000   }),
  topaz            : newMat({ hp: 28000  , xp: 2000 , sp: 3000 , bp: 10000   }),
  aquamarine       : newMat({ hp: 14000  , xp: 800  , sp: 900  , bp: 8000    }),
  sunstone         : newMat({ hp: 10000  , xp: 500  , sp: 1000 , bp: 2000    }),
  moonstone        : newMat({ hp: 10000  , xp: 500  , sp: 1000 , bp: 2000    }),
  bloodstone       : newMat({ hp: 10000  , xp: 500  , sp: 1000 , bp: 2000    }),
  onyx             : newMat({ hp: 45000  , xp: 4000 , sp: 4000 , bp: 32000   }),
  sulfur           : newMat({ hp: 19000  , xp: 750  , sp: 1400 , bp: 6000    }),
  uranium          : newMat({ hp: 1      , xp: 1    , sp: 10000, bp: 100000  }),
  zeolite          : newMat({ hp: 80000  , xp: 2600 , sp: 6000 , bp: 22000   }),
  lapisLazuli      : newMat({ hp: 64000  , xp: 1800 , sp: 3200 , bp: 32000   }),
  cavansite        : newMat({ hp: 120000 , xp: 4000 , sp: 8000 , bp: 45000   }),
  garnet           : newMat({ hp: 99999  , xp: 1999 , sp: 999  , bp: 9999    }),
  howlite          : newMat({ hp: 170000 , xp: 6500 , sp: 4800 , bp: 9500    }),
  zircon           : newMat({ hp: 280000 , xp: 10000, sp: 10000, bp: 80000   }),
  tanzanite        : newMat({ hp: 540000 , xp: 16000, sp: 12000, bp: 140000  }),
  blackStarDiopside: newMat({ hp: 1800000, xp: 50000, sp: 99999, bp: 1000000 })
}

export default materials
