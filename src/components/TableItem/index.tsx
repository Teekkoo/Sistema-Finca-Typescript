import * as C from './styles'
import {Item} from '../../types/Item'
import {formatDate} from '../../helpers/dateFilter'
import {categories} from '../../data/categories'

type Props = {
  item: Item
}

export const TableItem = ({item} : Props) => {
  return(
    <C.TableLine>
      <C.TalbeColumn>{formatDate(item.date)}</C.TalbeColumn>
      <C.TalbeColumn>
        <C.category color={categories[item.category].color}>
          {categories[item.category].title}
          </C.category>
        </C.TalbeColumn>
      <C.TalbeColumn>{item.title}</C.TalbeColumn>
      <C.TalbeColumn>
        <C.Value color={categories[item.category].expense ? 'red' : 'green'} >
          R$ {item.value}
        </C.Value>
      </C.TalbeColumn>
    </C.TableLine>
  )
}