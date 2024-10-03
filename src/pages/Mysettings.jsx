import React, { useState } from 'react';

const MySettings = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Account Info */}
      <div className="bg-white p-6 rounded shadow mb-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Account Info</h2>
          <button className="text-purple-500 border border-purple-500 py-1 px-3 rounded">
            Edit Account Info
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
          <div>
            <p>Email: gvikramram63@gmail.com</p>
            <p>Name:</p>
            <p>Address Line 1:</p>
            <p>Address Line 2:</p>
            <p>Country Code:</p>
          </div>
          <div>
            <p>Company Name:</p>
            <p>Company ID:</p>
            <p>Tax ID:</p>
          </div>
        </div>
      </div>

      {/* API Keys */}
      <div>
        <button
          onClick={() => toggleSection('apiKeys')}
          className="w-full bg-white p-4 text-left text-lg font-semibold border rounded mb-2"
        >
          API Keys
        </button>
        {openSection === 'apiKeys' && (
          <div className="p-4 bg-gray-100 border mb-4">API Keys content...</div>
        )}
      </div>

      {/* Login Settings */}
      <div>
        <button
          onClick={() => toggleSection('loginSettings')}
          className="w-full bg-white p-4 text-left text-lg font-semibold border rounded mb-2"
        >
          Login Settings
        </button>
        {openSection === 'loginSettings' && (
          <div className="p-4 bg-gray-100 border mb-4">Login Settings content...</div>
        )}
      </div>

      {/* Active Sessions */}
      <div>
        <button
          onClick={() => toggleSection('activeSessions')}
          className="w-full bg-white p-4 text-left text-lg font-semibold border rounded mb-2"
        >
          Active Sessions
        </button>
        {openSection === 'activeSessions' && (
          <div className="p-4 bg-gray-100 border mb-4">Active Sessions content...</div>
        )}
      </div>

      {/* Container Registry Auth */}
      <div>
        <button
          onClick={() => toggleSection('containerRegistry')}
          className="w-full bg-white p-4 text-left text-lg font-semibold border rounded mb-2"
        >
          Container Registry Auth
        </button>
        {openSection === 'containerRegistry' && (
          <div className="p-4 bg-gray-100 border mb-4">Container Registry Auth content...</div>
        )}
      </div>

      {/* Notification Settings */}
      <div>
        <button
          onClick={() => toggleSection('notificationSettings')}
          className="w-full bg-white p-4 text-left text-lg font-semibold border rounded mb-2"
        >
          Notification Settings
        </button>
        {openSection === 'notificationSettings' && (
          <div className="p-4 bg-gray-100 border mb-4">Notification Settings content...</div>
        )}
      </div>

      {/* SSH Public Keys */}
      <div>
        <button
          onClick={() => toggleSection('sshKeys')}
          className="w-full bg-white p-4 text-left text-lg font-semibold border rounded mb-2"
        >
          SSH Public Keys
        </button>
        {openSection === 'sshKeys' && (
          <div className="p-4 bg-gray-100 border mb-4">SSH Public Keys content...</div>
        )}
      </div>

      {/* Danger Zone */}
      <div>
        <button
          onClick={() => toggleSection('dangerZone')}
          className="w-full bg-white p-4 text-left text-lg font-semibold border border-red-500 rounded mb-2"
        >
          Danger Zone
        </button>
        {openSection === 'dangerZone' && (
          <div className="p-4 bg-red-100 border border-red-500 mb-4">Danger Zone content...</div>
        )}
      </div>
    </div>
  );
};

export default MySettings;
