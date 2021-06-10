import React, { useState } from 'react';

function FailedCount({failCount}) {

  return (
    <div>
      <span>Nombre d'essai: {failCount}</span>
    </div>
  )
}

export default FailedCount;
