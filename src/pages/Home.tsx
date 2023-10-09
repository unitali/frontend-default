import Button from "../components/button"

const Home = () => {
    return (
        <div>
            <h1>PÁGINA HOME ...</h1>
            <Button className="mx-5" label="LOGIN" toPath="/login" />
            <Button label="CADASTRO" toPath="/register" />
        </div>
    )
}

export default Home;