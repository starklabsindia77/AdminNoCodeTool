import * as React from "react";
import { Box, Button, BoxProps } from "@material-ui/core";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";

import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { useClipboard } from "use-clipboard-copy";
// import { dark, light } from "./codetheme";

const Codeblock = ({ code = "", box, ...rest }) => {
  const { copy, copied } = useClipboard({
    copiedTimeout: 3000,
  });

  return (
    <Box className="relative p-5 text-lg rounded-xl">
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {code}
      </SyntaxHighlighter>
      <button
        // variant={"link"}
        onClick={() => copy(code)}
        className="top-12 right-12 text-white text-sm border-2 px-5 py-1 rounded-full hover:bg-mainColor hover:border-mainColor transition-all"
        variant="contained"
        style={{ position: "absolute" }}
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </Box>
  );
};

export default Codeblock;
