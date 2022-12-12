import {
  Box,
  Button,
  Divider,
  IconButton,
  TablePagination,
  TextareaAutosize,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MailHeader from "./MailHeader";
import MailTable from "./MailTable";
import AddIcon from "@mui/icons-material/Add";
import MailCompose from "./MailCompose";
import { Collapse } from "@mui/material";
import CustomizedBreadcrumbs from "./CustomizedBreadcrumbs.js";

import CloseIcon from "@mui/icons-material/Close";

function index() {
  const [ComposreOpen, setComposreOpen] = useState(false);
  const [HeaderOption, setHeaderOption] = useState(false);
  return (
    <Box className="relative">
      <MailHeader
        setHeaderOption={setHeaderOption}
        HeaderOptionIcon={!HeaderOption ? MenuIcon : CloseIcon}
      />
      <Divider />
      <Collapse in={HeaderOption}>
        <CustomizedBreadcrumbs />
      </Collapse>
      <Box className="m-5 bg-white rounded-xl">
        <Box className="flex py-2 justify-between items-center px-5">
          <button
            className="flex items-center bg-mainColor text-white
          p-2 px-4 rounded-full hover:scale-105 transition-all"
            onClick={() => setComposreOpen(!ComposreOpen)}
          >
            <AddIcon />
            Compose
          </button>
          <TablePagination
            component="div"
            count={100}
            page={1}
            rowsPerPageOptions={false}
            // onPageChange={handleChangePage}
            rowsPerPage={1}
            // onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
        <Box className="px-5">
          <Divider />
        </Box>
        <MailTable />
        <Collapse orientation="horizontal" in={ComposreOpen}>
          <MailCompose setComposreOpen={setComposreOpen} />
        </Collapse>
      </Box>
    </Box>
  );
}

export default index;
