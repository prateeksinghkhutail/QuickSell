import React, { useState } from 'react';

const ReferralSystem = () => {
  const [referralLink, setReferralLink] = useState('');

  const generateLink = () => {
    // Generate a unique referral link
    const link = `https://quicksell.com/signup?ref=${Math.random().toString(36).substring(7)}`;
    setReferralLink(link);
  };

  return (
    <div className="referral-system">
      <h3>Invite Friends and Earn Rewards</h3>
      <button onClick={generateLink}>Generate Referral Link</button>
      {referralLink && (
        <p>Your referral link: <a href={referralLink}>{referralLink}</a></p>
      )}
    </div>
  );
};

export default ReferralSystem;
