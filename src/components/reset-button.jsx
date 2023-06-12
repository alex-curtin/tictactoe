import './reset-button.css';

const ResetButton = ({ resetGame }) => {
  return (
    <button className="reset" onClick={resetGame}>
      reset game
    </button>
  );
};

export default ResetButton;
