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
	
	const onChange = (e) => setAddText(e.target.value);
	const onReset = () => setAddText('');
	const onClick = () => {
		dispatch(inputText(addText))
		onReset();
	};
	return (
		<div>
			<input type="text" onChange={onChange} value={addText}/>
			<button onClick={onClick}>입력</button>
			<pre>
				{text}
			</pre>
		</div>
	)
}
