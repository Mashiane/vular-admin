import Mock from 'mockjs'

import postListView from './views/post-list'
import postEditView from './views/post-edit'
import listAction from './actions/list'

Mock.mock('/api/action/query', 'post', (options)=>{
	console.log(options.body)
	return listAction
})
Mock.mock('/api/view/post-list', 'post', postListView)
Mock.mock('/api/view/post-edit', 'post', postEditView)
