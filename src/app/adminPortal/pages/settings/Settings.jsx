import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getUserProfile } from '../../../../redux/actions/userActions';
import { SettingsSideBar } from './components/SettingsSideBar';

export const Settings = () => {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  return (
    <div className="settings">
      <main className="main-wrap">
        <h2 className="mb-3">Settings</h2>
        <SettingsSideBar />
      </main>
    </div>
  );
}
