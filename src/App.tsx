
import Header from "./components/Header/Header";
import './App.scss';
import PageSectionWrapper from "./components/PageSectionWrapper/PageSectionWrapper";

function App() {

    return (
        <>
            <Header/>
            <PageSectionWrapper id={"about"}>
                <h1>Tepe</h1>
            </PageSectionWrapper>
        </>
    )
}

export default App
