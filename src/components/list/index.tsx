import { NoteModel } from '@mx-space/api-client'
import { defineComponent, PropType } from 'vue'
import { RouterLink } from 'vue-router'
import './index.css'

export const NoteList = defineComponent({
  props: {
    notes: {
      type: Array as PropType<NoteModel[]>,
      required: true,
      default: () => [],
    },
  },
  setup(props) {
    return () => (
      <ul class={'list-root'}>
        {props.notes.map((note) => {
          const created = new Date(note.created)
          const day = created.getDate()
          const month = created.getMonth() + 1
          return (
            <li key={note.nid}>
              <RouterLink to={`/notes/${note.nid}`}>
                <span class={'title'}>{note.title}</span>
                <span class={'created'}>{`${month}/${day}`}</span>
              </RouterLink>
            </li>
          )
        })}
      </ul>
    )
  },
})
