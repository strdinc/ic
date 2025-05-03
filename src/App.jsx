import './App.css'
import IdigitLogo from './Images/IdigitLogo.svg'
import Waves from './blocks/Backgrounds/Waves/Waves.jsx';

function App() {

    return (
        <>
            <div className="Container">
                <Waves
                    lineColor="#ACB6FFFF"
                    backgroundColor="rgba(255, 255, 255, 0.2)"
                    waveSpeedX={0.02}
                    waveSpeedY={0.01}
                    waveAmpX={40}
                    waveAmpY={20}
                    friction={0.9}
                    tension={0.01}
                    maxCursorMove={120}
                    xGap={12}
                    yGap={36}
                />
                <div className="Header">
                    <img className={'IdigitLogo'} src={IdigitLogo}/>
                    <div className="MenuButtons">
                        <button id={'About'} className={'MenuButton'}>Об институте</button>
                        <button id={'Education'} className={'MenuButton'}>Образование</button>
                        <button id={'Science'} className={'MenuButton'}>Наука</button>
                        <button id={'ForStudents'} className={'MenuButton'}>Студентам</button>
                        <button id={'ForApplicant'} className={'MenuButton'}>Абитуриентам</button>
                        <button id={'Contacts'} className={'MenuButton'}>Контакты</button>
                    </div>
                </div>
                <div className="TitleTexts">
                    <div className="TitleTextFirst TitleText"><a className={'DarkerWordTitle'}>УНИКАЛЬНАЯ</a> НЕ ТОЛЬКО</div>
                    <div className="TitleTextSecond TitleText">ПО МЕРКАМ <a className={'DarkerWordTitle'}>КУЗБАССА</a></div>
                    <div className="TitleTextThird TitleText">НО И <a className={'DarkerWordTitle'}>РОССИИ</a> ПЛОЩАДКА</div>
                </div>
                <div className="SubTitle">с 2020 года выпускаем IT-кадры</div>
            </div>
        </>
    )
}

export default App
