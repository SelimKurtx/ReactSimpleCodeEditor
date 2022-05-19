import { FunctionComponent as FC } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import IEditor from "./IEditor";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/htmlmixed/htmlmixed";

const Editor: FC<IEditor> = ({ lang , code , setCode}) => {
  return (
    <>
      <button className="btn btn-secondary w-100 text-title rounded-0">{lang}</button>
      <CodeMirror
        value={code}
        options={{
          mode: lang === "html" ? "xml" : lang,
          theme: 'material',
          lineNumbers: true
        }}
        onChange={(editor, data, value) => {
          setCode(value);
        }}
      />
    </>
  );
};

export default Editor;
