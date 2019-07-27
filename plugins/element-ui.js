import Vue from 'vue'
import {Table, TableColumn, Row, Col, Input, Button, Alert, MessageBox} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Row)
Vue.use(Col)
Vue.use(Input)
Vue.use(Button)
Vue.use(Alert)
Vue.prototype.$alert = MessageBox.alert
