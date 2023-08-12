import React from "react";
import { Dialog, DialogContent, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";

const ModalImage = ({ open, handleClose, imageSrc }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <IconButton
        edge="end"
        color="inherit"
        onClick={handleClose}
        aria-label="close"
        style={{ position: "absolute", top: 0, right: 0 }}
      >
        <Close />
      </IconButton>
      <DialogContent>
        <img src={imageSrc} alt="Enlarged" style={{ width: "100%" }} />
      </DialogContent>
    </Dialog>
  );
};

export default ModalImage;