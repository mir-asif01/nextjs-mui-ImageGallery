import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
} from "@mui/material";

interface ImagePreviewModalProps {
  url: string;
  onClose: () => void;
  open: boolean;
}

const ImagePreviewModal: React.FC<ImagePreviewModalProps> = ({
  url,
  open,
  onClose,
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth sx={{ p: 3 }}>
      <DialogContent
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box maxWidth="100%" maxHeight="80vh">
          <img
            src={url}
            style={{
              display: "block",
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ImagePreviewModal;
