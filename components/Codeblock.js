import * as React from "react";
import { Box, Button, BoxProps } from "@material-ui/core";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";

import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { useClipboard } from "use-clipboard-copy";
// import { dark, light } from "./codetheme";

const Codeblock = ({ code = "", box, ...rest }) => {
  const { copy, copied } = useClipboard({
    copiedTimeout: 3000,
  });

  return (
    <Box className="relative p-5 text-lg rounded-xl">
      <SyntaxHighlighter
        language="javascript"
        className="max-w-3xl overflow-hidden break-words"
        style={atomDark}
      >
        {code}
      </SyntaxHighlighter>
      <button
        // variant={"link"}
        onClick={() => copy(code)}
        className="top-7 right-4 text-black text-sm border-2 border-black hover:text-white px-5 py-1 rounded-full hover:bg-mainColor hover:border-mainColor transition-all"
        variant="contained"
        style={{ position: "absolute" }}
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </Box>
  );
};

export default Codeblock;
