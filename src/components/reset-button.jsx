import './reset-button.css';

const ResetButton = ({ resetGame }) => {
  return (
    <div className="reset-btn-container">
      <button className="reset" onClick={resetGame}>
        reset game
      </button>
    </div>
  );
};

export default ResetButton;
