export interface DeskNote {
  id: string;
  text: string;
  createdAt: string;
}

export interface NotesFile {
  notes: DeskNote[];
}
