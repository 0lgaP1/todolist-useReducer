import { TaskType } from './App'
import {v1} from "uuid";

const initialState: TaskType[] = [
    {id: v1(), title: 'HTML&CSS', isDone: true},
    {id: v1(), title: 'JS', isDone: true},
    {id: v1(), title: 'ReactJS', isDone: false},
]
export type ActionsType = RemoveTaskActionType | AddTaskActionType
export type RemoveTaskActionType = {
    type: 'REMOVE-TASK'
    payload: {
        id: string
    }
}

export type AddTaskActionType = {
    type: 'ADD-TASK'
    payload: {
        title: string
    }
}

export const tasksReducer = (state: TaskType[] = initialState, action: ActionsType): TaskType[] => {
    switch (action.type) {
        case 'REMOVE-TASK':
            return state.filter(task=>task.id !== action.payload.id)

        case 'ADD-TASK':
            const newTask = {
                id: v1(),
                title: action.payload.title,
                isDone: false,
            }
            return [newTask, ...state]

        default:
            return state
    }
}

export const removeTaskAC = (id: string): RemoveTaskActionType => {
    return {
        type: 'REMOVE-TASK',
        payload: {
            id: id,
        },
    } as const
}

export const addTaskAC = (title: string): AddTaskActionType => {
    return {
        type: 'ADD-TASK',
        payload: {
            title,
        },
    } as const
}



