import React from "react";

import ProfilePict from "./../../../../assets/img/profile.png";

export default function index() {
  return (
    <div className="profile-thumb">
      <img src={ProfilePict} className="profile-pict" alt="Profile" />
    </div>
  );
}
