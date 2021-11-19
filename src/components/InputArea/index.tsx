import * as C from './styles'
import {Item} from '../../types/Item'
import {categories} from '../../data/categories'
import { useEffect, useState } from 'react'

type Props = {
  newItem: (Item:Item) => void
}

export const InputArea = ({newItem} : Props) => {

  const [newDate, setNewDate] = useState(Date)
  const [newCate, setNewCate] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [newValue, setNewValue] = useState('')
  let categoryKeys: string[] = Object.keys(categories);


  const AddItem = () => {
      if((newDate !== "") && (newCate !== "") && (newTitle !== "") && (newValue !== "")){
        let [year, month, day] = newDate.split('-')
        const item: Item = {
          date: new Date(parseInt(year), parseInt(month)-1, parseInt(day)),
          category: newCate,
          title: newTitle,
          value: parseInt(newValue)
        }
        newItem(item)
        setNewDate('')
        setNewCate('')
        setNewTitle('')
        setNewValue('')
      }else{
        window.alert("Preencha todos os campos para Enviar")
      }
    }
  

  return(
    <C.Container>
      <input type="date" value={newDate} onChange={e => setNewDate(e.target.value)}/>
      <select value={newCate} onChange={e=> setNewCate(e.target.value)} >
      <option value="">selecione...</option>
        {categoryKeys.map((value, index)=> (
          <option key={index} value={value}>{categories[value].title}</option>
        ))}
      </select>
      <input type="text" placeholder="informe o titulo do novo item" value={newTitle} onChange={e => setNewTitle(e.target.value) } />
      <input type="number" placeholder="informe valor do novo item" value={newValue} onChange={e => setNewValue(e.target.value) } />
      <button onClick={AddItem} >Adicionar Item</button>
    </C.Container>
  )
}