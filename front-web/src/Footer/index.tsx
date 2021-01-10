import './style.css'
import {ReactComponent as YoutubeIcon} from './youtube.svg'
import {ReactComponent as InstagramIcon} from './instagram.svg'
import {ReactComponent as LikedinIcon} from './linkedin.svg'

function Footer(){
    return (
       <footer className="main-footer">
           App desenvolvido duran 2ª ed. do evento <b>Semana DevSuperior</b>
           <div className="footer-icons">
               <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                    <YoutubeIcon/>
               </a>
               <a href="https://www.linkedin.com/school/devsuperior/" target="_new">
                    <InstagramIcon/>
               </a>
               <a href="https://www.instagram.com/devsuperior.ig/" target="_new">
                    <LikedinIcon/>
               </a>
           </div>
       </footer>   
    )
}
export default Footer;