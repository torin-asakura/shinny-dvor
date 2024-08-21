import type { FragmentInt }   from './fragment.interface.js'
import type { ContactAddons } from '@fragments/footer-fragment'

// TODO typecheck needed
export interface DataInt {
  contacts: Array<ContactAddons>
  posts: any
  postBy: any
  navigation: any
  availableRadii: any
  fragments: Array<FragmentInt>
  ui: any
  serviceBy: any
  workResults: any
  carBodies: any
  services: any
}
