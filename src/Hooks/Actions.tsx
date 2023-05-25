import {Action} from './Action';

export const updateIsLogin = () => {

    return {
        type: Action.IS_LOGIN
    }

}

export const updatePrevious = (data) => {
    return {
        type: Action.PREVIOUS,
        data: data
    }
}