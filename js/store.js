//const state;

/* State */
const initialState = {
    tasks: [
        {
            id: 1,
            name: 'Aprender React'
        },
        {
            id: 2,
            name: 'Aprender Redux'
        },
        {
            id: 3,
            name: 'Aprender React con Redux'
        }
    ]
}

/* Actions */
const ADD_TASK = 'ADD_TASK';
const REMOVE_TASK = 'REMOVE_TASK';

const addTasks = (task) => ({ type: ADD_TASK, task });
const removeTask = (id) => ({ type: REMOVE_TASK, id });


/* Reducer Tasks */
const Tasks = (state = initialState, actions) => {
    const { type } = actions
    switch (type) {
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