import {createSlice} from "@reduxjs/toolkit";

const searchSlice= createSlice({
    name:"search",
    initailState:{
        query:'',
        activeTab:'photos',
        result:[],
        loading:false,
        error:null,
    },
    reducurs:{
        setQuery(state,action){
        state.query=action.payload
        },
        setActiveTabs (state,action){
         state.actionTab=action.payload
        },
        setResults(state,action){
        state.result=action.payload
        state.loading=false
        },
        setLoading(state,action){
        state.loading=true
        state.error=null 
        },

        setError(state,action){
         state.error=action.payload
         state.loading=false
        },
        clearResults(state){
            state.results=[]
        }
    }
});

export const {
    setQuery,
    setActiveTabs,
    setResults,
    setLoading,
    setError,
    clearResults
}=searchSlice.actions

export default searchSlice.reducer;