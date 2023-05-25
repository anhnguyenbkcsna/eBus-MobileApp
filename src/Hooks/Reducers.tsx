const initialState = {
    isLogin: -1,
    previous: null
}

export default Reducer_Mobile = (state = initialState, action) => {
    switch(action.type) {
        case 'isLogin': 
            return {
                ...state,
                isLogin: state.isLogin * -1
            };
        case 'previous':
            return {
                ...state,
                previous: action.data
            };
        default:
            return state;
    }
};