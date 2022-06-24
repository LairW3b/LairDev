import style from '../styles/components/Burger.module.scss'

const Burger = ({click, handleClick}) => {
  return (
    <div className={style.burger}>
      <div 
        onClick={handleClick}
        className={`
          ${style.nav} 
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