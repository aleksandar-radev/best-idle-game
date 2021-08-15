/* eslint-disable */
let i = 0

const newMat = (props) => {
  return {
    name: props.name,
    index: i++,
    name: props.name,
    drop: props.drop ?? 1, // Could add a materials that drops 2+
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
  stone             : newMat({ name: 'stone'            , hp: 20      , xp: 1     , sp: 1     , bp: 5       }),
  ironOre           : newMat({ name: 'ironOre'          , hp: 50      , xp: 3     , sp: 2     , bp: 8       }),
  copper            : newMat({ name: 'copper'           , hp: 40      , xp: 2     , sp: 2     , bp: 6       }),
  silver            : newMat({ name: 'silver'           , hp: 100     , xp: 5     , sp: 3     , bp: 10      }),
  gold              : newMat({ name: 'gold'             , hp: 200     , xp: 20    , sp: 20    , bp: 45      }),
  platinum          : newMat({ name: 'platinum'         , hp: 300     , xp: 50    , sp: 8     , bp: 20      }),
  lead              : newMat({ name: 'lead'             , hp: 500     , xp: 100   , sp: 8     , bp: 15      }),
  titanium          : newMat({ name: 'titanium'         , hp: 800     , xp: 175   , sp: 15    , bp: 28      }),
  bronze            : newMat({ name: 'bronze'           , hp: 400     , xp: 65    , sp: 10    , bp: 25      }),
  chromite          : newMat({ name: 'chromite'         , hp: 500     , xp: 80    , sp: 15    , bp: 30      }),
  cobalt            : newMat({ name: 'cobalt'           , hp: 450     , xp: 75    , sp: 12    , bp: 27      }),
  diamond           : newMat({ name: 'diamond'          , hp: 1000    , xp: 250   , sp: 1000  , bp: 3370    }),
  lithium           : newMat({ name: 'lithium'          , hp: 700     , xp: 110   , sp: 300   , bp: 1200    }),
  manganese         : newMat({ name: 'manganese'        , hp: 300     , xp: 40    , sp: 100   , bp: 350     }),
  nickel            : newMat({ name: 'nickel'           , hp: 900     , xp: 300   , sp: 700   , bp: 2300    }),
  quartz            : newMat({ name: 'quartz'           , hp: 400     , xp: 280   , sp: 110   , bp: 1000    }),
  zinc              : newMat({ name: 'zinc'             , hp: 1400    , xp: 420   , sp: 230   , bp: 880     }),
  perlite           : newMat({ name: 'perlite'          , hp: 2200    , xp: 450   , sp: 500   , bp: 3600    }),
  pyrite            : newMat({ name: 'pyrite'           , hp: 3200    , xp: 640   , sp: 480   , bp: 1300    }),
  obsidian          : newMat({ name: 'obsidian'         , hp: 6000    , xp: 200   , sp: 120   , bp: 150     }),
  azurite           : newMat({ name: 'azurite'          , hp: 2900    , xp: 600   , sp: 380   , bp: 1100    }),
  amethyst          : newMat({ name: 'amethyst'         , hp: 4500    , xp: 500   , sp: 600   , bp: 2000    }),
  ruby              : newMat({ name: 'ruby'             , hp: 8000    , xp: 1000  , sp: 1000  , bp: 6500    }),
  sapphire          : newMat({ name: 'sapphire'         , hp: 9500    , xp: 1200  , sp: 700   , bp: 5600    }),
  emerald           : newMat({ name: 'emerald'          , hp: 6700    , xp: 800   , sp: 900   , bp: 4200    }),
  amber             : newMat({ name: 'amber'            , hp: 12000   , xp: 2000  , sp: 1200  , bp: 8000    }),
  citrine           : newMat({ name: 'citrine'          , hp: 4800    , xp: 370   , sp: 500   , bp: 1000    }),
  turquoise         : newMat({ name: 'turquoise'        , hp: 15800   , xp: 1200  , sp: 2500  , bp: 10000   }),
  topaz             : newMat({ name: 'topaz'            , hp: 28000   , xp: 2000  , sp: 3000  , bp: 10000   }),
  aquamarine        : newMat({ name: 'aquamarine'       , hp: 14000   , xp: 800   , sp: 900   , bp: 8000    }),
  sunstone          : newMat({ name: 'sunstone'         , hp: 10000   , xp: 500   , sp: 1000  , bp: 2000    }),
  moonstone         : newMat({ name: 'moonstone'        , hp: 10000   , xp: 500   , sp: 1000  , bp: 2000    }),
  bloodstone        : newMat({ name: 'bloodstone'       , hp: 10000   , xp: 500   , sp: 1000  , bp: 2000    }),
  onyx              : newMat({ name: 'onyx'             , hp: 45000   , xp: 4000  , sp: 4000  , bp: 32000   }),
  sulfur            : newMat({ name: 'sulfur'           , hp: 19000   , xp: 750   , sp: 1400  , bp: 6000    }),
  uranium           : newMat({ name: 'uranium'          , hp: 1       , xp: 1     , sp: 10000 , bp: 100000  }),
  zeolite           : newMat({ name: 'zeolite'          , hp: 80000   , xp: 2600  , sp: 6000  , bp: 22000   }),
  lapisLazuli       : newMat({ name: 'lapisLazuli'      , hp: 64000   , xp: 1800  , sp: 3200  , bp: 32000   }),
  cavansite         : newMat({ name: 'cavansite'        , hp: 120000  , xp: 4000  , sp: 8000  , bp: 45000   }),
  garnet            : newMat({ name: 'garnet'           , hp: 99999   , xp: 1999  , sp: 999   , bp: 9999    }),
  howlite           : newMat({ name: 'howlite'          , hp: 170000  , xp: 6500  , sp: 4800  , bp: 9500    }),
  zircon            : newMat({ name: 'zircon'           , hp: 280000  , xp: 10000 , sp: 10000 , bp: 80000   }),
  tanzanite         : newMat({ name: 'tanzanite'        , hp: 540000  , xp: 16000 , sp: 12000 , bp: 140000  }),
  blackStarDiopside : newMat({ name: 'blackStarDiopside', hp: 1800000 , xp: 50000 , sp: 99999 , bp: 1000000 })
}

export default materials
