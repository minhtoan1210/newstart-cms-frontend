import { Route, Switch} from 'react-router';
/**
 * 
 * @param {*} routers: []
 */
function routersConfig(routers) {
  return <Switch>
      {
          routers.map(e=>{
              let {exact,path,component:Component,routers: childRouters}=e

              let children=[]
              if(childRouters)
              {
                children =routersConfig(childRouters)
              }
              return <Route exact={exact} path={path} component={(prop) => <Component {...prop}>{children}</Component>} />  
          })
          
      }
  </Switch>
}
export default routersConfig;