import React, {Component} from 'react'

import List from './List'
import Title from './Title'

class Main extends Component {
    render(){
        return <div>
            <Title title={'ToDos'}/>
            <List tasks={['A','B']}/>
            <List tasks={['C','D']}/>
        </div>
    }
}


export default Main