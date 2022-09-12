import React from 'react'
import { PersonalDetailsSettings } from './components/PersonalDetailsSettings';

export const Profile = () => {
  return (
    <div className="settings">
      <main className="main-wrap">
        <h2>Settings</h2>
        <PersonalDetailsSettings />
      </main>
    </div>
  );
}
