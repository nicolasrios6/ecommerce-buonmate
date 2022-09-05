import './Footer.scss'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return(
        <div className='footer'>
            <p className='footer__title'>Contacto</p>
            <div className='footer__container'>
                <p className='footer__container__info'>buon.mate@gmail.com</p>
                <p className='footer__container__divider'>|</p>
                <p className='footer__container__info'>+5492613031702</p>
                <p className='footer__container__divider'>|</p>
                <p className='footer__container__info'>Azcuénaga 1451, Guaymallén, Mendoza.</p>
            </div>
            <ul className='footer__socialMedia'>
                <li><a href='#'><WhatsAppIcon className='socialMedia__icons' /></a></li>
                <li><a href='#'><FacebookIcon className='socialMedia__icons' /></a></li>
                <li><a href='#'><InstagramIcon className='socialMedia__icons' /></a></li>
            </ul>
            <p className='footer__copy'>© Buon Mate</p>
        </div>
    )
}

export default Footer