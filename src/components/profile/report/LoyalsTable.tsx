import { Loyal } from "../../../utilities"
import { LoyalsTableContent } from "./LoyalsTableContent"

type LoyalsTableProps = {
    loyalData: Loyal | undefined
    }


const LoyalsTable = ({loyalData}: LoyalsTableProps) => {
  return (
    <table className="table  table-hover table-sm">
  <thead className="bg-primary text-white">
    <tr>
      <th className="p-2 text-center" scope="col">
        ID
      </th>
      <th className="p-2 text-center" scope="col">
        Estado académico
      </th>
    </tr>
  </thead>
  <tbody>
    {loyalData?.loyals.map((loyal) => (
      <LoyalsTableContent loyal={loyal} key={loyal.id}/>
    ))}
  </tbody>
</table>

  )
}

export default LoyalsTable