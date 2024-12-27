import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Container from '@mui/material/Container';
import Header from './components/Headers/header';
import Definitions from './components/Definitions/definitions';
import { alpha, styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Switch from '@mui/material/Switch';


function App() {
  const [word, setWord] = useState('')
  const [meanings, setMeanings] = useState([])
  const [category, setCategory] = useState('en')
  const [LightMode, setLightMode] = useState(false)

  const DarkMode = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: grey[600],
      '&:hover': {
        backgroundColor: alpha(grey[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: grey[600],
    },
  }));

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      )
      setMeanings(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(meanings)

  useEffect(() => {
    dictionaryApi()
  }, [word, category])

  return (
    <div className="App"
      style={{
        height: '100vh',
        backgroundColor: LightMode ? "white" : 'gray',
        color: LightMode ? "black" : 'white',
        transition: "all 0.5s linear"
      }}>
      <Container maxWidth="md" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        {/* <Switch defaultChecked color="secondary" /> */}
        <div
          style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
        >
          <span>{LightMode ? "Dark" : "Light"} Mode</span>
          <DarkMode
            checked={LightMode}
            onChange={() => setLightMode(!LightMode)}
          />
        </div>
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
          LightMode={LightMode}
        />
        {meanings && (
          <Definitions
            word={word}
            category={category}
            meanings={meanings}
            LightMode={LightMode}
          />)}
      </Container>
    </div>
  );
}

export default App;
