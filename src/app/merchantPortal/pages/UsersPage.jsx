import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../redux/actions/userActions';
import { UserComponent } from '../components/users/UserComponent';

export const UsersPage = () => {

    const dispatch = useDispatch();
    const allUsers = useSelector((state) => state.userList);
    const { loading, error, users } = allUsers;
   
  const [value, setValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = users?.filter((user) => {
        return (
          user.name.toLowerCase().includes(keyword.toLowerCase()) ||
          user.email.toLowerCase().includes(keyword.toLowerCase())
        );
      });
    

      setFilteredData(results);
    } else {
      setFilteredData(users);
    }
    setValue(keyword);
  };

    useEffect(() => {
      dispatch(getUsers());
    }, [dispatch]);

  return (
    <div>
      <main className="main-wrap">
        <UserComponent
          users={filteredData?.length > 0 ? filteredData : users}
          handleFilter={handleFilter}
          value={value}
          setValue={setValue}
          error={error}
          loading={loading}
        />
      </main>
    </div>
  );
}
