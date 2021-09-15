import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {

    const onNavigate = ({ pathname: nextPathName }) => {
      const {pathname} = history.location;
      
      if(pathname !== nextPathName){
        history.push(nextPathName)
      }
    }

    const { onParentNavigate } = mount(ref.current, {
      onNavigate
    });

    history.listen(onParentNavigate)

  }, [history, mount]);

  return <div ref={ref} />;
};
