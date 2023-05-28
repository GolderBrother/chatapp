import { v4 as uuidv4 } from 'uuid';
import { DEFAULT_SESSION_TITLE } from '../../contants/defaults';
import { DEFAULT_MODEL } from '../../contants/model';
import { OpenAIRoleEnumType, OpenAIRoleEnum, Message, Session } from "../../types"
import gpt35 from '../../assets/chat/gpt-3.5.svg';
import { RoleMap, RoleMessageMap } from './model';

export function createMessage(role: OpenAIRoleEnumType = OpenAIRoleEnum.User, content: string = ''): Message {
  return {
    id: uuidv4(),
    content: content,
    role: role,
  }
}
export function generateSystemMessage() {
  const messages = [
    {
      id: uuidv4(),
      role: 'system' as OpenAIRoleEnumType,
      content: RoleMessageMap[RoleMap.DEFAULT]
    }
  ]
  return messages;
}

export function createSession({
  name = DEFAULT_SESSION_TITLE,
  model = DEFAULT_MODEL,
  icon = gpt35,
  roleType = RoleMap.DEFAULT,
}: {
  name?: string;
  model?: string;
  icon?: string;
  roleType?: RoleMap | string;
  messages?: {
    id: string;
    role: string;
    content: string;
}[]
} = {} as any): Session {
  const defaultMessageItem = generateSystemMessage();
  const messages = [];
  const roleContent = RoleMessageMap[roleType as RoleMap] as any;
  if (roleContent) {
    messages.push({
      id: uuidv4(),
      role: 'system' as OpenAIRoleEnumType,
      content: roleContent
    });
  }else {
    messages.push(...defaultMessageItem); 
  }
  return {
    id: uuidv4(),
    icon,
    name,
    model,
    messages,
  }
}
