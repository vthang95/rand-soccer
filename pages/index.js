import classnames from "classnames";
import dayjs from "dayjs";
import { shuffle } from "lodash";
import fs from "fs";

import Player from "../components/Player";
import Style from "./main.module.sass";

const list = [
    {
        "name": "NAM ANH",
        "tier": 1,
        "pos": "GK",
        "point": 0
    },
    {
        "name": "DRACO",
        "tier": 3,
        "pos": "GK",
        "point": 0
    },
    {
        "name": "VIET",
        "tier": 1,
        "pos": "GK",
        "point": 0
    },
    {
        "name": "ALFRED",
        "tier": 2,
        "pos": "GK",
        "point": 0
    },
    {
        "name": "TOAN",
        "tier": 3,
        "pos": "GK",
        "point": 0
    },
    {
        "name": "VTHANG",
        "tier": 2,
        "pos": "GK",
        "point": 0
    },
    {
        "name": "TU LUU",
        "tier": 2,
        "pos": "GK",
        "point": 0
    },
    {
        "name": "TAN TOM",
        "tier": 2,
        "pos": "GK",
        "point": 0
    },
    {
        "name": "CUONG",
        "tier": 2,
        "pos": "GK",
        "point": 0
    },
    {
        "name": "TUNG DO",
        "tier": 2,
        "pos": "GK",
        "point": 0
    },
    {
        "name": "PHAN TUNG",
        "tier": 3,
        "pos": "GK",
        "point": 0
    },
    {
        "name": "SON HO",
        "tier": 3,
        "pos": "GK",
        "point": 0
    },
    {
        "name": "TRUONG",
        "tier": 3,
        "pos": "GK",
        "point": 0
    },
    {
        "name": "TOBY",
        "tier": 3,
        "pos": "GK",
        "point": 0
    },
    {
        "name": "DAT",
        "tier": 3,
        "pos": "GK",
        "point": 0
    },
    {
        "name": "MEDEN",
        "tier": 2,
        "pos": "GK",
        "point": 0
    },
    {
        "name": "VICTOR",
        "tier": 2,
        "pos": "GK",
        "point": 0
    },
    {
        "name": "TUAN NGUYEN",
        "tier": 2,
        "pos": "GK",
        "point": 0
    },
    {
        "name": "ANH TUNG",
        "tier": 3,
        "pos": "GK",
        "point": 0
    },
    {
        "name": "Q.T. DUC",
        "tier": 2,
        "pos": "GK",
        "point": 0
    },
    {
        "name": "KATIE",
        "tier": 2,
        "pos": "GK",
        "point": 0
    },
    {
        "name": "SON",
        "tier": 2,
        "pos": "GK",
        "point": 0
    },
    {
        "name": "PENDRAGON",
        "tier": 2,
        "pos": "GK",
        "point": 0
    },
    {
        "name": "KHANH HAN",
        "tier": 2,
        "pos": "GK",
        "point": 0
    }
]

const position = {
  0: "GK",
  1: "CB",
  2: "LB",
  3: "RB",
  4: "CM",
  5: "LW",
  6: "RW",
}

const rand = (obj, day) => {
  if (obj[day]) return;
  const team1 = [
    {
      "name": "KURAMA",
      "tier": 1,
      "pos": "GK",
      "point": 0
    }
  ];
  const team2 = [
    {
      "name": "TU",
      "tier": 1,
      "pos": "GK",
      "point": 0
    },
  ];

  const tier1 = shuffle(list.filter((p) => p.tier === 1));
  const tier2 = shuffle(list.filter((p) => p.tier === 2));
  const tier3 = shuffle(list.filter((p) => p.tier === 3));
  tier1.forEach((p, idx) => {
    if (idx % 2 === 0) team1.push({ ...p, pos: position[team1.length] || "SUB" });
    else team2.push({ ...p, pos: position[team2.length] || "SUB" });
  })
  tier2.forEach((p, idx) => {
    if (idx % 2 === 0) team1.push({ ...p, pos: position[team1.length] || "SUB" });
    else team2.push({ ...p, pos: position[team2.length] || "SUB" });
  })
  tier3.forEach((p, idx) => {
    if (idx % 2 === 0) team1.push({ ...p, pos: position[team1.length] || "SUB" });
    else team2.push({ ...p, pos: position[team2.length] || "SUB" });
  })

  obj[day] = {
    team1: team1.slice(0, 7), team2: team2.slice(0, 7),
    sub1: team1.slice(7), sub2: team2.slice(7)
  };
}

const Index = (props) => {
  const { day, team1, team2, sub1, sub2 } = props;

  return (
    <div>
      <div className={Style.wrapper}>
        <div className={Style.day}>{day}</div>
        <div className={Style.container}>
          <div className={classnames(Style.half, Style.halfUp)}>
            {
              team1.slice(0, 7).map((player, idx) => {
                return <Player tier={player.tier} up={true} key={idx} name={player.name} pos={player.pos} point={player.point} />
              })
            }
            <div className={Style.sub}>
              <div className={Style.subItem}>Substitution</div>
              {
                sub1.map((sub, idx) => {
                  return <div key={idx} className={Style.subItem}>[{sub.tier}]{sub.name}</div>
                })
              }
            </div>
          </div>
          <div className={classnames(Style.circle, Style.top)}></div>
          <div className={classnames(Style.circle, Style.mid)}></div>
          <div className={classnames(Style.circle, Style.bottom)}></div>
          <div className={classnames(Style.half, Style.halfDown)}>
            {
              team2.slice(0, 7).map((player, idx) => {
                console.log("player,", player)
                return <Player tier={player.tier} down={true} key={idx} name={player.name} pos={player.pos} point={player.point} />
              })
            }
            <div className={Style.sub}>
              <div className={Style.subItem}>Substitution</div>
              {
                sub2.map((sub, idx) => {
                  return <div key={idx} className={Style.subItem}>[{sub.tier}]{sub.name}</div>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const day = dayjs().format("YYYY-MM-DD");
  let obj
  try {
    obj = JSON.parse(fs.readFileSync("rand.json", {encoding:'utf8'}));
  } catch {
    obj = {};
  }
  console.log("boobobo", obj);
  if (!obj[day]) rand(obj, day);
  const { team1, team2, sub1, sub2 } = obj[day];
  fs.writeFileSync("rand.json", JSON.stringify(obj))

  return {
    props: {day, team1, team2, sub1, sub2}, // will be passed to the page component as props
  }
}

export default Index;
