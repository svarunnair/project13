import { POST_SIGNIN_FAILURE, POST_SIGNIN_REQUIEST, POST_SIGNIN_SUCCESS, POST_SIGNUP_FAILURE, POST_SIGNUP_REQUIEST, POST_SIGNUP_SUCCESS } from "./authAction"




const initState={
    isError:false,
    isLoading:false,
    signupData:[],
    signinData:[]
}

export const authReducer=(state=initState,action)=>{
    switch(action.type){
        case POST_SIGNUP_REQUIEST:
            return({
                ...state,
                isError:false,
                isLoading:true
            })
            case POST_SIGNUP_SUCCESS:
                return({
                    ...state,
                    isError:false,
                    isLoading:false,
                    signupData:action.payload
                })
                case POST_SIGNUP_FAILURE:
                    return({
                        ...state,
                        isError:true,
                        isLoading:false
                    })

                    case POST_SIGNIN_REQUIEST:
            return({
                ...state,
                isError:false,
                isLoading:true
            })
            case POST_SIGNIN_SUCCESS:
                return({
                    ...state,
                    isError:false,
                    isLoading:false,
                    signinData:action.payload
                })
                case POST_SIGNIN_FAILURE:
                    return({
                        ...state,
                        isError:true,
                        isLoading:false
                    })






                    default:
                        return({
                            ...state
                        })
    }
}