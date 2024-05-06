import useSite from '../Utils/useSite'
import { CardMini } from './CardMini'
import { ShowDate } from './ShowDate'
import { Badge } from './ui/badge'

export const SiteListing = () => {
  const sites = useSite()

  const statusListDisplay = () => {
    type status = { text: string; value: number }

    const statusList: status[] = [
      { text: 'ok', value: 120 },
      { text: 'Dégradé', value: 74 },
      { text: 'A l’arrêt', value: 10 },
      { text: 'pas de données', value: 8 },
    ]
    return statusList.map((e, index) => (
      <li key={index}>
        <Badge className="dark:bg-slate-800 bg-slate-500 dark:text-white">
          {e.value}
          <span className=" opacity-60 pl-2">{e.text}</span>
        </Badge>
      </li>
    ))
  }

  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row items-center justify-between py-8">
        <h5 className="text-lg font-semibold leading-none text-slate-600 dark:text-slate-500">
          Taux de production par sites
          <br />{' '}
          <span className=" font-normal text-sm text-slate-400 dark:text-slate-500">
            <ShowDate />
          </span>
        </h5>
        <ul className="inline-flex justify-center sm:justify-start flex-wrap gap-2">
          {statusListDisplay()}
        </ul>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-2">
        {sites.map((site, index) => (
          <CardMini key={index} site={site} />
        ))}
        {sites.map((site, index) => (
          <CardMini key={index} site={site} />
        ))}
        {sites.map((site, index) => (
          <CardMini key={index} site={site} />
        ))}
        {sites.map((site, index) => (
          <CardMini key={index} site={site} />
        ))}
        {sites.map((site, index) => (
          <CardMini key={index} site={site} />
        ))}
      </div>
    </>
  )
}
