import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, useLocation, useHistory } from 'react-router-dom';
import { selectToken } from '@/store/modules/app';
// import { getToken } from "@/utils/auth";

const PrivateRoute = ({ render, ...rest }) => {
  const { pathname, search } = useLocation();
  const token = useSelector(selectToken);

  const history = useHistory();
  useEffect(() => {
    if (!token) {
      history.push('/login', { from: pathname + search });
    }
  }, [history, pathname, search, token]);
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          render(props)
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: pathname + search
              }
            }}
          />
        )
      }
    />
  );
};

// const mapStateToProps = (state: any) => {
//   return {
//     token: getToken(state)
//   };
// };

// export default connect(mapStateToProps, null)(PrivateRoute);
export default PrivateRoute;
