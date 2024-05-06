import { useUiDateContext } from '../Utils/UiContext'

export const ShowDate = () => {
  const selectionDate = useUiDateContext()

  return selectionDate.toLocaleString('fr-FR', { dateStyle: 'full' })
}
