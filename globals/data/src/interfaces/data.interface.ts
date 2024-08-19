import type { FragmentInt }   from './fragment.interface.js'
import type { ContactAddons } from '@fragments/footer-fragment'

// TODO typecheck needed
export interface DataInt {
  contacts: ContactAddons[]
  posts: any
  postBy: any
  navigation: any
  availableRadii: any
  fragments: FragmentInt[]
  ui: any
  serviceBy: any
  workResults: any
  carBodies: any
  services: any
}
