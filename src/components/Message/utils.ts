import { v4 as uuidv4 } from 'uuid';
import { DEFAULT_SESSION_TITLE } from '../../contants/defaults';
import { DEFAULT_MODEL } from '../../contants/model';
import { OpenAIRoleEnumType, OpenAIRoleEnum, Message, Session } from "../../types"

export function createMessage(role: OpenAIRoleEnumType = OpenAIRoleEnum.User, content: string = ''): Message {
  return {
    id: uuidv4(),
    content: content,
    role: role,
  }
}

export function createSession({
  name = DEFAULT_SESSION_TITLE,
  model = DEFAULT_MODEL,
}: {
  name?: string;
  model?: string;
} = {} as any): Session {
  return {
    id: uuidv4(),
    name,
    model,
    messages: [
      {
        id: uuidv4(),
        role: 'system',
        content: 'You are a helpful assistant. You can help me by answering my questions. You can also ask me questions.'
      }
    ],
  }
}
