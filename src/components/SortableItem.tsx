import { useSortable } from '@dnd-kit/sortable';
import { Arguments } from '@dnd-kit/sortable/dist/hooks/useSortable';
import { CSS } from '@dnd-kit/utilities';

interface Props {
  id: string;
  children?: React.ReactNode;
}

export function SortableItem(props: Props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: props.id } as unknown as Arguments);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {props.children}
    </div>
  );
}