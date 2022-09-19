import style from '../styles/Burger.module.css'

const Burger = ({click, handleClick}) => {
  return (
    <div className={style.burger_nav}>
      <div 
        onClick={handleClick}
        className={`
          ${style.burger} 
          ${click ? style.open : ''}
        `}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default Burger