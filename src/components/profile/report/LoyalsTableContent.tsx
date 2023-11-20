import { Loyals } from "../../../utilities";

interface LoyalsTableContentProps {
  loyal: Loyals;
}

export const LoyalsTableContent = ({ loyal }: LoyalsTableContentProps) => {
  return (
    <tr>
      <td className="p-1 text-center">{loyal.id.slice(10)}</td>
      <td className="p-1 text-center">{loyal.stateSemester}</td>
    </tr>
  );
};
