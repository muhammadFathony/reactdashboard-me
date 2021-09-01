import React, { Suspense} from 'react'
import {
  Route,
  Switch,
  withRouter,
  Redirect
} from 'react-router-dom'
import { CContainer, CFade } from '@coreui/react'

// routes config
import routes from '../routes'
  
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheContent = (props) => {
  // const token = localStorage.getItem('simrs_token');
  // useEffect(() => {
  //   if(!token){
  //     props.history.push('/login');
  //   }
  // }, [])
  return (
    <main className="c-main">
      <CContainer fluid>
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
              return route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <CFade>
                      <route.component {...props} />
                    </CFade>
                  )} />
              )
            })}
            <Route path="*">
              <Redirect to="/404" />
            </Route>
            
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  )
}

export default withRouter(TheContent)
