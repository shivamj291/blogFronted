
  const initialState = {
       flag:false
    };
    
  export const reducer = (state = initialState,action) => {
  
        if(action.type=='FLAG'){
            return ({
                ...state,flag:action.payload
             })
        }
  }