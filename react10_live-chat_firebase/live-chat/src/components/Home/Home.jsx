import { userSlice, googleAuth } from "../../store/reducers/userSlice/userSlice"
import { useDispatch, useSelector } from "react-redux"
import { signOut } from 'firebase/auth' //функция нужна чтобы завершить сессию пользователя
import { auth } from "../../fb/initial"
import { Box, Button } from '@mui/material'


const Home = () => {
  const { user } = useSelector(state => state.user)
  const dispatch = useDispatch()
  
  const logOut = () => {
    signOut(auth)
    dispatch(userSlice.actions.clearUser())
  }

  return (
    <Box sx={{
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Box>
        {!user && 
          <Button
            variant="contained"
            color="success"
            onClick={() => dispatch(googleAuth())}
          >Авторизация</Button>
        }
        {user && 
          <Button
            variant="contained"
            color="info"
            onClick={logOut}
          >Выйти</Button>
        }
      </Box>
    </Box>
  )
}

export default Home