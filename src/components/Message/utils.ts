import { v4 as uuidv4 } from 'uuid';
import useStore from '../../store';
import { OpenAIRoleEnumType, OpenAIRoleEnum, Message, Session } from "../../types"

export function createMessage(role: OpenAIRoleEnumType = OpenAIRoleEnum.User, content: string = ''): Message {
  return {
    id: uuidv4(),
    content: content,
    role: role,
  }
}

export function createSession(name: string = "chatgpt"): Session {
  return {
    id: uuidv4(),
    name,
    messages: [
      {
        id: uuidv4(),
        role: 'system',
        content: 'You are a helpful assistant. You can help me by answering my questions. You can also ask me questions.'
      }
    ],
  }
}
