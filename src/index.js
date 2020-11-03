import { installFactory } from './utils/plugins'

import SModal from './components/Modal'
import SError from './components/Error'

const NAME = 'shygon'

const install = installFactory({
  components: {
    SModal,
    SError
  }
})

const Shygon = {
  install,
  NAME
}

export default Shygon
