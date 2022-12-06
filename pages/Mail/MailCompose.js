import React from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  TablePagination,
  TextareaAutosize,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";

function MailCompose({ setComposreOpen }) {
  return (
    <Box className="fixed right-5 bottom-3 py-2 bg-sky-50 shadow-black shadow-xl w-4/12 h-4/6 border-2 rounded-xl">
      <Box className="flex justify-between px-2 border-b-2 py-1 ">
        <Typography variant="inherit" className="">
          New Message
        </Typography>
        <CloseIcon
          className="cursor-pointer"
          onClick={() => setComposreOpen((prev) => !prev)}
        />
      </Box>
      <Box className="flex px-2 py-1 border-b-2 bg-slate-100">
        <Typography variant="inherit">To</Typography>
        <input
          type="text"
          className="flex-1 outline-none px-2 bg-transparent"
        />
        <Typography variant="inherit">Cc Bcc</Typography>
      </Box>
      <Box className="flex px-2 py-1 border-b-2 bg-slate-100">
        <input
          type="text"
          placeholder="Subject"
          className="flex-1 outline-none px-0 bg-transparent"
        />
      </Box>
      <TextareaAutosize
        className="w-full px-2 bg-slate-100 p-1 overflow-y-scroll bg-transparent   scrollbar-thin outline-none scrollbar-thumb-slate-300 scrollbar-thumb-rounded-md"
        maxRows={13}
        minRows={13}
        aria-label="maximum height"
        placeholder="message..."
        // style={{ maxHeight: "25vh", height: "auto", minHeight: "25vh" }}
      />
      <button className="mx-5 bg-mainColor px-5 py-1 text-white rounded-full text-sm">
        Send
      </button>
    </Box>
  );
}

export default MailCompose;
