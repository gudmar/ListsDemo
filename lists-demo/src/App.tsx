import { useState } from 'react';
import './App.css';
import ListsFinal from './CleanVersion/Components/ListsFinal/ListsFinal';
import { SOLIDViolationList } from './SOLIDViolation/Components/SolidViolationWrapper/SOLIDViolationWrapper';

const versions = {
  final: ListsFinal,
  solidViolation: SOLIDViolationList,
}

function App() {
  const [version, setVersion] = useState(versions.solidViolation)
  return (<>{version}</>);
}

export default App;
