import {Dispatch, SetStateAction} from 'react'

type Props = {
	type:string;
	placeholder:string;
	value:string;
	setValue: Dispatch<SetStateAction<string>>;
}

const Input = (props: Props) => {
  return (
	<input type={props.type} placeholder={props.placeholder} value={props.value} onChange={(e) => props.setValue(e.target.value)}/>
  )
}

export default Input