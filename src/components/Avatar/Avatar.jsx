import style from "./Avatar.module.css";


const Avatar = ({source, isBordered=true}) => {
     return (
        <img className={isBordered ? style.avatarWithBorder : style.avatar}
            src={source}
         />
     )
}

export default Avatar;