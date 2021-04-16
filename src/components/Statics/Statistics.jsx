import { useContext } from "react";
import { ContactsContext } from "../../context/context";
import StatisticsStyles from "./StatisticsStyles";

const Statistics = () => {

    const { all } = useContext(ContactsContext);

    let total = all.length
    let genders = all.map(item => item.gender)
    let gendersPercentM = genders.filter(item => item === "M").length/total*100
    let gendersPercentF = 100 - gendersPercentM;
    let languages = all.map(item => item.language)
    

    return (
        <StatisticsStyles>
            <h1>Resumo Estatístico</h1>
            <div className="main">
                <div className="Gender">
                    <label>Gender:</label><div className="bar">
                        <div style={{width:`${gendersPercentM}%`}}>
                            <p>{gendersPercentM}% M</p>
                        </div>
                    <p>{gendersPercentF}% F</p>
                    </div>
                </div>
                <div className="Language">
                    <label>Language:</label><div className="circle"> <p>Total : {`${languages.length}`}</p>
                    {languages.map((item)=>{
                        console.log(item);
                        return (
                        <div className="languagesList">
                            <p>{item}</p><div style={{width:`${all.length}%`}}></div> {all.length} %
                        </div>
                        )
                        })}</div>
                </div>
            </div>
        </StatisticsStyles>
    )
}

export default Statistics;