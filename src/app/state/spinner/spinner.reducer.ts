import { SpinnerActions, SpinnerActionTypes } from "./spinner.actions";

export interface State{
    isOn: boolean;
}

export const initialState: State = {
    isOn: false
}

export function reducer(state: State= initialState, action: SpinnerActions):State{
    switch(action.type){
        case SpinnerActionTypes.StartSpinner:
            return { ...state, isOn: true };
        case SpinnerActionTypes.StopSpinner:
            return { ...state, isOn: false };
        default:
            return state;
    }
}
