import "./NavBar.scss";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DeleteIcon from '@mui/icons-material/Delete';
//---//
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
//---Context---//
import {useContext} from "react";
import CartContext from "../../context/CartContext";
//---Modal---//
import Modal from "../Modal/Modal";
import { TextField } from "@mui/material";

const drawerWidth = 240;

const NavBar = (props) => {
const {cartListItems, deleteItem, totalPrice} = useContext(CartContext)


  // ----Nested List---- //
  const [openList, setOpenList] = useState(true);

  const handleClickList = () => {
    setOpenList(!openList);
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // ----Cart---- //

  const [mobileOpenCart, setMobileOpenCart] = useState(false);

  const handleCartToggle = () => {
    setMobileOpenCart(!mobileOpenCart);
  };

  // --- Contact Form --- //

  const [showModal, setShowModal] = useState(false)

  const drawer = (
    <Box sx={{ textAlign: "center" }} className="containerDrawer">
      <CloseIcon onClick={handleDrawerToggle} className="closeIcon" />
      <Divider />
      <div className="containerDrawer__links">
        <Button
          onClick={handleDrawerToggle}
          className="containerDrawer__links__btn"
        >
          <Link to={'/'}>Home</Link>
        </Button>
        <Button
          className="containerDrawer__links__btn"
          onClick={handleClickList}
        >
          <a>Productos</a>
          {openList ? <ExpandLess /> : <ExpandMore />}
        </Button>
        <Collapse in={openList} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} className="listLinks">
              <ListItem className="listLinks__link" onClick={handleDrawerToggle}>
                <Link to={'/products'}>Ver todo</Link>
              </ListItem>
              <ListItem className="listLinks__link" onClick={handleDrawerToggle}>
                <Link to={'/products/mates'}>Mates</Link>
              </ListItem>
              <ListItem className="listLinks__link" onClick={handleDrawerToggle}>
                <Link to={'/products/accesorios'}>Accesorios</Link>
              </ListItem>
              <ListItem className="listLinks__link" onClick={handleDrawerToggle}>
                <Link to={'/products/bombillas'}>Bombillas</Link>
              </ListItem>
              <ListItem className="listLinks__link" onClick={handleDrawerToggle}>
                <Link to={'/products/yerbas'}>Yerbas</Link>
              </ListItem>
            </ListItemButton>
          </List>
        </Collapse>

        <Button onClick={() => setShowModal(true)} className="containerDrawer__links__btn">
          <a>Contacto</a>
        </Button>
        <Modal title={'Formulario de contacto'} open={showModal} handleClose={() => setShowModal(false)}>
                <form className='form'>
                  <p className='form__title'>Completa el formulario y en breve nos comunicamos con vos!</p>
                  <TextField 
                    id='outlined-basic'
                    name='name'
                    label='Nombre y Apellido'
                    variant='outlined'
                    className='form__input'
                    required
                  />

                  <TextField 
                    id='outlined-basic'
                    name='phone'
                    label='Teléfono'
                    variant='outlined'
                    className='form__input'
                    required
                  />

                  <TextField 
                    id='outlined-basic'
                    name='email'
                    label='Email'
                    variant='outlined'
                    className='form__input'
                    required
                  />

                  <button type='submit' className="form__btn">Enviar</button>
                </form>
              </Modal>
      </div>
    </Box>
  );

  const cart = (
    <Box sx={{ textAlign: "center" }} className="containerCart">
      <div className="cartTop">
        <p className="cartTop__title">Mi carrito</p>
        <CloseIcon onClick={handleCartToggle} className="cartTop__closeIcon" />
      </div>
      <Divider />
      <div className="cartBody">
        {cartListItems.map((item) => {
          return(
            <>
            <div className="cartBody__top" key={item.id}>
              <div className="cartBody__top__item" >
                  <div className="cartBody__top__item__img">
                    <img src={`/${item.img}`} alt="" />
                  </div>

                  <div className="cartBody__top__item__detail">
                    <div className="cartBody__top__item__detail__first">
                        <p className="cartBody__top__item__detail__first__title">{item.title}</p>
                        <DeleteIcon 
                          className="cartBody__top__item__detail__first__deleteIcon"
                          onClick={() => deleteItem(item.id)}
                          />
                    </div>

                    <div className="cartBody__top__item__detail__second">
                        <div className="cartBody__top__item__detail__second__count">
                          {/* <button className="btns">-</button> */}
                          <p className="qty">Cantidad:</p>
                          <p className="qtyNumber">{item.cantidad}</p>
                          {/* <button className="btns">+</button> */}
                        </div>
                        <p className="cartBody__top__item__detail__second__price">${item.price * item.cantidad}</p>
                    </div>
                  </div>
              </div>
            </div>
            <Divider />
            </>
          )
        })}
        <Divider />
        {cartListItems.length === 0 ?
         <div className="cartEmpty">
          <p className="cartEmpty__title">El carrito está vacío</p>
          <button onClick={handleCartToggle} className="cartEmpty__btn"><Link to={'/products'} className='link'>Ver productos</Link></button>
        </div> :
          <div className="cartBody__bottom">
          <div className="cartBody__bottom__first">
              <p className="cartBody__bottom__first__total">Total:</p>
              <p className="cartBody__bottom__first__price">${totalPrice}</p>
          </div>

          <div className="cartBody__bottom__second">
              <div className="cartBody__bottom__second__buttons">
                <Link to={'/checkout'}><button className="cartBody__bottom__second__buttons__endBtn" onClick={handleCartToggle}>Finalizar compra</button></Link>
                <Link to={'/products'}><button className="cartBody__bottom__second__buttons__continueBtn" onClick={handleCartToggle}>Seguir comprando</button></Link>
              </div>
          </div>
          </div>
          }
      </div>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  // ----Submenu---- //
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" className="containerAppBar">
        <Toolbar className="containerNav">
          <div className="containerNav__logo">
            <Link to="/">
              <img src="/logo.png" alt="logo" />
            </Link>
          </div>

          <Box className="containerNav__links">
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              <Button className="containerNav__links__btn">
                <Link to="/">
                  Home
                </Link>
              </Button>
              <Button className="containerNav__links__btn">
                <a
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  Productos
                </a>
              </Button>
              <Menu
                className="subMenu"
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <Link to="/products" className='subMenuLinks'><MenuItem onClick={handleClose}>Ver todo</MenuItem></Link>
                <Link to={'/products/mates'} className='subMenuLinks'><MenuItem onClick={handleClose}>Mates</MenuItem></Link>
                <Link to={'/products/accesorios'} className='subMenuLinks'><MenuItem onClick={handleClose}>Accesorios</MenuItem></Link>
                <Link to={'/products/bombillas'} className='subMenuLinks'><MenuItem onClick={handleClose}>Bombillas</MenuItem></Link>
                <Link to={'/products/yerbas'} className='subMenuLinks'><MenuItem onClick={handleClose}>Yerbas</MenuItem></Link>
              </Menu>
              <Button onClick={() => setShowModal(true)} className="containerNav__links__btn">
                <a>Contacto</a>
              </Button>

              <Modal title={'Formulario de contacto'} open={showModal} handleClose={() => setShowModal(false)}>
                <form className='form'>
                  <p className='form__title'>Completa el formulario y en breve nos comunicamos con vos!</p>
                  <TextField 
                    id='outlined-basic'
                    name='name'
                    label='Nombre y Apellido'
                    variant='outlined'
                    className='form__input'
                    required
                  />

                  <TextField 
                    id='outlined-basic'
                    name='phone'
                    label='Teléfono'
                    variant='outlined'
                    className='form__input'
                    required
                  />

                  <TextField 
                    id='outlined-basic'
                    name='email'
                    label='Email'
                    variant='outlined'
                    className='form__input'
                    required
                  />

                  <button type='submit' className="form__btn">Enviar</button>
                </form>
              </Modal>
            </Box>
            <Button
              className="contOpen"
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon className="contOpenIcon" />
            </Button>
            <Box sx={{ display: { xs: "block" } }}>
              <Button
                className="containerNav__links__btn btnIcon"
                onClick={handleCartToggle}
              >
                <ShoppingCartIcon className="cartIcon" />
                <span className="cartNumber">{cartListItems.length}</span>
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="div">
        <Drawer
          anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpenCart}
          onClose={handleCartToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            "& .MuiDrawer-paper": { boxSizing: "border-box" },
          }}
        >
          {cart}
        </Drawer>
      </Box>
    </Box>
  );
};

export default NavBar;
