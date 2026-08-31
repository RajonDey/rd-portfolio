import { Font, renderToBuffer } from "./react-pdf";
import type { PackCv, PackLetter } from "../pack-data";
import { CvDocument } from "./CvDocument";
import { LetterDocument } from "./LetterDocument";

Font.registerHyphenationCallback((word) => [word]);

export async function renderCvPdf(cv: PackCv): Promise<Buffer> {
  return renderToBuffer(<CvDocument cv={cv} />);
}

export async function renderLetterPdf(letter: PackLetter): Promise<Buffer> {
  return renderToBuffer(<LetterDocument letter={letter} />);
}
