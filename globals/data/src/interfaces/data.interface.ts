import type { ContactAddons } from '@blog/footer-fragment'

import type { FragmentInt }   from './fragment.interface.js'

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
