import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import './Info1.scss'

const Info1 = () => {
    return(
        <div className="info">
           <div className="info__cont">
                <LocalShippingIcon className="info__cont__icon"/>
                <p className="info__cont__title">ENVIOS A TODO EL PAIS</p>
                <p className="info__cont__data">COMPRA SIN SALIR DE TU CASA</p>
           </div>

           <div className="info__cont">
                <LocalOfferIcon className="info__cont__icon"/>
                <p className="info__cont__title">20% DE DESCUENTO</p>
                <p className="info__cont__data">PAGANDO EN EFECTIVO/TRANSFERENCIA</p>
           </div>

           <div className="info__cont">
                <CreditCardIcon className="info__cont__icon"/>
                <p className="info__cont__title">HASTA 3 CUOTAS SIN INTERES</p>
                <p className="info__cont__data">MEDIANTE MERCADO PAGO</p>
           </div>
        </div>
    )
}

export default Info1