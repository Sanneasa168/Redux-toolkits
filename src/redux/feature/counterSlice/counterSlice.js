import { createSlice } from "@reduxjs/toolkit";

const initialiState = {

    value:0 ,
}

export const  counterSlice = createSlice(

    {
        name:"count",
        initialiState ,
        
        reducers : {
            increment : (state) =>{
                state.value += 1;
            },
            decrement: (state) =>{

                state.value -= 1;
            },
            incrementByAcount : (state,action) => {
                state.values += action.payload;
            },
            
        },
    })

// export Action 
export const {increment,decrement,incrementByAcount} =  counterSlice.actions ;

//e xport reducer 
export default  counterSlice.reducer;

// export const selectValue = state => state.counter.value


