import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value:'',
	status:'ongoing',
};

export const selectText = (state) => state.text.value;

export const textSlice = createSlice({
	name : 'text',
	initialState,
	reducers : {
		inputText: (state, action) => {
			state.value += `${action.payload} \n`;
		}
	}
})

export const {inputText} = textSlice.actions;



export default textSlice.reducer;