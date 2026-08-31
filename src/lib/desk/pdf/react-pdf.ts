import { createRequire } from "node:module";
import path from "node:path";

const require = createRequire(path.join(process.cwd(), "package.json"));
const ReactPDF = require("@react-pdf/renderer") as typeof import("@react-pdf/renderer");

export const Document = ReactPDF.Document;
export const Page = ReactPDF.Page;
export const Text = ReactPDF.Text;
export const View = ReactPDF.View;
export const StyleSheet = ReactPDF.StyleSheet;
export const Font = ReactPDF.Font;
export const renderToBuffer = ReactPDF.renderToBuffer;
