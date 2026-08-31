import { Document, Page, Text, View } from "./react-pdf";
import type { PackLetter } from "../pack-data";
import { packStyles as styles } from "./styles";

export function LetterDocument({ letter }: { letter: PackLetter }) {
  return (
    <Document
      title={`${letter.signOff} cover letter`}
      author={letter.signOff}
      subject={letter.title}
    >
      <Page size="A4" style={styles.page} wrap={false}>
        <Text style={styles.name}>{letter.signOff}</Text>
        <Text style={styles.title}>{letter.title}</Text>
        {letter.paragraphs.map((paragraph) => (
          <Text key={paragraph} style={styles.letterBody}>
            {paragraph}
          </Text>
        ))}
        <View style={styles.signOff}>
          <Text>{letter.signOff}</Text>
        </View>
      </Page>
    </Document>
  );
}
