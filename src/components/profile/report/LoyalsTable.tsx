import { Loyal } from "../../../utilities"
import { LoyalsTableContent } from "./LoyalsTableContent"

type LoyalsTableProps = {
    loyalData: Loyal | undefined
    }


const LoyalsTable = ({loyalData}: LoyalsTableProps) => {
  return (
    <table className="table table-striped table table-hover table table-sm">
    <thead>
      <th className="p-2 text-center" scope="col">
        ID
      </th>
      <th className="p-2 text-center" scope="col">
        Estado Académico
      </th>
    </thead>
    <tbody className="table-group-divider">
      {loyalData?.loyals.map((loyal) => (
        <LoyalsTableContent loyal={loyal} key={loyal.id}/>
      ))}
    </tbody>
  </table>
  )
}

export default LoyalsTable