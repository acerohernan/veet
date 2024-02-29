import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { TextField } from "@mui/material";
import { useParams } from "react-router-dom";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";

import { API } from "@/api";

import { toast } from "@/lib/ui/toast";

export const AddPeopleButton = () => {
  const { roomId } = useParams();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");

  const canGenerateLink = name.length < 5;
  const canCopyToClipboard = generatedLink !== "";

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  async function generateInviteLink() {
    setLoading(true);
    try {
      const res = await API.room.getGuestCredentials();
      if (!res.data) throw new Error("couldn't get guest credentials");
      setGeneratedLink(`${import.meta.env.VITE_URL}/${roomId}?accessToken=${res.data.guestAccessToken}`);
      toast.success("Invite link generated successfully");
    } catch (error) {
      toast.error("Error at generating invitation link");
    } finally {
      setLoading(false);
    }
  }

  async function copyLinkToClipboard() {
    navigator.clipboard.writeText(generatedLink);
    toast.success("Link copied successfully");
  }

  return (
    <>
      <Button variant="outlined" startIcon={<PersonAddAltOutlinedIcon />} sx={{ marginTop: 2 }} onClick={handleOpen}>
        Add people
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
            }}
          >
            <Typography id="transition-modal-title" variant="h6" component="h2" fontWeight={400}>
              Add people
            </Typography>
            <TextField sx={{ marginTop: 3 }} fullWidth label="Name" onChange={(event) => setName(event.target.value)} />
            <LoadingButton
              fullWidth
              variant="contained"
              sx={{ marginTop: 3, fontWeight: 600 }}
              disabled={canGenerateLink}
              loading={loading}
              onClick={generateInviteLink}
            >
              Generate link
            </LoadingButton>
            {canCopyToClipboard ? (
              <Button variant="outlined" fullWidth sx={{ marginTop: 2, fontWeight: 600 }} onClick={copyLinkToClipboard}>
                Copy link to clipboard
              </Button>
            ) : null}
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
