import { Filters } from "../../components/Filters/Filters"
import { GamesList } from "../../features/games/GamesList"

const Main = () => {
  return(
    <>
      <Filters/>
      <GamesList/>
    </>
  )
}

export {Main}