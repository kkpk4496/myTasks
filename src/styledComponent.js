import styled from 'styled-components'

export const MainBgContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const CreateBgTaskContainer = styled.div`
  background-color: #131213;
  width: 40%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: auto;
  justify-content: flex-start;
  padding: 20px;
  align-items: center;
`

export const CreateForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
`

export const FormHead = styled.h1`
  font-size: 30px;
  font-weight: 800;
  color: #f3aa4e;
  font-family: roboto;
`

export const InputLabel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
`

export const Label = styled.label`
  font-size: 20px;
  font-weight: 600;
  color: #f8f8f8;
  margin-bottom: 10px;
  font-family: roboto;
`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 25px;
  font-size: 16px;
  font-weight: 600;
  color: #000000;
  padding-left: 15px;
  outline: none;
  font-family: roboto;
`

export const SelectInput = styled.select`
  width: 100%;
  height: 40px;
  margin-bottom: 25px;
  font-size: 16px;
  font-weight: 600;
  padding-left: 15px;
  outline: none;
  color: #000000;
  font-family: roboto;
`

export const OptionInput = styled.option`
  font-size: 16px;
  font-weight: 500;
  color: #000000;
  font-family: roboto;
`

export const FormBtn = styled.button`
  background-color: #f3aa4e;
  border: none;
  color: #f1f5f9;
  font-size: 14px;
  font-weight: 700;
  height: 40px;
  width: 125px;
  border-radius: 10px;
  font-family: roboto;
`

export const TaskListViewDiv = styled.div`
  background-color: #000000;
  width: 60%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
`

export const TaskListViewDivTitle = styled.h1`
  font-size: 30px;
  font-weight: 800;
  color: #f1f5f9;
  margin-left: 5px;
  font-family: roboto;
`

export const UnOrderedTagList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
`

export const TagsList = styled.li`
  display: flex;
  margin: 7px;
  padding: 0;
`
export const TagBtn = styled.button`
  background-color: ${props => (props.isActive ? '#f3aa4e' : 'transparent')};
  border: 1px solid #f3aa4e;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 800;
  color: #f1f5f9;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  font-family: roboto;
`

export const TasksList = styled.ul`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  min-height: 100%;
  padding: 0px;
`

export const EmptyTaskText = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #f1f5f9;
  align-self: center;
  text-align: center;
  margin-top: 150px;
  font-family: roboto;
`

export const TaskListItems = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #323f4b;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 15px;
  border-radius: 10px;
`
export const TaskText = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #f1f5f9;
  font-family: roboto;
`
export const TaskTag = styled.p`
  background-color: #f3aa4e;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  color: #323f4b;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  font-family: roboto;
`
