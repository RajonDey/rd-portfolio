import { Document, Page, Text, View } from "./react-pdf";
import type { PackCv } from "../pack-data";
import { packStyles as styles } from "./styles";

export function CvDocument({ cv }: { cv: PackCv }) {
  return (
    <Document
      title={`${cv.name} ${cv.title}`}
      author={cv.name}
      subject={cv.title}
    >
      <Page size="A4" style={styles.page} wrap>
        <Text style={styles.name}>{cv.name}</Text>
        <Text style={styles.title}>{cv.title}</Text>
        <Text style={styles.contact}>{cv.email}</Text>
        <Text style={styles.contact}>{cv.location}</Text>
        <Text style={styles.contact}>{cv.linkedin}</Text>
        <Text style={styles.contact}>{cv.github}</Text>
        <Text style={styles.contact}>{cv.site}</Text>

        <View style={styles.section}>
          <Text style={styles.heading}>Summary</Text>
          <Text style={styles.body}>{cv.summary}</Text>
          <Text style={styles.body}>{cv.stack}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Experience</Text>
          {cv.experience.map((role) => (
            <View key={`${role.company}-${role.title}`}>
              <Text style={styles.roleHead}>
                {role.title}, {role.company}
              </Text>
              <Text style={styles.roleMeta}>{role.date}</Text>
              {role.bullets.map((bullet) => (
                <Text key={bullet} style={styles.bullet}>
                  {`• ${bullet}`}
                </Text>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Selected work</Text>
          {cv.work.map((item) => (
            <View key={item.slug} wrap={false}>
              <Text style={styles.workTitle}>{item.title}</Text>
              <Text style={styles.body}>{item.sentence}</Text>
              <Text style={styles.workMeta}>{item.href}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Writing</Text>
          <Text style={styles.body}>{cv.writing.title}</Text>
          <Text style={styles.workMeta}>
            {cv.writing.venue}. {cv.writing.href}
          </Text>
        </View>
      </Page>
    </Document>
  );
}
