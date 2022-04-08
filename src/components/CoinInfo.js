import React, { useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';
import axios from 'axios';
import { HistoricalChart } from '../config/api';
import { ThemeProvider,createTheme,makeStyles,CircularProgress } from '@material-ui/core';
import { Line } from 'react-chartjs-2';
import { chartDays } from '../config/data';
import SelectButton from "./SelectButton";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    } from 'chart.js';
    
    ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
    );





  const CoinInfo = () => {

  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);
  const { currency } = CryptoState();
  const {id }=useParams();
  //console.log(props.coin)


  const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart(id, days, currency));
    //console.log(data.prices)
   
    setHistoricData(data.prices);
  };

  console.log("data",historicData)

  useEffect(() => {
    fetchHistoricData();
    
    //console.log(id)
  }, [currency,days]);


  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });


  const useStyles = makeStyles((theme) => ({
    container: {
      width: "75%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 25,
      padding: 40,
      [theme.breakpoints.down("md")]: {
        width: "100%",
        marginTop: 0,
        padding: 20,
        paddingTop: 0,
      },
    },
  }));

  const classes = useStyles();

  return (
  
  <ThemeProvider theme={darkTheme}>
       <div className={classes.container}>
           {
               !historicData ? (
                <CircularProgress
                  style={{ color: "gold" }}
                  size={250}
                  thickness={1}
                />
              ) : (
              <>
                <Line
                 data={{
                    labels: historicData.map((coin) => {
                        let date = new Date(coin[0]);
                        let time =
                        date.getHours() > 12
                        ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                        : `${date.getHours()}:${date.getMinutes()} AM`;
                        return days === 1 ? time : date.toLocaleDateString();
                    }),
                    datasets: [
                        {
                          data: historicData.map((coin) => coin[1]),
                          label: `Price ( Past ${days} Days ) in ${currency}`,
                          borderColor: "#EEBC1D",
                        },
                      ],



                }}

                options={{
                    elements: {
                      point: {
                        radius: 1,
                      },
                    },
                  }}
              
                />
                 <div
                  style={{
                  display: "flex",
                  marginTop: 20,
                  justifyContent: "space-around",
                  width: "100%",
                }}
                >
                    {chartDays.map((day) => (
                         <SelectButton
                            key={day.value}
                            onClick={() => {setDays(day.value);
                    }}
                  selected={day.value === days}
                >
                  {day.label}
                </SelectButton>
              ))}
            </div>


              
              </>
              )
           }

       </div>

  </ThemeProvider>
  )
}

export default CoinInfo
