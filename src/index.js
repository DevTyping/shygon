import { installFactory } from './utils/plugins'

import FModal from './components/Modal'
import FError from './components/Error'

const components = installFactory({
  components: {
    FModal,
    FError
  }
})

export default components
