import CreditCardIcon from '@mui/icons-material/CreditCard';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GppGoodIcon from '@mui/icons-material/GppGood';
import './Info2.scss'

const Info2 = () => {
    return(
        <>
            <div className="info2">
                <div className="info2__cont">
                    <CreditCardIcon className="info2__cont__icon"/>
                    <p className="info2__cont__title">ENVIOS A TODO EL PAIS</p>
                    <p className="info2__cont__data">COMPRA SIN SALIR DE TU CASA</p>
                </div>

                <div className="info2__cont">
                    <WhatsAppIcon className="info2__cont__icon"/>
                    <p className="info2__cont__title">20% DE DESCUENTO</p>
                    <p className="info2__cont__data">PAGANDO EN EFECTIVO/TRANSFERENCIA</p>
                </div>

                <div className="info2__cont">
                    <GppGoodIcon className="info2__cont__icon"/>
                    <p className="info2__cont__title">HASTA 3 CUOTAS SIN INTERES</p>
                    <p className="info2__cont__data">MEDIANTE MERCADO PAGO</p>
                </div>
            </div>
        </>
    )
}

export default Info2