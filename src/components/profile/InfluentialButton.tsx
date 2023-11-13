interface InfluentialButtonProps {
  rate: number;
}

export const InfluentialButton = ({ rate }: InfluentialButtonProps) => {
  return (
    <>
      {rate >= 0.5 ? (
        <h3
          className={`text-start m-1 ${rate >= 0.8 ? "text-danger" : ""} ${
            rate >= 0.5 && rate < 0.8 ? "text-warning" : ""
          }`}
        >
          <i className="bi bi-exclamation-square-fill"></i>
        </h3>
      ) : null}
    </>
  );
};
