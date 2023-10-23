interface Props {
  setValueSelected: (value: boolean) => void;
}

function ResultView({ setValueSelected }: Props) {
  return (
    <div>
      <div className="flex w-full justify-between text-center text-white">
        <p>Paper</p>
        <p>Computer: todo</p>
      </div>
      <button
        type="button"
        onClick={() => setValueSelected(false)}
        className="text-white"
      >
        Play again
      </button>
    </div>
  );
}

export default ResultView;
