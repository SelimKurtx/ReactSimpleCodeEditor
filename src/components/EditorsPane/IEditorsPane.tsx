export default interface IEditorsPanel{
  htmlCode : string;
  cssCode : string;
  jsCode : string;
  setHtmlCode : (htmlCode: string) => void;
  setcssCode : (cssCode: string) => void;
  setjsCode : (jsCode: string) => void;
}