"use client";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface DeleteCOnfirmationModalProps {
  openDeleteConfirmModal: boolean;
  handleDelete: () => void;
  handleClose: () => void;
}

const DeleteConfirmationModal: React.FC<DeleteCOnfirmationModalProps> = ({
  openDeleteConfirmModal,
  handleDelete,
  handleClose,
}) => {
  //   const handleAgreeButton = () => {
  //     handleSetConfirmDelete();
  //     handleClose();
  //   };
  //   const handleDisagreeButton = () => {
  //     handleClose();
  //   };

  return (
    <Dialog
      open={openDeleteConfirmModal}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Please confirm deletion!"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Click YES to delete the image
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            handleClose();
          }}
        >
          NO
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => handleDelete()}
          autoFocus
        >
          YES
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmationModal;
