const { Component } = React;
const { Provider, connect } = ReactRedux;

/* Componente clase para agregar nueva tarea */
class _addTask extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: Number,
            name: String
        }
    }

    render() {
        return (
            <form onSubmit={(e) => e.preventDefault()}>
                <input placeholder="Ingresa nueva tarea" onChange={this.handlerWriting.bind(this)} type="text" />
                <button className="btn" type="reset" onClick={() => this.saveDataToState()}> <i className="fas fa-plus"></i> Agregar </button>
            </form>
        )
    }

    handlerWriting(e) {
        this.setState({ name: e.target.value })
    }

    saveDataToState() {
        this.setState({ id: Math.round(Math.random() * 99999) })
        this.props.addTasks(this.state)
        //this.setState({ name: '' })
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
            <button className="btn finish" onClick={() => removeTask(id)}>Terminada</button>
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
        <div className="cont_comp">
            <AddTask />
            <ListTask />
        </div>
    </Provider>
    , document.querySelector("#app"))