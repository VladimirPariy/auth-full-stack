import { useState } from 'react'
import Input from '../UI/input/Input'
import styles from "./AuthComponent.module.scss"
import Utils from '../../utils/utils'

type Props = {
	type:string;
	buttonAction:string;
}

const AuthComponent = (props: Props) => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
  return (
	<div className={styles.authWrapper}>
	<div className={styles.authContainer}>
		<div className={styles.authType}>{props.type}</div>
		<Input type='text' placeholder='Email' value={email} setValue={setEmail}/>
		<Input type='password' placeholder='Password' value={password} setValue={setPassword}/>
		<button onClick={() => Utils.registration(email, password)}>{props.buttonAction}</button>
	</div>
	</div>
  )
}

export default AuthComponent;