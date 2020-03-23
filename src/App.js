import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { initGA, PageView } from './utils/analytics'
import { PrivateRoute } from './utils/customRoutes'
import LoginForm from './components/logInForm/LoginForm'
import SignUp from './components/signUpForm/SignUpOverlay/SignUpOverlay'
import AdminDash from './components/AdminDash/AdminDashboard'
import Profile from './components/AdminDash/Profile/Profile'
// temporary sign up confirmation, will be replaced with user dashboard
import ConfirmationPage from './components/signUpForm/ConfirmationPage/ConfirmationPage'
import ModuleLetter from './components/Training/module-0/trainingLetter'
import ModuleOne from './components/Training/module-1/moduleOne'
import StartTraining from './components/Training/module-1/moduleOneLetter'
import ModuleFive from './components/Training/module-5/moduleFive'

function App() {
  useEffect(() => {
    initGA('UA-159166357-1')
    PageView()
  }, [])
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Route path='/login' component={LoginForm} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/dashboard' component={AdminDash} />
        <Route path='/confirmation' component={ConfirmationPage} />
        <Route path='/:membertype/:id' component={Profile} />
        <Route path='/module0' component={ModuleLetter} />
        <Route path='/module1' component={ModuleOne} />
        <Route path='/modulestart' component={StartTraining} />
        <Route path='/moduleFive' component={ModuleFive} />
      </ThemeProvider>
    </>
  )
}

export default App
