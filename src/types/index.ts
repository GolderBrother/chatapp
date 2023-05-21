import { ThemeMode } from '../theme';

export type Message = OpenAIMessage & {
  id: string;
  cancel?: () => void;
  generating?: boolean
  model?: string
}

export interface Session {
  id: string
  name: string
  messages: Message[]
  starred?: boolean
  model: string;
  icon: string;
}

export interface Settings {
  openaiKey: string
  apiHost: string
  model: string
  maxContextSize: string
  temperature: number
  maxTokens: string
  showWordCount?: boolean
  showTokenCount?: boolean
  showModelName?: boolean
  theme: ThemeMode
  language: string
  fontSize: number
}

export const OpenAIRoleEnum = {
  System: 'system',
  User: 'user',
  Assistant: 'assistant'
} as const;

export type OpenAIRoleEnumType = typeof OpenAIRoleEnum[keyof typeof OpenAIRoleEnum]

export interface OpenAIMessage {
  'role': OpenAIRoleEnumType
  'content': string;
  'name'?: string;
}

export interface Config {
  uuid: string
}

export interface SponsorAd {
  text: string
  url: string
}