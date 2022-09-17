import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../../../../redux/actions/userActions';
import Message from '../../components/loadingError/Error';
import Loading from '../../components/loadingError/Loading';
import { SettingsSideBar } from './components/SettingsSideBar';

export const Settings = () => {

  const dispatch = useDispatch()
    const companyProfile = useSelector((state) => state.companyProfile);
    const { companyDetails, loading, error } = companyProfile;

    // console.log(companyDetails, "details");
  
  useEffect(() => {
    dispatch(getUserProfile());
       
  }, [dispatch]);

  return (
    <div className="settings">
      <main className="main-wrap">
        <h2 className="mb-3">Settings</h2>
        {loading && <Loading />}
        {error && <Message variant={"alert-danger"}>{error}</Message>}
        <SettingsSideBar companyDetails={companyDetails} />
      </main>
    </div>
  );
}
