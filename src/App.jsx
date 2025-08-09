import { useState } from "react";
import { closestCenter, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function SortableItem({ id, children }) {

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      {children}
    </div>
  )
}

const App = () => {

  const [items, setItems] = useState([
    { id: 1, content: 'Apple' },
    { id: 2, content: 'Banana' },
    { id: 3, content: 'Cherry' },
    { id: 4, content: 'Orange' },
    { id: 5, content: 'Grapes' }
  ]);

  // setup sensors to handle differet input methods like mouse, touch, etc.
  const sensors = useSensors(
    // Add sensors here if needed, e.g., MouseSensor, TouchSensor
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex(item => item.id === active.id);
        const newIndex = items.findIndex(item => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      })
    }
  }

  return (
    <div>
      <h1>Item List</h1>
      <p>
        Drag and drop items to reorder them.
      </p>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items.map(item => item.id)}>
          <div>
            {
              items.map(item => (
                <SortableItem key={item.id} id={item.id}>
                  {item.content}
                </SortableItem>
              ))
            }
          </div>
        </SortableContext>
      </DndContext>
    </div>
  )
}

export default App;