import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	selectText,
	inputText, 
} from './TextSlice';

export function Text() {
	const text = useSelector(selectText);
	const dispatch = useDispatch();
	const [addText , setAddText] = useState('');
	return (
		<div>
			<input type="text" onChange={(e) => setAddText(e.target.value)}></input>
			<button onClick={() => dispatch(inputText(addText))}>입력</button>
			<pre>
				{text}
			</pre>
		</div>
	)
}
