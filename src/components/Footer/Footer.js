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
                <li><a href='https://api.whatsapp.com/send/?phone=5492613031702&text&type=phone_number&app_absent=0' target='_blank'><WhatsAppIcon className='socialMedia__icons' /></a></li>
                <li><a href='https://www.facebook.com/buon.mate.7' target='_blank'><FacebookIcon className='socialMedia__icons' /></a></li>
                <li><a href='https://www.instagram.com/buon.mate/' target='_blank'><InstagramIcon className='socialMedia__icons' /></a></li>
            </ul>
            <p className='footer__copy'>© Buon Mate</p>
        </div>
    )
}

export default Footer