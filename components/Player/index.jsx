import Style from "./player.module.sass";
import classnames from "classnames";

// [GK, CB, LB, RB, CM, LW, RW, CF]

const Player = (props) => {
  const { name, pos, up, down, tier } = props || {};
  return (
    <div className={
      classnames(
        Style.player,
        Style[`${pos}`],
        { [`${Style.up}`]: up, [`${Style.down}`]: down },
        {
          [`${Style[`tier-${tier}`]}`]: true
        }
      )
    }>
      <div className={Style.playerContainer}>
        <div className={Style.point}>{tier}</div>
        <div className={Style.name}>
          <span className={Style.tier}>[*].</span>
          <span>{name}</span>
        </div>
      </div>
    </div>
  );
};

export default Player;
