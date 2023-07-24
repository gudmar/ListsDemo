import React, { useState } from 'react';
import './App.css';
import { useListStyles } from './appStyles';
import ListsFinal from './CleanVersion/Components/ListsFinal/ListsFinal';
import { useThemesAPI } from './Context/useThemeAPI';
import { SOLIDViolationList } from './SOLIDViolation/Components/SolidViolationWrapper/SOLIDViolationWrapper';

const FINAL = 'Final';
const SOLID_VIOLATION = 'Solid violation'

// const versions = {
//   final: ListsFinal,
//   solidViolation: SOLIDViolationList,
// }

const withVersion = (version: string) => () => {
  if (version === FINAL) { return (<ListsFinal />)}
  return <SOLIDViolationList />
}

type tVersionValues = {
  name: string,
  label: string,
}

interface iSelectVersion {
  setValue: (val: string) => void,
  currentValue: string,
  values: tVersionValues[],
}

const SelectVersion = ({setValue, currentValue, values}: iSelectVersion) => {
  const classes = useListStyles();
  const setInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {setValue(event.target.value)}
  return (
    <div className={classes.selectWrapper}>
      <div className={classes.display}>
        <div className={classes.button}>
          {values.find(({name, label}: tVersionValues) => name === currentValue)?.label}      
        </div>
        <div className={classes.hiddenMenu}>
          {
            values.map(({name, label}: tVersionValues) => (
              <div className={classes.row} key={name}>
                  <input
                    type="radio"
                    id={name}
                    name={name}
                    value={name}
                    checked={currentValue === name}
                    onChange={setInputValue}
                  />
                  <label htmlFor={name}>{label}</label>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

const versions = [
  {
    name: SOLID_VIOLATION,
    label: 'Solid violation'  
  },
  {
    name: FINAL,
    label: 'Corrected version'
  }
]

function App() {
  const [version, setVersion] = useState(SOLID_VIOLATION)
  const ComponentVersion = withVersion(version)
  // return (<>{version}</>);
  return <>
    <SelectVersion
      setValue={setVersion}
      currentValue={version}
      values={versions}
    />
    <ComponentVersion />
  </>

  // return (<SOLIDViolationList/>)
}

export default App;
