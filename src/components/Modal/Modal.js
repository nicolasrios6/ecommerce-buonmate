import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

const Modal = ({handleClose, open, children, title}) => {
    return ( 
        <div>
          <Dialog onClose={handleClose} open={open}>
                <DialogContent>
                    <DialogTitle>{title}</DialogTitle>
                    {children}
                </DialogContent>
            </Dialog>  
        </div>
    );
}
 
export default Modal;