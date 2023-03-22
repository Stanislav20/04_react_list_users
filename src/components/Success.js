import React from 'react';
import './Success.css'

function Success({ count }) {
  return (
    <div class="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Успешно!</h3>
			<p>{`${count>1 ? `Всем ${count} пользователям отправлено приглашение.` : 'Одному пользователю отправлено приглашение.'}`}</p>
      <button onClick={() => window.location.reload()}className="send-invite-btn">Назад</button>
    </div>
  );
};

export default Success