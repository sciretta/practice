import Divider from '@material-ui/core/Divider'
import Admin from '../../../layouts/Admin'
import Dashboard from '../../../components/Dashboards'

import {dashboardTop,dashboardBottom} from '../../../AuxiliarData'

export default function Index() {
  return (
    <Admin >
      <Dashboard data={dashboardTop}/>
      <Divider/>
      <Dashboard data={dashboardBottom}/>
    </Admin>
  )
}
