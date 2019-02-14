//const state;

/* State */
const initialState = {
    tasks: [
        {
            id: 1,
            name: 'Aprender react'
        },
        {
            id: 2,
            name: 'Aprender redux'
        },
        {
            id: 3,
            name: 'Aprender react y redux'
        }
    ]
}

/* Actions */
const LOAD_TASKS = 'LOAD_TASKS';
const ADD_TASK = 'ADD_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
const EDIT_TASK = 'EDIT_TASK';

const loadTasks = () => ({ type: LOAD_TASKS });
const addTasks = (task) => ({ type: ADD_TASK, task });
const removeTask = (id) => ({ type: REMOVE_TASK, id });
const editTask = (task) => ({ type: EDIT_TASK, task })


/* Reducer */
const Tasks = (state = initialState, actions) => {
    const { type } = actions
    switch (type) {
        case 'LOAD_TASK':
            return state;
        case 'ADD_TASK':
            return {
                tasks: [...state.tasks, actions.task]
            }
        case 'REMOVE_TASK':
            return {
                tasks: state.tasks.filter(task => task.id !== actions.id)
            };
        default:
            return state;
    }
}

/* Creando la tienda con redux */
let store = Redux.createStore(Tasks);