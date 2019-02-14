const { Component } = React;
const { Provider, connect } = ReactRedux;

/* Componente clase para agregar nueva tarea */
class _addTask extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            id: new Number,
            name: new String
        }
    }

    render() {
        return (
            <div>
                <input value={this.state.name} onChange={this.handlerWriting.bind(this)} type="text" />
                <button onClick={() => this.saveDataToState()}> Agregar </button>
            </div>
        )
    }

    handlerWriting(e) {
        this.setState({ name: e.target.value })
    }

    saveDataToState() {
        this.setState({ id: Math.round(Math.random() * 99999) })
        this.props.addTasks(this.state)
    }
}
const AddTask = connect(null, {
    addTasks //Actions addTasks:addTasks
})(_addTask);

/* Componente funcional Tarea */
const Task = (props) => {
    const { removeTask } = props;
    const { name, id } = props.task
    return (
        <li>
            <span>{name}</span>
            <button onClick={() => removeTask(id)}>Terminada</button>
        </li>
    )
}

/* Componente clase para mostrar el listado de Tareas */
class _ListTask extends Component {

    render() {
        const { tasks } = this.props
        return (
            <ul>
                {tasks.map(task => (<Task key={task.id} task={task} removeTask={this.props._removeTask} />))}
            </ul>
        )
    }

}

const mapStateToProps = ({ tasks }) => ({ tasks })

const mapDispatchToProps = {
    _removeTask: removeTask
}

const ListTask = connect(mapStateToProps, mapDispatchToProps)(_ListTask)



ReactDOM.render(
    <Provider store={store}>
        <div>
            <AddTask />
            <ListTask />
        </div>
    </Provider>
    , document.querySelector("#app"))