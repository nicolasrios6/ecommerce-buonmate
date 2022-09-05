import { Link } from 'react-router-dom'
import './Blocks.scss'

const Blocks = () => {
    return (
        <div className='containerBlocks'>

            <div className='containerBlocks__left'>
                <div className='containerBlocks__left__mates'>
                    <h3>Mates</h3>
                    <Link to={'/products/mates'} href='#'>Ver mas</Link>
                </div>
            </div>

            <div className='containerBlocks__right'>
                <div className='containerBlocks__right__top'>
                    <div className='containerBlocks__right__top__accesorios'>
                        <h3>Accesorios</h3>
                        <Link to={'/products/accesorios'} href='#'>Ver mas</Link>
                    </div>
                    <div className='containerBlocks__right__top__bombillas'>
                        <h3>Bombillas</h3>
                        <Link to={'/products/bombillas'} href='#'>Ver mas</Link>
                    </div>
                </div>
                <div className='containerBlocks__right__bottom'>
                    <div className='containerBlocks__right__bottom__yerbas'>
                        <h3>Yerbas</h3>
                        <Link to={'/products/yerbas'} href='#'>Ver mas</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blocks