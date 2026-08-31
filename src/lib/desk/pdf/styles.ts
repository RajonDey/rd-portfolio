import { StyleSheet } from "./react-pdf";

export const packStyles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 10,
    color: "#1a1a1a",
    lineHeight: 1.4,
    paddingTop: 48,
    paddingBottom: 48,
    paddingHorizontal: 48,
  },
  name: {
    fontFamily: "Helvetica-Bold",
    fontSize: 18,
    marginBottom: 4,
  },
  title: {
    fontSize: 12,
    marginBottom: 8,
  },
  contact: {
    fontSize: 9,
    color: "#333333",
    marginBottom: 2,
  },
  section: {
    marginTop: 14,
  },
  heading: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
    textTransform: "uppercase",
    letterSpacing: 0.6,
    borderBottomWidth: 0.5,
    borderBottomColor: "#1a1a1a",
    paddingBottom: 3,
    marginBottom: 8,
  },
  body: {
    marginBottom: 6,
  },
  roleHead: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
  },
  roleMeta: {
    fontSize: 9,
    color: "#333333",
    marginBottom: 4,
  },
  bullet: {
    marginLeft: 10,
    marginBottom: 3,
  },
  workTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
    marginBottom: 1,
  },
  workMeta: {
    fontSize: 9,
    color: "#333333",
    marginBottom: 8,
  },
  letterBody: {
    marginBottom: 10,
  },
  signOff: {
    marginTop: 16,
  },
});
