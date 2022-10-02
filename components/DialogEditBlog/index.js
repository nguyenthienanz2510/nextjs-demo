import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TextareaAutosize, TextField } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { postService } from "../../services/post";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogEditBlog({ postId }) {

  const [open, setOpen] = React.useState(false);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  console.log(postId);

  useEffect(() => {
    postService
      .getPostDetail(postId)
      .then((res) => {
        console.log(res.data.post);
        setTitle(res.data.post.title)
        setContent(res.data.post.content)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [postId]);

  const handleChangeBlog = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);
    formData.append("content", content);

    console.log(formData);

    fetch(`http://localhost:8080/feed/post/${postId}`, {
      method: "PUT",
      body: formData,
    })
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="text-color-primary">
        <Button size="small" onClick={handleClickOpen}>
          Edit
        </Button>
      </button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Edit Blog"}</DialogTitle>
        <DialogContent>
          <input
            className="mt-5 w-full border rounded p-4"
            style={{ borderColor: "rgba(229, 231, 235, 1)" }}
            id="title"
            placeholder="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label htmlFor="image" className="mr-4">
            Image:
          </label>
          <input
            type="file"
            className="mt-5"
            id="image"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
          <TextareaAutosize
            minRows={4}
            placeholder="input content"
            className="mt-5 w-full border rounded p-4"
            style={{ borderColor: "rgba(229, 231, 235, 1)" }}
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions className="px-6 pb-5">
          <button
            className="px-5 py-2 transition-all text-color-red rounded cursor-pointer border border-color-red hover:bg-color-red hover:text-white"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="px-5 py-2 transition-all text-color-primary rounded cursor-pointer border border-color-primary hover:bg-color-primary hover:text-white"
            onClick={() => {
              handleChangeBlog();
              handleClose();
            }}
          >
            Save Change
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
