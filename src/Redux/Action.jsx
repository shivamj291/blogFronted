
function getreqAction(val){
    return(dispatch,getStore)=>{
        dispatch({
            type:'FLAG',
            payload:val
        })
    }
}
 export default getreqAction