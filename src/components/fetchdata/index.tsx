import React, { useEffect } from 'react';
import { IRootState } from 'store/combineReducer';
import { fetchCats } from 'store/reducer/fetch';
import { useSelector, useDispatch } from 'react-redux';

export default () => {
  const { data, meta } = useSelector((rootState: IRootState) => rootState.fetchUser);
  const dispatch = useDispatch();
  console.log(data);

  useEffect(() => {
    dispatch(fetchCats());
  }, [dispatch]);
  return (
    <div>
      {meta.loading ? <p>loading....</p> :
        data.map((i, index) =>
          <div key={index} >
            <li>{i.name}</li>
          </div>)}
    </div>
  );
};
