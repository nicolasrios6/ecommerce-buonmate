import './Item.scss'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


const Item = ({title, price, img, id}) => {
    // console.log('producto id: ',id)
    return (
        <Card sx={{ maxWidth: 345 }}>
            <Link to={`/product/${id}`}>
            <CardMedia
            component="img"
            height="400"
            image={`/${img}`}
            alt="mate torpedo"
            />
            </Link>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {`${title}`}
            </Typography>
            <Typography variant="body1">
                ${`${price}`}
            </Typography>
            </CardContent>
            <CardActions className='btnCont'>
                <Button size="small"><Link to={`/product/${id}`} className='viewDetail'>Ver detalle</Link></Button>
            </CardActions>
      </Card>
    )
}

export default Item