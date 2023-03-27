import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {names} from "../App"

interface MyDialogProps {
    open: boolean;
    handleClose: () => void;
}

export function LoseDialog(props: MyDialogProps) {
    
    var show = props.open
  
    return (
      <div>
        <Dialog
          open={show}
          onClose={props.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Sorry You Lost!"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              The correct answer was {names}. If you want to try again just reload the page
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={props.handleClose} autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
  

export default function AlertDialog(props: MyDialogProps) {
    
  var show = props.open

  return (
    <div>
      <Dialog
        open={show}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Congrats You Won!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            If you want to try again just refresh the page!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
