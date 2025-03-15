
import chef from '../assets/chef.jpg'

const Header = () => {
    return (
        <header>
            <div className='logo-container'>
                <img src={chef} alt='chef image' className='logo-img'/>
                <h1>Chef AI</h1>
            </div>
        </header>
    )
}

export default Header