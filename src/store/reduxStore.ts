import { Reducer } from "redux";

const initialState = {
    text: "Magic text"
}

export type State = typeof initialState;

export const  playlist: Reducer<State, any> = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }

} 