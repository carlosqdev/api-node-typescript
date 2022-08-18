import { Weather, Visibility } from './enums'

export interface DiaryEntry {
  id: Number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
