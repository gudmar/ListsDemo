import { ToDoData } from "../Types/dataTypes"

export const toDoContent: ToDoData[] = [
    {
        message: 'Clean the car',
        doneStage: 2,
        isDone: false,
        notes: 'Still hovering and vaxing needs to be done'
    },
    {
        message: 'Iron clothes',
        doneStage: 3,
        isDone: false,
        notes: 'Last t-shirt left'
    },
    {
        message: 'Fix the guitar',
        doneStage: 0,
        isDone: false,
        notes: 'Strings need replacing'
    },
    {
        message: 'Milk the cow',
        doneStage: 4,
        isDone: true,
    },
    {
        message: 'Buy new desk',
        doneStage: 0,
        isDone: false,
    },
    {
        message: 'Mow the lawn',
        doneStage: 4,
        isDone: true,
    }
]