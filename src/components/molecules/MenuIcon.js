import vvv from '../../images/placeholders/regular_images/regular_03.jpg';

function MenuIcon() {
  return (
    <figure id="menuToggle_icon" 
        className="flex items-center justify-center
            w2-50 h2-50
            ba b--blue0 br5-00"
    >
        <img src={vvv}
            alt="menuOpenToggle" 
            className=" 
                pa0-50 br5-0 
                blue0"
        />
    </figure>
  )
}

export default MenuIcon
