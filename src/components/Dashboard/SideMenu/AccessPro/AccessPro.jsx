import classes from './styles.module.scss';

export default function AccessPro() {
  const handleClick = () => {
    console.log('access button click')
  };

  return (
    <div className={classes.AccessPro}>
      <p>Upgrade to  PRO to get access all Features!</p>
      <button type='button' onClick={handleClick}>Get Pro Now!</button>
    </div>
  )
}