"use client";
import { Box, CircularProgress, Typography } from "@mui/material";
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
  loading: boolean;
  deletingResult: string;
}

const DeleteConfirmationModal: React.FC<DeleteCOnfirmationModalProps> = ({
  openDeleteConfirmModal,
  handleDelete,
  handleClose,
  loading,
  deletingResult,
}) => {
  return (
    <Dialog
      open={openDeleteConfirmModal}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {deletingResult && (
        <>
          <Typography color="success" textAlign="center">
            {deletingResult}
          </Typography>
          <Typography variant="h4" color="info" sx={{ fontWeight: "500" }}>
            Refresh to see updated list!
          </Typography>
        </>
      )}
      {loading ? (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100px",
              width: "100px",
            }}
          >
            <CircularProgress />
            <Typography>Deleting</Typography>
          </Box>
        </>
      ) : (
        <>
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
        </>
      )}
    </Dialog>
  );
};

export default DeleteConfirmationModal;
