import * as React from "react";
import { Box, Modal } from "@mui/material";


function GenericModal({title, content, open, handleClose}) {

  const styles = {
    modalContainer: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      pt: 2,
      px: 4,
      pb: 3,
    }
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...styles.modalContainer, width: 200 }}>
          <h2 id="child-modal-title">{title}</h2>
          {content}
        </Box>
      </Modal>
    </>
  );
}
export default GenericModal;
