import Style from "./player.module.sass";
import classnames from "classnames";

// [GK, CB, LB, RB, CM, LW, RW, CF]

const Player = (props) => {
  const { name, point, pos, up, down } = props || {};
  return (
    <div className={
      classnames(
        Style.player,
        Style[`${pos}`],
        { [`${Style.up}`]: up, [`${Style.down}`]: down }
      )
    }>
      <div className={Style.playerContainer}>
        <div className={Style.point}>{point}</div>
        <div className={Style.name}>[{pos}]. {name}</div>
      </div>
    </div>
  );
};

export default Player;
