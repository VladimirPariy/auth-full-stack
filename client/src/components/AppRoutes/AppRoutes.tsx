import { Routes,Route } from "react-router-dom";

import Main from "../main/Main";
import AuthComponent from "../AuthComponent/AuthComponent";

type Props = {}

const AppRouter = (props: Props) => {
  return (
	<Routes>
		<Route path="/" element={<Main/>}/>
		<Route path="registration" element={<AuthComponent type='Registration' buttonAction='Sing up'/>}/>
		<Route path="login" element={<AuthComponent type='Login' buttonAction='Sing in'/>}/>
		<Route path="*" element={<Main/>}/>
	</Routes>
  )
}

export default AppRouter;

